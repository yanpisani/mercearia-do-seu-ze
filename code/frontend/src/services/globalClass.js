class Global {
  getId(url_param) {
    if (url_param) {
      if (url_param.charAt(url_param.length - 1) === '/') {
        url_param = url_param.slice(0, -1);
      }
      let auxCont = -1;
      while (url_param.slice(auxCont)[0] !== '/') {
        auxCont--;
      }
      return url_param.slice(auxCont + 1);
    } else {
      return '';
    }
  }
}

const global = new Global();
export default global;
