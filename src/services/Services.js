import ClientApi from './ClientApi';

export default class Services {

  constructor(apiUrl) {

    let url; // by default __API_URL__ from the config

    apiUrl ? url = apiUrl : url = __API_URL__ ;

    this.clientApi = new ClientApi(url);

  }

}
