import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            const { data } = await axios.post("http://localhost:5009/api/auth/register", { username, email, password });
            alert("Signup successful!");
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Signup</h2>
                <input
                    className="input-field"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                <button className="signup-btn" onClick={handleSignup}>Signup</button>
            </div>
        </div>
    );
};

export default Signup;