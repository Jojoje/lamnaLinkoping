import { useState } from 'react';

export default function Party() {
  const [formData, setFormData] = useState({ name: '', contact: '', misc: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch('/api/party', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setStatus(data.message);
    if (res.ok) {
        setFormData({ name: '', contact: '', misc: '' });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Anmälan</h1>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Namn"
        style={{ display: 'block', marginBottom: 10, padding: 8, width: 300 }}
      />
      <input
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Email, telefonnummer eller annan kontaktväg"
        style={{ display: 'block', marginBottom: 10, padding: 8, width: 300 }}
      />
      <textarea
        name="misc"
        value={formData.misc}
        onChange={handleChange}
        placeholder="Annan bra info, tex allergier, matpreferenser eller dylikt"
        style={{ display: 'block', marginBottom: 10, padding: 8, width: 300, height: 100 }}
      />
      <button onClick={handleSubmit} style={{ padding: 8 }}>
        Skicka
      </button>
      <p>{status}</p>
    </div>
  );
}