import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}



export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // pode guardar dados do usuário

 useEffect(() => {
  const token = localStorage.getItem('token');
  const userData = localStorage.getItem('user');

  if (token) {
    setIsAuthenticated(true);
    try {
      if (userData && userData !== 'undefined') {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Erro ao fazer parse do userData:', error);
      localStorage.removeItem('user'); // limpa caso esteja corrompido
    }
  }
}, []);


  // Função de login, recebe token e info do usuário
  const login = (token, userInfo) => {
    console.log(userInfo); 
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userInfo));
    setIsAuthenticated(true);
    setUser(userInfo);
  };

  // Função de logout, limpa tudo
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
