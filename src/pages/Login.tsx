import React, { useContext, useState } from 'react'
import { login } from '../services/AuthService'
import { TokenContext } from '../context/TokenContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error] = useState<string | null>(null)
  const { setTokenInfo } = useContext(TokenContext)
  const navigate = useNavigate()

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const tokenData = await login(username, password)
      setTokenInfo({
        access_token: tokenData.access_token,
        token_type: tokenData.token_type
      })
      navigate('/main')
    } catch (error) {
      console.log('Error: No se pudo decodificar el token JWT.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">¡Hola!</span>
          <span className="font-light text-gray-400 mb-8">
            ¡Bienvenido de nuevo! Por favor ingresa tus datos
          </span>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="mb-2 text-md">
                Nombre de usuario:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 text-md">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black hover-border hover-border-gray-300"
            >
              Iniciar Sesión
            </button>

            {error && <div style={{ color: 'red' }}>{error}</div>}
          </form>
          <div className="py-4 text-center text-gray-400">
            ¿No tienes cuenta?
            <br />
            <Link to="/register" className="py-4 font-bold text-black">
              <span className="py-4 font-bold text-black">¡Registrate gratis!</span>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzZvbDZ2ajhubzBxODN3N2d6ZmE5YWUxNG4zODhwYXV6dDN1NGc0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QDjpIL6oNCVZ4qzGs7/giphy.gif"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"></div>
        </div>
      </div>
    </div>
  )
}

export default Login
