import { fetcher } from '@/utils/fetcher'

export async function getProducts(nextPage?: string) {
  try {
    const res = await fetcher({url: `/products${nextPage}`}) 
    return await res.json()
  } catch (ex) {
    throw ex
  }
}

export async function getProduct(slug: string) {
  try {
    const res = await fetcher({url: slug, cache: 'no-store'})
    return await res.json()
  } catch (ex) {
    return {}
  }
}