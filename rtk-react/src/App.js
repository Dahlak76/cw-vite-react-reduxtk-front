// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './app/apiFetcher';

const App = () => {
  const [payload, setPayload] = useState({});
  const { response, error, isLoading } = useSelector((state) => state.api);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchData(payload));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setPayload({ "payload": e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default App;
