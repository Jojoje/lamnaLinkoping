
import { useState } from 'react';

export default function Feedback() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) {
        setStatus("Något gick fel, var god kontakta Joakim")
    }
    const data = await res.json();
    setStatus(data.message);
    if (res.ok) {
        setText('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Skriv något här"
        style={{ padding: 8, width: 300 }}
      />
      <button onClick={handleSubmit} style={{ marginLeft: 10, padding: 8, marginTop: 10 }}>
        Skicka
      </button>
      <p>{status}</p>
    </div>
  );
}