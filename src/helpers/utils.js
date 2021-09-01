import axios from "axios";
import { APP_TOKEN } from "../config";
import {Endpoint} from '../constants/enums'

function handleError(err) {
  if (err.response) {
    const errorMsg = err.response.data.message;
    if (errorMsg) throw new Error(err.response.data.message);
    throw new Error(`Something went wrong. Error code: ${err.request.status}.`);
  }
  throw new Error("Something went wrong.");
}
//X-TenandId
export const getAxiosDefaultConfig = () => {
  return {
    headers: {
      Authorization: APP_TOKEN,
      "X-TenantID": "acropolis",
    },
  };
};

export const fetchData = (url) =>
  axios
    .get(url, getAxiosDefaultConfig())
    .then((res) => res.data)
    .catch(handleError);

export const postData = (url, data) =>
  axios
    .post(url, data, getAxiosDefaultConfig())
    .then((res) => res.data)
    .catch(handleError);

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export const downloadFile = (downloadUrl, file) => {
  let headers = { Authorization: APP_TOKEN,'X-TenantID':'acropolis' };
  return axios
    .get(downloadUrl, { headers, responseType: "blob" })
    .then((response) => {
      const { data } = response;
      let fileName = file.filename;

      const downloadUrl = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");

      link.href = downloadUrl;

      link.setAttribute("download", decodeURIComponent(fileName)); //any other extension

      document.body.appendChild(link);

      link.click();

      link.remove();
    })
    .catch(handleError);
};

export const downloadThumb = (
  fileUUID,
  setThumbnail,
) => {
  let headers = {Authorization: APP_TOKEN, 'X-TenantID': 'acropolis'};
  let base64Data = null
  axios
    .get(`${Endpoint.dataStreams}/${fileUUID}/thumb/preview`, {headers, responseType: "blob"})
    .then((response) => {
      const {data} = response;
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = function () {
        base64Data = reader.result
        setThumbnail(base64Data)
      }

    })
    .catch((e) => {
      setThumbnail(null)
    })
}

export const loadDataStreamFile = (
  uuid,
  setThumbnail,
  setImgLoading,
  // setProgress
) => {
  let headers = {Authorization: APP_TOKEN, 'X-TenantID': 'acropolis'};
  // const source = axios.CancelToken.source();

  setImgLoading(true)
  axios
    .get(`${Endpoint.dataStreams}/${uuid}/preview`, {headers, responseType: "blob",
      //cancelToken: source.token
       //onDownloadProgress: progressEvent => setProgress(((file.filesize - (file.filesize - progressEvent.loaded))/file.filesize)*100)
    })

    .then((response) => {
      const {data} = response;
      const url = URL.createObjectURL(data);
        setThumbnail(url)
        setImgLoading(false)
    })
    .catch((e) => {
      setThumbnail(null)
    })
}
