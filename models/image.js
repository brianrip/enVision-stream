const uniqueValidator = require('mongoose-unique-validator');
var random = require('mongoose-simple-random');

const stream = require('getstream-node');
const StreamMongoose = stream.mongoose;

module.exports = function(config, mongoose) {
  const Schema = mongoose.Schema;

  const schema = new Schema({
    urls: {
      type: Schema.Types.Mixed,
      require: true
    },
    foreignId: {
      type: 'String',
      required: true,
      unique: true
    },
    interest: {
      type: Schema.Types.ObjectId,
      ref: 'Interest',
      required: true
    },
    interestTitle: {
      type: String,
    }
  },
  {
    autoIndex: false,
    minimize: false,
    timestamps: true,
  });

  schema.plugin(uniqueValidator);
  schema.plugin(random);
  schema.plugin(StreamMongoose.activity);

  schema.methods.createActivity = function() {
    const activity = {
      actor: `Interest:${this.interest._id}`,
      verb: 'publish',
      image: this.urls.small,
      object: `Image:${this._id}`,
      foreign_id: `Image:${this._id}`
    }

    return activity;
  }

  StreamMongoose.setupMongoose(mongoose);

  return mongoose.model('Image', schema);
}
