import { UserRegister, TokenData } from '../interfaces/authInterfaces'
import { api } from '../api/api'
import axios, { AxiosResponse } from 'axios'

export const login = async (username: string, password: string): Promise<TokenData> => {
  try {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    const response: AxiosResponse<TokenData> = await api.post('/auth/token', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Error al iniciar sesión')
      } else if (error.request) {
        throw new Error('No se recibió respuesta del servidor')
      } else {
        throw new Error('Error durante la configuración de la solicitud')
      }
    } else {
      throw new Error('Error de red al intentar iniciar sesión')
    }
  }
}

export const registerUser = async (
  nombres: string,
  apellidos: string,
  email: string,
  username: string,
  password: string
): Promise<UserRegister> => {
  try {
    const response: AxiosResponse<UserRegister> = await api.post('/auth/', {
      nombres,
      apellidos,
      email,
      username,
      password
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Error al registrar usuario')
      } else if (error.request) {
        throw new Error('No se recibió respuesta del servidor al intentar registrar usuario')
      } else {
        throw new Error(
          'Error durante la configuración de la solicitud al intentar registrar usuario'
        )
      }
    } else {
      throw new Error('Error de red al intentar registrar usuario')
    }
  }
}
