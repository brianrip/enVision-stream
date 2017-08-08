module.exports = function (mongoose) {
  const Interest = mongoose.model('Interest');

  return new Promise((resolve, reject) => {

    Interest.count().exec((err, count) => {
      if (count > 0) {
        resolve();
      } else {
        // 1.
        const hiking = new Interest({
          title: 'hiking',
          image: "https://images.unsplash.com/photo-1445283142063-f4802ea5aac3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=a2106af0b9f7916f6e9769fd1682e11a"
        });

        // 2.
        const cityscape = new Interest({
          title: 'cityscape',
          image: "https://images.unsplash.com/photo-1430287974932-fedd98142f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=a23a2bd192d73a0b68a8da44bef576ee"
        });

        // 3.
        const climbing = new Interest({
          title: 'climbing',
          image: "https://images.unsplash.com/photo-1489222499870-355327f7bad2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=384196ff52ed13c19a679bb3bc531b11"
        });

        // 4.
        const sailing = new Interest({
          title: 'sailing',
          image: "https://images.unsplash.com/photo-1474915380005-b538cf01fe7b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=d7cde4c94c26d8f5277af572e7aaa420"
        });

        // 5.
        const skiing = new Interest({
          title: 'skiing',
          image: "https://images.unsplash.com/photo-1488410766174-4d3ab8efd321?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=51ffc879af09e579429605300ac7271e"
        });

        // 6.
        const snowboarding = new Interest({
          title: 'snowboarding',
          image: "https://images.unsplash.com/photo-1488410766174-4d3ab8efd321?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=51ffc879af09e579429605300ac7271e"
        });

        // 7.
        const mountainBiking = new Interest({
          title: 'mountainBiking',
          image: "https://images.unsplash.com/photo-1482173233022-6abffcec1158?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=a0f9921da7de58f640f0dcb3d80437e8"
        });

        // 8.
        const sunset = new Interest({
          title: 'sunset',
          image: "https://images.unsplash.com/photo-1414500923875-1704944d8df7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=0477e01e9409427bb968b0ee9021b8c2"
        });

        // 9.
        const storms = new Interest({
          title: 'storms',
          image: "https://images.unsplash.com/photo-1490328364006-da97e82d5511?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=df0b17bd9d6dbb14b1502518fdd4ee03"
        });

        // 10.
        const mountaineering = new Interest({
          title: 'mountaineering',
          image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=bc81cec6fbfb277b6e20add26c52e8fe"
        });

        Interest.create([
          hiking,
          cityscape,
          climbing,
          sailing,
          skiing,
          snowboarding,
          mountainBiking,
          sunset,
          storms,
          mountaineering,
        ], (err, interests) => {
          if (err) {
            console.error(err);
            reject(err);
          }
          console.log('Seeded 10 Interests!');

          resolve(interests);
        });
      }
    });

  })
}
