import axios, { AxiosResponse } from 'axios'
import { api } from '../api/api'

import { UserData } from '../interfaces/userInterfaces'

export const getUserData = async (accessToken: string): Promise<UserData> => {
  try {
    const response: AxiosResponse<UserData> = await api.get('/user/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Error al obtener datos del usuario')
      } else if (error.request) {
        throw new Error('No se recibió respuesta del servidor')
      } else {
        throw new Error('Error durante la configuración de la solicitud')
      }
    } else {
      throw new Error('Error de red al intentar obtener datos del usuario')
    }
  }
}
