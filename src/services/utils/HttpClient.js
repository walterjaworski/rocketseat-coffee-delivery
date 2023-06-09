class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  get(path, options) {
    return this.makeRequest(path, {
      method: 'GET',
    })
  }

  async makeRequest(path, options) {
    const headers = new Headers()

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value)
      })
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    })

    let responseBody = null
    const contentType = response.headers.get('Content-Type')
    if (contentType?.includes('application/json')) {
      responseBody = await response.json()
    }

    if (response.ok) {
      return responseBody
    }
  }
}

export default HttpClient
