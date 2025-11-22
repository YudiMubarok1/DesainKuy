import React, { useState, useEffect } from "react";
import { auth, provider, db } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../../styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Simpan data user ke Firestore
  const saveUserData = async (user, role = "user") => {
    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          name: user.displayName || "Pengguna Baru",
          email: user.email,
          role,
          photoURL: user.photoURL || "",
          createdAt: new Date().toISOString(),
        },
        { merge: true }
      );
    } catch (err) {
      console.error("Gagal menyimpan user:", err);
    }
  };

  // 🔹 Auto redirect jika user sudah login
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists() && userSnap.data().role === "admin") {
          navigate("/admin", { replace: true });
        } else {
          navigate("/order-form", { replace: true });
        }
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // 🔹 Login dengan Email & Password
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      let role = "user";

      if (userSnap.exists() && userSnap.data().role === "admin") {
        role = "admin";
      } else if (email === "admin@desainkuy.com") {
        role = "admin";
        await saveUserData(user, "admin");
      } else {
        await saveUserData(user, "user");
      }

      console.log(`Login sebagai ${role}:`, user.email);

      if (role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/order-form", { replace: true });
      }
    } catch (err) {
      console.error(err);
      setError("Email atau password salah!");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Login dengan Google
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await saveUserData(user, "user");
      console.log("Google login success:", user.email);
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Google login error:", err.code, err.message);
      setError("Gagal login dengan Google!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Selamat Datang di</h1>
        <h2>DesainKUY</h2>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleEmailLogin}>
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
          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? "Memproses..." : "Login"}
          </button>
        </form>

        <p className="divider">atau</p>

        <button
          onClick={handleGoogleLogin}
          className="btn-google"
          disabled={loading}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
          Login dengan Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
