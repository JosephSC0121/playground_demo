import React, { createContext, useState, ReactNode } from 'react'
import { UserData } from '../interfaces/userInterfaces'

interface UserContextType {
  user: UserData | null
  setUser: (user: UserData) => void
}

const initialUserContext: UserContextType = {
  user: null,
  setUser: () => {}
}

const UserContext = createContext<UserContextType>(initialUserContext)

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
