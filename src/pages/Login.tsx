import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: 'YOUR_GOOGLE_CLIENT_ID',
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const handleLogin = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then((user) => {
      const profile = user.getBasicProfile();
      console.log('Name:', profile.getName());
      console.log('Email:', profile.getEmail());
      localStorage.setItem('user', JSON.stringify(profile));
      navigate('/dashboard');
    });
  };

  return (
    <div className=\"flex flex-col items-center justify-center min-h-screen bg-gray-100\">
      <h1 className=\"text-2xl font-bold mb-6\">Sign in with Google</h1>
      <button
        onClick={handleLogin}
        className=\"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600\"
      >
        Sign in with Google
      </button>
    </div>
  );
};
