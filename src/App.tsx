import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { AuthProvider } from './context/auth';

import DirectMessage from './pages/DirectMessage';

import GlobalStyle from './global';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" component={DirectMessage} />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
