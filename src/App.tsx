import Login from './pages/Login'
import { TokenProvider } from './context/TokenContext'
import { UserProvider } from './context/UserContext'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Exercise from './pages/Exercise'
import BasicTable from './pages/Table'
import React from 'react'
function App(): JSX.Element {
  return (
    <Router>
      <UserProvider>
        <TokenProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/:theme" Component={BasicTable} />
            <Route path="/exercise/:exercise" Component={Exercise} />
          </Routes>
        </TokenProvider>
      </UserProvider>
    </Router>
  )
}

export default App
