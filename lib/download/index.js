import Facebook from './facebook.js';
import Instagram from './instagram.js';
import Mediafire from './mediafire.js';
import Pixeldrain from './pixeldrain.js';
import * as check from '../utils/checkUrl.js';

async function facebook(url) {
  try {
    if (!url) {
      throw new Error('Url required');
    } else if ((await check.fbUrl(url)) == false) {
      throw new Error('Invalid facebook url');
    } else {
      const data = await Facebook(url);
      return data;
    }
  } catch (error) {
    throw error;
  }
}

async function instagram(url) {
  try {
    if (!url) {
      throw new Error('Url required');
    } else if ((await check.igUrl(url)) == false) {
      throw new Error('Invalid anonfiles url');
    } else {
      const data = await Instagram(url);
      return data;
    }
  } catch (error) {
    throw error;
  }
}

async function mediafire(url) {
  try {
    if (!url) {
      throw new Error('Url required');
    } else if ((await check.mfUrl(url)) == false) {
      throw new Error('Invalid anonfiles url');
    } else {
      const data = await Mediafire(url);
      return data;
    }
  } catch (error) {
    throw error;
  }
}

async function pixeldrain(url) {
  try {
    if (!url) {
      throw new Error('Url required');
    } else if ((await check.pdUrl(url)) == false) {
      throw new Error('Invalid pixeldrain url');
    } else {
      const data = await Pixeldrain(url);
      return data;
    }
  } catch (error) {
    throw error;
  }
}

export { facebook, instagram, mediafire, pixeldrain };
