import React, { useState } from 'react'
import { registerUser } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Register() {
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleNombresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombres(event.target.value)
  }

  const handleApellidosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApellidos(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value)
  }

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      if (password !== confirmPassword) {
        setError('Las contraseñas no coinciden.')
        return
      }
      await registerUser(nombres, apellidos, email, username, password)
      navigate('/')
    } catch (error) {
      setError('Error al registrar usuario. Por favor, inténtalo de nuevo.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="relative rounded-l">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGI4NHlvb2p5NHhic200YWE1OG9yOHQyN21sM2JmYnFjaXM2emhvbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/scZPhLqaVOM1qG4lT9/giphy.gif"
            alt="img"
            className="w-[500px] h-full hidden rounded-l-2xl md:block object-cover"
          />
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"></div>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">¡Registro!</span>
          <span className="font-light text-gray-400 mb-8">
            ¡Regístrate para crear una nueva cuenta!
          </span>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label htmlFor="nombres" className="mb-2 text-md">
                  Nombres:
                </label>
                <input
                  type="text"
                  id="nombres"
                  value={nombres}
                  onChange={handleNombresChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="apellidos" className="mb-2 text-md">
                  Apellidos:
                </label>
                <input
                  type="text"
                  id="apellidos"
                  value={apellidos}
                  onChange={handleApellidosChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label htmlFor="email" className="mb-2 text-md">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
                />
              </div>
              <div className="w-1/2">
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
            <div>
              <label htmlFor="confirmPassword" className="mb-2 text-md">
                Confirmar Contraseña:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black hover-border hover-border-gray-300"
            >
              Registrarse
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </form>
          <div className="py-4 text-center text-gray-400">
            ¿Ya tienes cuenta?
            <br />
            <Link to="/" className="py-4 font-bold text-black">
              <span className="py-4 font-bold text-black">¡Inicia Sesión!</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
