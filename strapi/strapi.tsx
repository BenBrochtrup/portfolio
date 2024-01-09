import axios from 'axios'

const StrapiClient = axios.create({
  baseURL: `${process.env.STRAPI_URL}/api`,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
})

export default StrapiClient
