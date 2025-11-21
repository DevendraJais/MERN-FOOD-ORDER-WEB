// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();
//   const storedUser = JSON.parse(localStorage.getItem("user"));

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
//       const res = await fetch(`${BASE}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setMsg(data.message || "Login failed");
//         return;
//       }

//       // ⭐️ Save token
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//       }

//       // ⭐️ Save user details so navbar can show username
//       if (data.user) {
//         localStorage.setItem("user", JSON.stringify(data.user));
//       }

//       localStorage.setItem("isLoggedIn", "true");

//       setMsg("Login successful! Redirecting...");
//       setTimeout(() => navigate("/"), 600);
//     } catch (err) {
//       console.log("Login error:", err);
//       setMsg("Error connecting to backend");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="p-4 bg-white rounded shadow" style={{ width: "320px" }}>
//         <h2 className="text-center mb-4 text-primary">Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-control mb-3"
//             required
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="form-control mb-3"
//             required
//           />
//           <button type="submit" className="btn btn-primary w-100">
//             Login
//           </button>
//         </form>

//         {msg && (
//           <p
//             className="text-center mt-3"
//             style={{ color: msg.includes("successful") ? "green" : "red" }}
//           >
//             {msg}
//           </p>
//         )}

//         <p className="text-center mt-3">
//           Don’t have an account?{" "}
//           <span
//             onClick={() => navigate("/signup")}
//             style={{ color: "blue", cursor: "pointer" }}
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api"; // import axios instance

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", { email, password });

      if (data.token) localStorage.setItem("token", data.token);
      if (data.user) localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("isLoggedIn", "true");

      setMsg("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 600);
    } catch (err) {
      console.log(err);
      setMsg(err.response?.data?.message || "Error connecting to backend");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow" style={{ width: "320px" }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-3" required />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-3" required />
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        {msg && <p className="text-center mt-3" style={{ color: msg.includes("successful") ? "green" : "red" }}>{msg}</p>}
        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")} style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

