import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { token } from 'services/token'

export const fetchGet = <T>(url: string, params?: any): Promise<T> => {
  const options: RequestInit = { headers: token }
  const URI = buildURI(url, params)
  return fetch(URI, options).then(res)
}

const res = (res: Response) => {
  if (res.ok) return res.json()
  const err = new Error()
  err.status = res.status
  err.message = res.statusText
  throw err
}

const buildURI = (url: string, params?: any) => params ? url + getUrlParams(params) : url

const getUrlParams = (params: any) => `?${new URLSearchParams(params).toString()}`

// This request should be cached until manually invalidated.
// Similar to `getStaticProps`.
// `force-cache` is the default and can be omitted.
// { cache: 'force-cache' }

// This request should be refetched on every request.
// Similar to `getServerSideProps`.
// { cache: 'no-store' }

// This request should be cached with a lifetime of 10 seconds.
// Similar to `getStaticProps` with the `revalidate` option.
// { next: { revalidate: 10 } }
