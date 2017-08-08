const seedImages = require('./seedImages');
const seedInterests = require('./seedInterests');

module.exports = function(mongoose) {
  seedInterests(mongoose)
  .then(success => {
    seedImages(mongoose)
  });
}
