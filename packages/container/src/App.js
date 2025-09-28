import React from 'react';
import MarketingApp from './components/MarketingApp';
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => navigate("/")}>App</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
