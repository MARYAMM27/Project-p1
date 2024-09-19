import { useState } from 'react';

const Screen3 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle feedback submission, like sending it to a server or logging it
    console.log({ name, email, message });
    setFeedbackSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Feedback</h1>
      <p>We value your feedback to improve our service. Please fill in the form below:</p>

      {feedbackSubmitted ? (
        <div style={{ color: 'green', marginTop: '20px' }}>
          <h3>Thank you for your feedback!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Feedback:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#1e90ff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Screen3;
