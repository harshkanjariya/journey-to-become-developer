let links = {
  pops: {
    baseUrl: '/procedure-oriented-programming',
    vars: {
      baseUrl: '/variables-and-data-types',
      int: '/int',
      float: '/float'
    },
    funs: {
      baseUrl: '/functions'
    }
  }
};

function fillBaseUrl(obj, baseUrl = '') {
  if (typeof obj === 'string') {
    return;
  }
  Object.keys(obj).forEach((key) => {
    if (key === 'baseUrl') return;
    if(typeof obj[key] === 'string') obj[key] = baseUrl + obj[key];
    else {
      obj[key].baseUrl = baseUrl + obj[key].baseUrl;
      fillBaseUrl(obj[key], obj[key].baseUrl);
    }
  });
  return obj;
}
fillBaseUrl(links);

export {
  links,
}
