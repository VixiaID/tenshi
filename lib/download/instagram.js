import cheerio from 'cheerio';
import got from 'got';

function Instagram(url) {
  return new Promise((resolve, reject) => {
    got.get(url).then(response => {
      const $ = cheerio.load(response.body);
      const script = $('script[type="application/ld+json"]').text();
      const data = JSON.parse(script);
      const user = data.author;
      const video = data.video[0];
      resolve({
        name: video.name.replace(/\n/, ''),
        caption: video.caption.replace(/\n/, ''),
        description: video.description.replace(/\n/, ''),
        upload_by: {
          name: user.name,
          username: user.identifier.value,
          url: user.url
        },
        uploads: video.uploadDate,
        thumbnail: video.thumbnailUrl,
        link: video.contentUrl
      });
    });
  }).catch(error => {
    return error;
  });
}

export default Instagram;
