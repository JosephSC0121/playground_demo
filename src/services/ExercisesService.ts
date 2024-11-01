import axios, { AxiosResponse } from 'axios'
import { api } from '../api/api'
import { Exercises } from '../interfaces/ExerciseInterface'

export const getExercises = async (accessToken: string, course: string): Promise<Exercises[]> => {
  try {
    const response: AxiosResponse<Exercises[]> = await api.get(`/exercises/exercises/${course}`, {
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

export const getExerciseByTittle = async (
  accessToken: string,
  title: string
): Promise<Exercises> => {
  try {
    const response: AxiosResponse<Exercises> = await api.get(`/exercises/exercise/${title}`, {
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
