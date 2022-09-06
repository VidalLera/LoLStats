import { token } from "services/token";

export const fetchGet = (url: string, params? : any) => {
  const options : any = { headers: token }
  const URI = params ? url + getUrlWithParams(params) : url
  return fetch(URI, options).then(res => res.json())
}

const getUrlWithParams = (params: any) => `?${new URLSearchParams(params).toString()}`