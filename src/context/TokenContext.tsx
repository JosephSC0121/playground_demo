import React, { createContext, useState, ReactNode } from 'react'
import { TokenData } from '@renderer/interfaces/authInterfaces'

interface TokenContextType {
  tokenInfo: TokenData | null
  setTokenInfo: (token: TokenData) => void
}

const initialTokenContext: TokenContextType = {
  tokenInfo: null,
  setTokenInfo: () => {}
}

const TokenContext = createContext<TokenContextType>(initialTokenContext)

const TokenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tokenInfo, setTokenInfo] = useState<TokenData | null>(null)
  return (
    <TokenContext.Provider value={{ tokenInfo, setTokenInfo }}>{children}</TokenContext.Provider>
  )
}

export { TokenContext, TokenProvider }
