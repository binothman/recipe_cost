import React from 'react';
import AuthRouters from './AuthRouters';

import { Header } from 'components';

const AuthPages = () => {
  return (
    <div>
      <Header />
      <AuthRouters />
    </div>
  )
}

export default AuthPages;
