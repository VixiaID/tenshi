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
    return error.message;
  }
}

export { otakudesu };