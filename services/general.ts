import { token } from "services/token";

export const fetchGet = (url: string, params? : any) => {
  const options : RequestInit = { headers: token }
  const URI = params ? GetUrlWithParams(url, params) : url
  return fetch(URI, options).then(res => res.json());
}

const GetUrlWithParams = (url: string, params? : any) => {
  const URLparams = new URLSearchParams({params})
  return `${url}?${URLparams.toString()}`
}