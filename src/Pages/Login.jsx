import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from './firebase';
import '../Styles/Login.css'; // Assuming the styles are shared

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { user } = userCredential;

      // Get the auth token (ID token)
      const token = await user.getIdToken();

      // Store the token in localStorage
      localStorage.setItem('authToken', token);

      // Redirect to the 'about' page
      setTimeout(() => navigate('/home'));
    } catch (error) {
      // console.error('Error signing in:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don&apos;t have an account?
        <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
