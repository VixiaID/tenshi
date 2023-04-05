import cheerio from 'cheerio';
import got from 'got';

function Otakudesu(query) {
  return new Promise((resolve, reject) => {
    console.log(encodeURIComponent(query))
    got(`https://otakudesu.lol/?s=${query}&post_type=anime`)
    .then((response) => {
      const $ = cheerio.load(response.body);
      const anlink = $('h2 > a').attr('href');
      got.get(anlink)
      .then((response2) => {
        const $$ = cheerio.load(response2.body);
        const data = $$('div.infozingle');
        const title = $$(data).find('p:nth-child(1)').text().replace('Judul:', '').trim();
        const japan = $$(data).find('p:nth-child(2)').text().replace('Japanese:', '').trim();
        const score = $$(data).find('p:nth-child(3)').text().replace('Skor:', '').trim();
        const producer = $$(data).find('p:nth-child(4)').text().replace('Produser:', '').trim();
        const type = $$(data).find('p:nth-child(5)').text().replace('Tipe:', '').trim();
        const status = $$(data).find('p:nth-child(6)').text().replace('Status:', '').trim();
        const episode = $$(data).find('p:nth-child(7)').text().replace('Total Episode:', '').trim();
        const duration = $$(data).find('p:nth-child(8)').text().replace('Durasi:', '').trim();
        const release = $$(data).find('p:nth-child(9)').text().replace('Tanggal Rilis:', '').trim();
        const studio = $$(data).find('p:nth-child(10)').text().replace('Studio:', '').trim();
        const genre = $$(data).find('p:nth-child(11)').text().replace('Genre:', '').trim();
        const description = $$('div.sinopc').text();
        const batch = $$('div.episodelist > ul > li > span > a').attr('href');
       resolve({
          title,
          japan,
          score,
          producer,
          type,
          status,
          episode,
          duration,
          release,
          studio,
          description,
          batch
        });
      })
      .catch(error => {
        reject(error);
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

export default Otakudesu;