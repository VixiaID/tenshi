import cheerio from 'cheerio';
import got from 'got';
import mime from 'mime-types';

function Anonfiles(url) {
  return new Promise((resolve, reject) => {
    got.get(url)
    .then((response) => {
      const $ = cheerio.load(response.body);
      const status = $('h1.text-center').text();
      if (status.includes('does not exist')) {
        throw new Error(`Anonfiles: ${status.toLowerCase()}`);
      }
      const filename = $('h1.text-center').text();
      const filetype = mime.lookup(filename);
      const filesize = $('a#download-url').text().trim().match(/\(([\d\.]+) (B|KB|MB|GB)\)/i);
      const link = $('a#download-url').attr('href');
      
      resolve({
        name: filename,
        type: filetype,
        size: `${filesize[1]} ${filesize[2]}`,
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

export default Anonfiles;