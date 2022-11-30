import { token } from "services/token";

export const fetchGet = <T>(url: string, params? : any): Promise<T> => {
  const options: RequestInit  = { headers: token }
  const URI = buildURI(url, params)
  return fetch(URI, options).then(res => res.json())
}

const buildURI = (url: string, params? : any) => params ? url + getUrlWithParams(params) : url

const getUrlWithParams = (params: any) => `?${new URLSearchParams(params).toString()}`