// src/components/DataFetcher.js
import React, { Component } from 'react';

class DataFetcher extends Component {
  state = {
    data: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <div>
        <h1>Data:</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataFetcher;
