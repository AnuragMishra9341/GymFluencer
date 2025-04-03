import React, { useState } from 'react';

const JoinNowForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#2c2f38',
        borderRadius: '10px',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#f39c12',
          marginBottom: '30px',
        }}>Contact Us</h2>

        <label style={{ marginBottom: '8px', fontWeight: 'bold' }}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            padding: '10px',
            marginBottom: '16px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #34495e',
            backgroundColor: '#34495e',
            color: 'white',
            fontSize: '16px',
          }}
        />

        <label style={{ marginBottom: '8px', fontWeight: 'bold' }}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: '10px',
            marginBottom: '16px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #34495e',
            backgroundColor: '#34495e',
            color: 'white',
            fontSize: '16px',
          }}
        />

        <label style={{ marginBottom: '8px', fontWeight: 'bold' }}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{
            padding: '10px',
            marginBottom: '16px',
            width: '100%',
            height: '120px',
            borderRadius: '8px',
            border: '1px solid #34495e',
            backgroundColor: '#34495e',
            color: 'white',
            fontSize: '16px',
          }}
        />

        <button type="submit" style={{
          padding: '12px',
          backgroundColor: '#f39c12',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          width: '100%',
          fontSize: '16px',
          cursor: 'pointer',
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinNowForm;