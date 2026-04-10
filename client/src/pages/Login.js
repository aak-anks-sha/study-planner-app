// import { useState } from "react";
// import axios from "axios";
// import "./Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     const res = await axios.post("http://127.0.0.1:5000/api/auth/Login", {
//       email,
//       password
//     });

//     localStorage.setItem("token", res.data.token);
//     alert("Login Success");
//     window.location.href = "/dashboard";
//   };

//   return (
//     <div className="container">
//       <div className="box">
//         <h2>Login</h2>

//         <input placeholder="Email"
//           onChange={(e)=>setEmail(e.target.value)} />

//         <input type="password" placeholder="Password"
//           onChange={(e)=>setPassword(e.target.value)} />

//         <button onClick={handleLogin}>Login</button>

//         <p onClick={()=>window.location.href="/signup"}>
//           New user? Signup
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      alert("Login Success");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Welcome Back 👋</h2>

        {/* Email */}
        <div className="input-group">
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        {/* Password */}
        <div className="input-group">
          <input
            type={show ? "text" : "password"}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>

          <span className="toggle" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </span>
        </div>

        <button onClick={handleLogin}>Login</button>

        <p onClick={() => (window.location.href = "/signup")}>
          New user? Signup
        </p>
      </div>
    </div>
  );
}

export default Login;