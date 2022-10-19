import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from 'pages';
import AuthPages from 'routers/AuthPages';

import { auth } from 'fire';

import { useItems } from 'hooks';

function App() {
  const { items } = useItems();
  const initUser = JSON.parse(localStorage.getItem('user'))

  console.log('items', items)
  const [user, setUser] = React.useState(initUser ? initUser : null);

  React.useEffect(() => {
    auth.onAuthStateChanged(usr => {
      setUser(usr);
      localStorage.setItem('user', JSON.stringify(usr));
    })
  }, []);

  return (
    <div>
      <Routes>
        <Route path="xyz" element={<div>xyz</div>} />
        <Route path="*" index element={user ? <AuthPages /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
