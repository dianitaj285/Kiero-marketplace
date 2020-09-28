import axios from "axios";

export function createNewTransaction(data) {
  return axios.post("http://54.190.71.65/post_transaction/", data);
}
