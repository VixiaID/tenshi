import Otakudesu from './otakudesu.js';

async function otakudesu(query) {
  try {
    if (!query) {
      throw(new Error('Query required'));
    } else {
      const data = await Otakudesu(query);
      return data;
    }
  } catch(error) {
    throw error;
  }
}

export { otakudesu };