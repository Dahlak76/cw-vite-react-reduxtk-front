import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './app/apiFetcher';
import Nav from './Nav';
import Tech from './Tech';

const App = () => {
  const [payload, setPayload] = useState({});
  const { response, error, isLoading } = useSelector((state) => state.api);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchData(payload));
    console.log('payload:', payload);
  };

  console.log('response:', response);
  return (
    <div>
      <Nav />
      <div className="bg-gray-200 w-full  text-center ">
        <div
          id="logo"
          className="flex flex-col items-center justify-center min-h-screen py-2 text-center space-y-4"
        >
          <a href="https://codewilling.com/">
            <img
              src="/images/codewillinglogo.png"
              alt="Code Willing Logo"
              className="flex flex-col content-center justify-center  py-2 text-center "
            />
          </a>
          <a>
            <img
              src="/images/myprofile.jpeg"
              alt="Code Willing Logo"
              className="transition-all duration-300  cursor-pointer filter drop-shadow blur-sm hover:blur-none  w-96 h-96 rounded-full  flex flex-col items-center justify-center  py-2 text-center "
            />
          </a>
          <a
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="#navbar"
          >
            <i className="fab fa-share-alt text-lg leading-lg text-white opacity-75"></i>
            <span className="ml-2 hover:scale-110 ease-in duration-300 underline">
              Click to return to top
            </span>
          </a>
        </div>
        <div></div>
        <div
          id="about"
          className="flex flex-col items-center justify-center  py-2 text-center"
        >
          <h2 className="text-3xl font-bold underline">
            Good Morning,{' '}
            <span className="text-[#54e454] cursor-pointer hover:scale-110 ease-in duration-300">
              CodeWilling
            </span>{' '}
          </h2>
          <p className="text-xl">
            This is a React app that uses Redux Toolkit to fetch data from an
            external API.
          </p>
          <p className="text-xl">
            The API was built using Node/Express and deployed on an AWS EC2
            instance using AlmaLinux 9.0.
          </p>
          <div className="margin-top:2px">
            <h3>
              <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900 ">
                <p>
                  ***There are two repos, one for the front end and one for the
                  back end.***
                </p>
                <li>
                  <a
                    href="https://github.com/Dahlak76/cw-take-home-1"
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  >
                    {' '}
                    <span className="text-[#54e454] cursor-pointer hover:scale-110 ease-in duration-300 ">
                      NodeJS/ExpressJS back-end
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Dahlak76/cw-vite-react-reduxtk-front"
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  >
                    {' '}
                    <span className="text-[#54e454] cursor-pointer hover:scale-110 ease-in duration-300 ">
                      React/Redux/Redux-toolkit front-end
                    </span>
                  </a>
                </li>
              </ul>
            </h3>
          </div>
          <Tech />
          <div
            id="form"
            className="flex flex-col items-center justify-center min-h-screen py-2 text-center space-y-4"
          >
            <form
              onSubmit={handleSubmit}
              className="outline outline-1 shadow-md shadow-gray-400"
            >
              <input
                type="text"
                onChange={(e) => setPayload({ payload: e.target.value })}
              />
              <button
                type="submit"
                className="bg-zinc-300 outline outline-1 py-0 mt-0 shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                Submit
              </button>
            </form>
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
              href="#navbar"
            >
              <i className="fab fa-share-alt text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2 hover:scale-110 ease-in duration-300 underline">
                Click to return to top
              </span>
            </a>
            <div className="bg-zinc-300 outline outline-1 py-0 mt-0 shadow-md">
              {isLoading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {response && (
                <p>
                  <strong>Response: </strong> {response}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
