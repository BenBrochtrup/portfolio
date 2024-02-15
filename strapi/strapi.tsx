import axios, { AxiosInstance, AxiosResponse } from 'axios'
var qs = require('qs')

class StrapiClient {
  client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: `${process.env.STRAPI_URL}/api`,
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    })
  }

  public async getEntries<T>(
    pluralApiId: string,
    queryParams?: string,
  ): Promise<T> {
    const request = `/${pluralApiId}?${queryParams}`
    const response: AxiosResponse<T> = await this.client.get(request)
    return response.data
  }

  public async getEntry<T>(
    pluralApiId: string,
    id: string,
    queryParams?: string,
  ): Promise<T> {
    const request = `/${pluralApiId}/${id}?${queryParams}`
    const response: AxiosResponse<T> = await this.client.get(request)
    return response.data
  }

  public async deleteEntry<T>(
    pluralApiId: string,
    id: string,
    queryParams?: string,
  ): Promise<T> {
    const request = `/${pluralApiId}/${id}?${queryParams}`
    const response: AxiosResponse<T> = await this.client.delete(request)
    return response.data
  }

  // TODO: Add this as an interceptor
  private formatError(response: AxiosResponse) {
    console.log(`Strapi API error: ${response.status} | ${response.request}`)
  }
}

class StrapiRequestDetails {
  populate?: Object
  fields?: Array<string>
  filters?: Object
  publicationState?: String
  sort?: string | Array<string>
  pagination?: Object

  queryParams?: string = '?'

  constructor(
    populate: Array<string>,
    fields: Array<string>,
    filters: Object,
    publicationState: String,
    sort: string | Array<string>,
    pagination: Object,
  ) {}
}

export { StrapiClient, StrapiRequestDetails }
