import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';

import AppContext from '../AppContext';

import '../css/StatusUpdate.css';

export default function StatusUpdate() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({});
  const [context, setContext] = useContext(AppContext);

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:3001/status-updates`;

    if (!submitted && !data?.name && !data?.status) return null;
    console.log('adsf');

    axios
      .post(apiUrl, data)
      .then(response => {
        setContext([...context, data]);
      })
      .catch(error => {
        console.log(error);
      });

    setSubmitted(false);
  }, [submitted]);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleChange = event => {
    setData({...data, [event.target.name]: event.target.value});
  };

  return (
    <div className="status-update">
      <div className="status-update__header">
        <h1 className="heading-lg">Status Update</h1>
        <p>Please update your name and status.</p>
      </div>
      <form className="status-update__columns" onSubmit={handleSubmit}>
        <div className="status-update__column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non.
          </p>
        </div>
        <div className="status-update__column status-update__fields">
          <label>
            <span>Full Name</span>
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            <span>Status</span>
            <input type="text" name="status" onChange={handleChange} />
          </label>
        </div>
        <div className="status-update__column status-update__button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
