import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:80'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

const executor_URL = 'http://127.0.0.1:8000'

export const executor = axios.create({
  baseURL: executor_URL,
  timeout: 5000
})
