class EasyHTTP {


  get(url) {
    return new Promise((resolve, reject)=> {

      fetch (url) 
      // fetch returns a promise 
      // we parse that promise data from json into javascript (using json.parse() in the background)
      // then we return it and pass it to the second .then
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))

    });   
  }

  post(url, data) {
    return new Promise((resolve, reject)=> {

      fetch (url, {
        method: 'POST', 
        headers: {
          'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data)
      }) 
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))

    });   
  }

  put(url, data) {
    return new Promise((resolve, reject)=> {

      fetch (url, {
        method: 'PUT', 
        headers: {
          'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data)
      }) 
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))

    });   
  }

  delete(url) {
    return new Promise((resolve, reject)=> {

      fetch (url, {
        method: 'DELETE', 
        headers: {
          'Content-type': 'application/json'
        }
      }) 
      .then(res => res.json())
      .then(() => resolve('Resource deleted'))
      .catch(err => reject(err))
    });   
  }


}