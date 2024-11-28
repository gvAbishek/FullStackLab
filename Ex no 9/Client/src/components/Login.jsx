import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate function

    const handleLogin = async () => {
        try {
            const { data } = await axios.post("http://localhost:5009/api/auth/login", { email, password });
            localStorage.setItem("token", data.token);
            alert("Login successful!");
            navigate("/dashboard"); // Navigate to dashboard after successful login
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <input
                    className="input-field"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="input-field"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-btn" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;