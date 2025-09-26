import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </StylesProvider>
  );
}
export default App;
