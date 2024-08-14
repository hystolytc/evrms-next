const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

interface IConfig {
  headers?: Record<string, any>
}

interface IFetcher {
  baseUrl?: string,
  url: string,
  method?: string,
  data?: any,
  config?: IConfig
  cache?: string
}

export async function fetcher({
  baseUrl=BASE_URL,
  url,
  method='GET',
  data={},
  config={},
  cache
}: IFetcher) {
  const completeUrl = `${baseUrl}/${url}`
  let payload: Record<string, any> = {}
  let cacheObject: Record<string, any> = {}

  if (Object.keys(data).length) payload.body = JSON.stringify(data)

  if (cache) cacheObject.cache = cache

  return fetch(completeUrl, {
    method,
    ...payload,
    ...config,
    ...cacheObject
  })
}