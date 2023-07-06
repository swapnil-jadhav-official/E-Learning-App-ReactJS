import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
function Page404() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>navigate("/"),5000)
  },[])

  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default Page404;
