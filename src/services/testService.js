/**
* Here setup all requests:
*
*
* import Services from './Services';
*
* export default class TestService extends Services {
*
*   getSomething() {
*
*     return this.http.get('/api/v1/getreq')
*       .then( data => data.json() )
*       .catch( err => { error: true } )
*
*   }
*
*   postSomething(params) {
*
*     let headers = new Headers()
*     // push new values to headers
*
*     const options = {
*       headers: headers,
*       credentials: true, // add credentials to the request even for a cross-origin call
*     }
*
*     return this.http.post('/api/v1/postreq', params, options).then( data => data.json())
*
*   }
*
* }
*
*
* Then use this service anywhere:
*
*
* import TestService from '../path/to/services/testService';
*
* this.testService = new TestService();
*
* // async function
* const response = await this.testService.getSomething()
*
*/


import Services from './Services';

 export default class TestService extends Services {

   getSomething() {

     return this.http.get('/api/v1/login')
      .then( data => data.json() )
      .catch( error => {
        return {
          error: true,
          message: "Something is wrong.",
        }
      })

   }

   callGraphql(data) {

     return this.http.graphql('/api/v2/graphql', data )
      .then(data => data.json())
      .catch( error => {
        return {
          error: true,
          message: "Something is wrong.",
        }
      })
   }

}
