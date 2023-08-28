import Axios from "axios";
import { base_url } from "../config";

const getOptions = () => {
  const token = localStorage.getItem("XAUTH");
  return {
    headers: { Authorization: "Bearer " + token },
  };
};

const prepareUrl = (api) => base_url + api;

const axios = {
  get: (api) => Axios.get(prepareUrl(api), getOptions()),
  post: (api, formData = {}) =>
    Axios.post(prepareUrl(api), formData, getOptions()),
  patch: (api, formData = {}) =>
    Axios.patch(prepareUrl(api), formData, getOptions()),
  put: (api, formData = {}) =>
    Axios.put(prepareUrl(api), formData, getOptions()),
  delete: (api) => Axios.delete(prepareUrl(api), getOptions()),
};

export default axios;
