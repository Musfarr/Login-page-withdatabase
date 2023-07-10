import React, { useState } from 'react';
import LandingPage from './landing';
import video from './video/world.webm';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleSignIn = (event) => {
    event.preventDefault(); // Prevent form submission

    // Perform login logic and verification here using the captured username and password
    if (username.trim() === 'admin' && password.trim() === 'password') {
      // If login is successful, update the isLoggedIn state to true
      setIsLoggedIn(true);
    } else {
      // If login fails, display an error message or perform any other action
      alert('Invalid username or password');
    }
  };

  // Render the login form if not logged in, otherwise render the LandingPage component
  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <video className="fixed inset-0 w-full h-full object-cover" autoPlay muted loop>
          <source src={video} type="video/webm" />
        </video>
        <div className="flex flex-col items-center justify-center absolute bg-gray-100 p-4 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form className="bg-white shadow-md rounded-lg px-8 py-6" onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return <LandingPage />;
};
export default Login;
