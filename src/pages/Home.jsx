// src/pages/Home.jsx
import React from 'react';
import useFetch from '../hooks/useFetch';

function Home() {
  const { data, loading, error } = useFetch('posts');

  if (loading) return <p>تحميل البيانات...</p>;
  if (error) return <p>حدث خطأ: {error.message}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>المقالات:</h2>
      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
