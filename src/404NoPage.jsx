import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/404Page.css';

const NoPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
        <div className="text">
          <title>404</title>
          <h1>404</h1>
          <h2>Uh, Ohh</h2>
          <h3>Oh, sorry sir. We couldn't find the {location.pathname} page.</h3>
          </div>
        <div
          className="torch"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        ></div>
      </>
  );
};

export default NoPage;
