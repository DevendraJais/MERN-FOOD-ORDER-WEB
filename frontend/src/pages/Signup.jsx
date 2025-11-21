// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Login from "../pages/Login.jsx";

// export default function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
//       const res = await fetch(`${BASE}/api/auth/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setMsg(data.message || "Signup failed");
//         return;
//       }

//       setMsg("Signup successful! Redirecting...");
//       setTimeout(() => {
//         window.location.href = "/login";
//       }, 800);
//     } catch (err) {
//       setMsg("Error connecting to backend");
//       console.log(err);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="p-4 bg-white shadow rounded" style={{ width: "350px" }}>
//         <h2 className="text-center mb-3 text-primary">Signup</h2>

//         <form onSubmit={handleSignup}>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             className="form-control mb-3"
//             required
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <input
//             type="email"
//             placeholder="Enter Email"
//             className="form-control mb-3"
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             className="form-control mb-3"
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button type="submit" className="btn btn-primary w-100">
//             Signup
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
//           Already have an account?{" "}
//           <span
//             style={{ color: "blue", cursor: "pointer" }}
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/signup", { username, email, password });
      setMsg(data.message || "Signup successful!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      console.log(err);
      setMsg(err.response?.data?.message || "Error connecting to backend");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow" style={{ width: "320px" }}>
        <h2 className="text-center mb-4 text-primary">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control mb-3" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-3" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-3" required />
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        {msg && <p className="text-center mt-3" style={{ color: msg.includes("successful") ? "green" : "red" }}>{msg}</p>}
      </div>
    </div>
  );
}

