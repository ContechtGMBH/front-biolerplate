export default class ClientApi {

  constructor(apiUrl) {

    this.apiUrl = apiUrl;

    this.defaultOptions = { headers: {}, credentials: false };

  }


  get(endpoint, options = this.defaultOptions ) {

    const url = this.apiUrl + endpoint;

    return fetch( url, {

      method: 'GET',
      headers: options.headers,
      credentials: (options.credentials) ? 'include' : 'same-origin'

    })
    .then( response => response )

  }

  post(endpoint, data = {}, options = this.defaultOptions ) {

    const url = this.apiUrl + endpoint;

    return fetch( url, {

      method: 'POST',
      headers: options.headers,
      body: JSON.stringify(data),
      credentials: (options.credentials) ? 'include' : 'same-origin'

    })
    .then( response => response );

  }

  put(endpoint, data = new FormData(), options = this.defaultOptions ) {

    const url = this.apiUrl + endpoint;

    return fetch( url, {

      method: 'PUT',
      headers: options.headers,
      body: data,
      credentials: (options.credentials) ? 'include' : 'same-origin'

    })
    .then( response => response );

  }

  delete(endpoint, options = this.defaultOptions ) {

    const url = this.apiUrl + endpoint;

    return fetch( url, {

      method: 'DELETE',
      headers: options.headers,
      credentials: (options.credentials) ? 'include' : 'same-origin'

    })
    .then( response => response )

  }


}
