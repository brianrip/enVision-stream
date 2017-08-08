
module.exports = function(config, mongoose) {
  const stream = require('getstream-node');

  const StreamMongoose = stream.mongoose;
  const FeedManager = stream.FeedManager;

  const Schema = mongoose.Schema;

  const schema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true
    },
    target: {
      type: Schema.Types.ObjectId,
      ref: 'Interest',
      required: true
    }
  },
  {
    autoIndex: false,
    minimize: false,
    timestamps: true,
  });

  schema.plugin(StreamMongoose.activity);

  schema.post('save', function(follow) {
    FeedManager.followUser(follow.user, follow.target);
  });

  schema.post('remove', function(follow) {
    FeedManager.unfollowUser(follow.user, follow.target);
  });

  schema.methods.activityForeignId = function() {
    return this.user._id + ':' + this.target._id;
  };

  schema.statics.pathsToPopulate = function(){
    return ['user', 'target'];
  };

  StreamMongoose.setupMongoose(mongoose);

  return mongoose.model('Follow', schema);
}
