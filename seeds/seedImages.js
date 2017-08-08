const request = require('request');

module.exports = function(mongoose) {
  const Image = mongoose.model('Image');
  const Interest = mongoose.model('Interest');

  Image.count({}, (err, count) => {
    if (count > 0) {
      return
    } else {
      Interest.find({}).exec()
      .then(interests => {
        const promises = interests.map(interest => {
          fetchAndCreateImages(interest, Image);
        })

        return Promise.all(promises)
      })
      .then(success => {
        return success
      })
      .catch(err => {
        console.error(err);
      });
    }
  })
}

function fetchAndCreateImages(interest, Image) {
  const options = {
    url: `https://api.unsplash.com/search/photos?query=${interest.title}&per_page=20`,
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Client-ID 27bdb6e41c288fe0ca175782ad2de37fb452d9d184021d930d2bc45f73cc0f60'
    }
  };

  return new Promise((resolve, reject) => {
    request(options, (err, response, body) => {
      if (err) {
        reject(err)
      }
      const images = JSON.parse(response.body).results;

      const formattedImages = images.map(image => {
        return {
          foreignId: image.id,
          urls: image.urls,
          interest: interest._id,
          interestTitle: interest.title
        }
      })

      Image.create(formattedImages, (err, images) => {
        if (err) console.error(err);

        return resolve(images);
      })

    });
  });
}
