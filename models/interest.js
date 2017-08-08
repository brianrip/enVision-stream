const stream = require('getstream-node');
const uniqueValidator = require('mongoose-unique-validator');

const StreamMongoose = stream.mongoose;

module.exports = function(config, mongoose) {
  const Schema = mongoose.Schema;

  const schema = new Schema({
    title: {
      type: 'String',
      require: true,
      unique: true
    },
    image: {
      type: 'String',
      required: true
    }
  },
  {
    autoIndex: false,
    minimize: false,
    timestamps: true,
  });

  schema.plugin(uniqueValidator);

  return mongoose.model('Interest', schema);
}
