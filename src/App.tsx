import React from 'react';
import './App.css';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './services/firebase_service';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
// import { AppRouter } from './routers/AppRouter';

function App() {
  const [user] = useAuthState(auth);
  return (
    user ? <HomePage/> : <LoginPage/>
    // <AppRouter/>
  );
}

export default App;
