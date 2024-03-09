function fbUrl(url) {
  const res1 = /^https?:\/\/www\.facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
  const res2 = /^https?:\/\/(?:www.)?facebook.com\/reel\/([^\/?#&]+).*/gm;
  return({ status: res1.test(url) || res2.test(url) });
}

function igUrl(url) {
  const res = /https?:\/\/(?:www.)?instagram.com\/reel\/([^\/?#&]+).*/gm;
  return ({ status: res.test(url) });
}

function mfUrl(url) {
  const res1 = /^(https?:\/\/)?(www\.)?mediafire\.com\/\?[a-zA-Z0-9]+$/m;
  const res2 = /^(https?:\/\/)?(www\.)?mediafire\.com\/(file|view|download)\/[a-zA-Z0-9]+(\/[a-zA-Z0-9_\-\.~%]+)?(\/file)?$/m;
  return({ status: res1.test(url) || res2.test(url) });
}

function pdUrl(url) {
  const res = /https?:\/\/pixeldrain.com\/u\/([a-zA-Z0-9]+)/;
  return({ status: res.test(url) });
}


export { fbUrl, igUrl, mfUrl, pdUrl };