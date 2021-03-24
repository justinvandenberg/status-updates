import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';

import AppContext from '../AppContext';

import '../css/StatusHistory.css';

export default function StatusHistory() {
  const [loading, setLoading] = useState(false);
  const [context, setContext] = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    const apiUrl = `http://127.0.0.1:3001/status-updates`;

    axios
      .get(apiUrl)
      .then(response => {
        setContext(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    setLoading(false);
  }, [setLoading]);

  if (loading) return null;

  return (
    <table className="status-history__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {context.map(({id, name, status}) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
