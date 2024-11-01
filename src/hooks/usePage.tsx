import { useState, useEffect, useContext } from 'react'
import { TokenContext } from '../context/TokenContext'
import { getExercises } from '../services/ExercisesService'
import { Exercises } from '../interfaces/ExerciseInterface'

export function usePage(page: string) {
  const { tokenInfo } = useContext(TokenContext)
  const [exercisesData, setExercisesData] = useState<Exercises[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const token = tokenInfo?.access_token
      if (token) {
        try {
          const data = await getExercises(token, page)
          setExercisesData(data)
        } catch (error) {
          console.error('Error fetching exercises:', error)
        }
      }
    }

    fetchData()
  }, [tokenInfo, page])
  return { exercisesData }
}
