import React, { createContext, useContext, useState } from 'react';

import userJson from './authdata.json';

interface User {
  name: string;
  avatar: string;
  id: number;
  friends: {
    name: string;
    avatar: string;
    id: number;
  }[];
}
const AuthContext = createContext<User>({} as User);

const AuthProvider: React.FC = ({ children }) => {
  const [user] = useState<User>(() => {
    const userString = localStorage.getItem('@NPLChat:user');

    if (userString) {
      return JSON.parse(userString);
    }

    return userJson;
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

function useAuth(): User {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('getUser must be used within an UserProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
