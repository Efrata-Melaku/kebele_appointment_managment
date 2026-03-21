import { useState } from "react";
export default function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=async()=>{
        try{
            const response=await fetch("http://localhost:5000/api/auth/login",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                      "Authorization": `Bearer ${token}`
                },


        });
        localStorage.setItem("token", res.data.token);
      alert("Login successful");
    }
 catch (err) {
      alert("Login failed");
    }
}
return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
