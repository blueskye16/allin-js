const API = {
  fetch(name, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (delay < 0 ) {
          return reject(new Error('Invalid Delay'));
        }
  
        return resolve(`Hello ${name}`);
      }, delay)
    });
  }
};

export default API;