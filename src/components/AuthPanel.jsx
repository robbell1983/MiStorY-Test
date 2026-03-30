import { useMemo, useState } from 'react';

const emptyLogin = { email: '', password: '' };
const emptyRegister = { name: '', email: '', password: '' };

export default function AuthPanel({ currentUser, onLogin, onRegister, onLogout }) {
  const [loginForm, setLoginForm] = useState(emptyLogin);
  const [registerForm, setRegisterForm] = useState(emptyRegister);
  const [mode, setMode] = useState('login');
  const [message, setMessage] = useState('');

  const title = useMemo(() => {
    if (currentUser) return `Benvenuto, ${currentUser.name}`;
    return mode === 'login' ? 'Accedi al tuo spazio' : 'Crea il tuo account';
  }, [currentUser, mode]);

  const handleLogin = (event) => {
    event.preventDefault();
    const result = onLogin(loginForm);
    setMessage(result.message);
    if (result.success) {
      setLoginForm(emptyLogin);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const result = onRegister(registerForm);
    setMessage(result.message);
    if (result.success) {
      setRegisterForm(emptyRegister);
    }
  };

  return (
    <section className="card auth-card">
      <div className="section-header">
        <h2>{title}</h2>
        {!currentUser && (
          <div className="segmented-control">
            <button
              className={mode === 'login' ? 'active' : ''}
              onClick={() => setMode('login')}
              type="button"
            >
              Accedi
            </button>
            <button
              className={mode === 'register' ? 'active' : ''}
              onClick={() => setMode('register')}
              type="button"
            >
              Registrati
            </button>
          </div>
        )}
      </div>

      {currentUser ? (
        <div className="auth-summary">
          <p>
            Il tuo account è attivo in locale. Puoi salvare eventi personali sulla tua mappa e rivederli al
            prossimo accesso.
          </p>
          <button className="primary-button" type="button" onClick={onLogout}>
            Esci
          </button>
        </div>
      ) : mode === 'login' ? (
        <form className="stack-form" onSubmit={handleLogin}>
          <label>
            Email
            <input
              type="email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              required
            />
          </label>
          <button className="primary-button" type="submit">
            Entra
          </button>
        </form>
      ) : (
        <form className="stack-form" onSubmit={handleRegister}>
          <label>
            Nome
            <input
              type="text"
              value={registerForm.name}
              onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={registerForm.email}
              onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              minLength={4}
              value={registerForm.password}
              onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
              required
            />
          </label>
          <button className="primary-button" type="submit">
            Crea account
          </button>
        </form>
      )}

      {message ? <p className="form-message">{message}</p> : null}
    </section>
  );
}
