// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './app/apiFetcher';
import Nav from './Nav';
import {home, about} from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink
} from 'react-router-dom';

const App = () => {
  const [payload, setPayload] = useState({});
  const { response, error, isLoading } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const [navbarOpen, setNavbarOpen] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchData(payload));
  };
//import image from './codewillinglogo.jpeg'; and then use it as src={image} in the img tag 



  return (
    <div>
      <Nav />
    <div className="bg-gray-200 w-full  text-center "> 
    <div id="logo" className="flex flex-col items-center justify-center min-h-screen py-2 text-center space-y-4">
      <img 
        src="/images/codewillinglogo.jpeg"
        alt=""
        className="flex flex-col items-center justify-center  py-2 text-center "
      />
      <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#navbar">
          <i className="fab fa-share-alt text-lg leading-lg text-white opacity-75"></i>
          <span className="ml-2">Return to Navigation</span>
        </a>
    </div>
      <div id="about" className="flex flex-col items-center justify-center  py-2 text-center">
        <h2 className="text-3xl font-bold underline">Good Morning, <span className='text-[#54e454] cursor-pointer hover:scale-110 ease-in duration-300'>CodeWilling</span> </h2>
        <p className="text-xl">This is a React app that uses Redux Toolkit to fetch data from an external API.</p>
        <p className="text-xl">The API was built using Node/Express and deployed on an AWS EC2 instance using AlmaLinux 9.0.</p>
      add the repo to this page along with some pics and a tech stack section and some mardi gras nonsense and my logo
        <p>***There are two repos, one for the front end and one for the back end.***</p>
        <h3>
        <ul>
          <li >
          <a href="https://github.com/Dahlak76/cw-take-home-1" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"> <span className='text-[#54e454] cursor-pointer hover:scale-110 ease-in duration-300 '>NodeJS/ExpressJS back-end</span></a>
          </li>
          <li >
          <a href="https://github.com/Dahlak76/cw-vite-react-reduxtk-front" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"> <span className='text-[#54e454] cursor-pointer hover:scale-110 ease-in duration-300 '>React/Redux/Redux-toolkit front-end</span></a>
          </li>
        </ul>
        </h3>
        <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#navbar">
          <i className="fab fa-share-alt text-lg leading-lg text-white opacity-75"></i>
          <span className="ml-2">Return to Navigation</span>
        </a>
      {/*justify-content and items-center need adjusting */}
      <div id="form" className="flex flex-col items-center justify-center min-h-screen py-2 text-center space-y-4">
      <form onSubmit={handleSubmit} className="outline outline-1" >
        <input
          type="text"
          onChange={(e) => setPayload({ "payload": e.target.value })}
        />
      </form>
        <button type="submit" className="bg-zinc-300 outline outline-1 py-0 mt-0 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">Submit</button>
        <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#navbar">
          <i className="fab fa-share-alt text-lg leading-lg text-white opacity-75"></i>
          <span className="ml-2 ">Return to Navigation</span>
        </a>
        <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {response && <p> <strong>Response:</strong>  {response}</p>}
        </div>
    </div>
    </div>
      </div>
    </div>
  );
};

export default App;
