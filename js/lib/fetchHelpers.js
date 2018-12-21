const cache = {};

function fetchJSON(url, fallbackData) {
  if(cache[url]) {
    return Promise.resolve(cache[url]);
  }
  
  return fetch(url)
    .then(res => res.ok ? res.json() :  fallbackData)
    .then(json => {
      cache[url] = json;
      return json;
    });
}