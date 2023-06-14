import HttpClient from './utils/HttpClient'

class CategoriesService {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('http://192.168.15.20:3000')
  }

  public async getCategories() {
    const categories = await this.httpClient.get('/categories')
    return categories
  }
}

export default new CategoriesService()
