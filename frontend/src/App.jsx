import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((resData) => setData(resData.message))
      .catch((err) => console.error('API Error:', err));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>React Frontend</h1>
      <p>Message received from backend:</p>
      <strong style={{ color: '#0070f3', fontSize: '1.2rem' }}>
        {data || 'Loading...'}
      </strong>
    </div>
  );
}

export default App;