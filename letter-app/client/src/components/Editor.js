import React, { useState } from 'react';
import axios from 'axios';

function Editor() {
  const [content, setContent] = useState('');

  const saveToDrive = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('No access token found. Please log in.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/drive/save', { token, content });
      alert('Saved to Google Drive! File ID: ' + response.data.fileId);
    } catch (error) {
      alert('Error saving to Google Drive: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your letter here..." />
      <button onClick={saveToDrive}>Save to Drive</button>
    </div>
  );
}

export default Editor;
