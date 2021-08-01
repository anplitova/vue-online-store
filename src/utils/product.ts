import ProductModel from '@models/ProductModel'

const getFavouriteProductIndex = (id: number, favouriteProducts: any): number => {
  return favouriteProducts.findIndex((item: number) => {
    return id === item
  })
}

const setFavouriteProducts = (products: ProductModel[], favouriteProducts: any):Array<ProductModel> => {
  products.map((product: ProductModel) => {
    const indexFavouriteProduct = getFavouriteProductIndex(product.id, favouriteProducts)
    if (indexFavouriteProduct !== -1) {
      product.favourite = true
    } else {
      product.favourite = false
    }
  })
  return products
}

const updateFavouriteProducts = (id: number, favouriteProducts: any): any => {
  const indexFavouriteProduct = getFavouriteProductIndex(id, favouriteProducts)

  if (indexFavouriteProduct !== -1) {
    favouriteProducts.splice(indexFavouriteProduct, 1)
  } else {
    favouriteProducts.push(id)
  }

  return favouriteProducts
}

export default { getFavouriteProductIndex, setFavouriteProducts, updateFavouriteProducts }
