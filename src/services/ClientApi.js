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

  graphql(endpoint, data = {}, options = this.defaultOptions ) {

    const url = this.apiUrl + endpoint;

    const form = new FormData();

    const query = data.query;
    const initialVariables = data.variables || {};
    const variables = {};
    const map = {};
    const files = {};

    let ind = 0;

    Object.entries(initialVariables).forEach(
      ([key, value]) => {

        if (value instanceof File) {

          variables[key] = null;

          map[ind.toString()] = [`variables.${key}`];

          files[ind] = value;

          ind++;

        } else {

          variables[key] = value;

        }
      }
    );

    const operations = {
      query: query,
      variables: variables,
    };

    form.append('operations', JSON.stringify(operations));
    form.append('map', JSON.stringify(map));

    Object.entries(files).forEach(
      ([key, value]) => {

        form.append(key, value);

    });

    return fetch( url, {

      method: 'POST',
      headers: options.headers,
      body: form,
      credentials: (options.credentials) ? 'include' : 'same-origin'

    })
    .then( response => response );

  }


}
