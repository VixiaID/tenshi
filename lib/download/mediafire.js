import cheerio from 'cheerio';
import got from 'got';
import mime from 'mime-types';

function Mediafire(url) {
  return new Promise((resolve, reject) => {
    got.get(url)
    .then((response) => {
      if (response.statusCode !== 200) {
        throw new Error(`Mediafire: ${(response.statusMessage).toLowerCase()}`);
      }
      const $ = cheerio.load(response.body);
      const filename = $('div.filename').text();
      const filetype = mime.lookup(filename);
      const filesize = $('ul.details > li:nth-child(1) > span').text();
      const uploaded = $('ul.details > li:nth-child(2) > span').text();
      const link = $('a#downloadButton').attr('href');
      resolve({
        name: filename,
        type: filetype,
        size: filesize,
        uploads: uploaded,
        link: link
      });
    })
    .catch(error => {
      reject(error);
    });
  })
  .catch(error => {
    return error;
  });
}

export default Mediafire;