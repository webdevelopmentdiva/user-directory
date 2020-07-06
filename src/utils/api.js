import axios from "axios";

const BASEURL = "";
const APIKEY = "";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    /* Get all the employees*/
  getEmployees: () => {
      /* You can choose to save the url in a variables or you can just type the url in the axios call  */
    return axios.get(BASEURL + query + APIKEY);
  }
};