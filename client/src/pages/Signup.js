// import { useState } from "react";
// import axios from "axios";
// import "./Signup.css";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     await axios.post("http://127.0.0.1:5000/api/auth/signup", {
//       name,
//       email,
//       password
//     });

//     alert("Signup Success");
//     window.location.href = "/";
//   };

//   return (
//     <div className="container">
//       <div className="box">
//         <h2>Signup</h2>

//         <input placeholder="Name"
//           onChange={(e)=>setName(e.target.value)} />

//         <input placeholder="Email"
//           onChange={(e)=>setEmail(e.target.value)} />

//         <input type="password" placeholder="Password"
//           onChange={(e)=>setPassword(e.target.value)} />

//         <button onClick={handleSignup}>Signup</button>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSignup = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/api/auth/signup", {
        name,
        email,
        password
      });

      alert("Signup Success");
      window.location.href = "/";
    } catch (err) {
      alert("Signup Failed");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Create Account ✨</h2>

        {/* Name */}
        <div className="input-group">
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>

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

        <button onClick={handleSignup}>Signup</button>

        <p onClick={() => (window.location.href = "/")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;