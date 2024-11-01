import { useState, useEffect, useContext } from 'react'
import { TokenContext } from '../context/TokenContext'
import { getExerciseByTittle } from '../services/ExercisesService'
import { Exercises } from '../interfaces/ExerciseInterface'

export function useExercise(title: string) {
  const { tokenInfo } = useContext(TokenContext)
  const [exercise, setExercise] = useState<Exercises>()
  useEffect(() => {
    const fetchData = async () => {
      const token = tokenInfo?.access_token
      if (token) {
        try {
          const data = await getExerciseByTittle(token, title)
          setExercise(data)
        } catch (error) {
          console.error('Error fetching exercises:', error)
        }
      }
    }
    fetchData()
  }, [tokenInfo])
  return exercise
}
