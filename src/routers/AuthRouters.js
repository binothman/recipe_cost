import React from 'react';

import { Route, Routes } from 'react-router-dom';

const AuthRouters = () => {
  return (
    <Routes>
      <Route path="test" element={<div>Test</div>} />
      <Route exact path="/" element={<div>Main</div>} />
      <Route exact path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default AuthRouters;
