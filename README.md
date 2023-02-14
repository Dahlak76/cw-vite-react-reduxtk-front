# cw-vite-react-reduxtk-front  

React with redux-toolkit, axios, express-validator and Tailwind CSS
In this project, a frontend is built using React with the help of redux-toolkit, axios, express-validator and Tailwind CSS. The main aim of this project is to display an input form to the user, which then passes the payload to a redux slice that communicates with an API. The API then returns a response in the form of a user input string, but reversed. Finally, the response is displayed on the page, reflecting the updates made in the redux store.

The process of data flow in this project starts with the user inputting some data into the form. This data is then passed to a redux slice located in the apiFetcher.js file. This file is responsible for interfacing with the API and making axios calls to the localhost:3006 to get the response. The API uses express-validator to validate the user input and then returns the response as a reversed string.

The updates made in the redux slice are then stored in the store.js file, which is the central store of the entire app. The App.js component is responsible for rendering the response received from the API. The response is displayed on the page after being updated in the redux store.

The following are the main files used in this project:

App.js: This file is the main component of the project, responsible for rendering the response received from the API.
apiFetcher.js: This file contains the redux slice that communicates with the API and interfaces with the axios calls.
store.js: This file is the central store of the entire app, where the redux state is stored and made available to the whole app.  

All styling done using Tailwind CSS.    

This is the highlighted code from the apiFetcher.js file  

import { createSlice } from '@reduxjs/toolkit';  
import axios from 'axios';  

//create slice with initial state and reducers   
export const apiSlice = createSlice({  
  name: 'api',  
  initialState: {  
    response: '',  
    loading: false,  
    error: null,  
  },  
  //create reducers for each state change   
  reducers: {  
    setResponse: (state, action) => {  
      state.response = action.payload;  
      state.loading = false;  
    },  
    setLoading: (state) => {  
      state.loading = true;  
    },  
    setError: (state, action) => {  
      state.error = action.payload;  
      state.loading = false;      
    },  
  }  
});  

export const fetchData = (payload) => async (dispatch) => {  
  try {  
    dispatch(setLoading());   
    // The first route is to connect to the AWS ec2 instance on Almalinux 9 with both, API and front-end running in the background using systemd     
    //const { data } = await axios.post('http://3.133.160.173/transform', payload);  
    const { data } = await axios.post('http://localhost:3006/transform', payload);  
    console.log('response data:', data);  
    dispatch(setResponse(data.transformedPayload));  
  } catch (error) {  
    console.error(error);  
    dispatch(setError(error.message));  
  }  
  };  

//Action creators  
export const { setResponse, setLoading, setError } = apiSlice.actions;  

//export the entire reducer   
export default apiSlice.reducer;  
  