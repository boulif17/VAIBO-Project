// AuthForm.jsx
import React, { useState } from \
react\;
import { register, login } from \./auth\;

const AuthForm = () => {
  const [email, setEmail] = useState(\\);
  const [password, setPassword] = useState(\\);
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState(\\);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = isRegistering ? await register(email, password) : await login(email, password);
      setMessage(\مرحبا \!\);
    } catch (error) {
      setMessage(\خطأ:
\ + error.message);
    }
  };

  return (
    <div style={{ maxWidth: \400px\, margin: \50px
auto\, textAlign: \center\ }}>
      <h2>{isRegistering ? \إنشاء
حساب\ : \تسجيل
الدخول\}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type=\email\
          placeholder=\البريد
الإلكتروني\
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: \100%\, padding: \10px\, margin: \10px
0\ }}
        />
        <input
          type=\password\
          placeholder=\كلمة
المرور\
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: \100%\, padding: \10px\, margin: \10px
0\ }}
        />
        <button type=\submit\ style={{ padding: \10px
20px\ }}>
          {isRegistering ? \تسجيل\ : \دخول\}
        </button>
      </form>
      <p style={{ marginTop: \10px\ }}>
        {isRegistering ? \هل
لديك
حساب؟\ : \ليس
لديك
حساب؟\}{\
}
        <button onClick={() => setIsRegistering(!isRegistering)} style={{ border: \
none\, background: \none\, color: \blue\, cursor: \pointer\ }}>
          {isRegistering ? \تسجيل
الدخول\ : \إنشاء
حساب\}
        </button>
      </p>
      <p>{message}</p>
    </div>
  );
};

export default AuthForm;
