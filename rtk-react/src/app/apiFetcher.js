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
