import axios from 'axios'

const BASE_URL = 'http://37.27.11.226:8080'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

const executor_URL = 'http://37.27.11.226:8000'

export const executor = axios.create({
  baseURL: executor_URL,
  timeout: 5000
})
