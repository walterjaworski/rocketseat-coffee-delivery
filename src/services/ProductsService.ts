import HttpClient from './utils/HttpClient'

class ProductsService {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('http://192.168.15.20:3000')
  }

  public async getProducts() {
    const products = await this.httpClient.get('/products')
    return products
  }
}

export default new ProductsService()
