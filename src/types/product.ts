export interface IProduct {
  id: string
  name: string
  coverImage: string
  discountPrice: number
  price: number
  category: {
    id: string,
    name: string
  },
  brandName: string
  districtName: string
  hasDiscount: boolean
  stock: number
  slug: string
}

export interface IProductPagination {
  next_cursor: string | null,
  has_next: boolean
}