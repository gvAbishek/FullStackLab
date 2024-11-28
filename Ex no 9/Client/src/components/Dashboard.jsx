import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDashboard = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("You are not authorized. Please log in.");
                navigate("/login");
                return;
            }

            try {
                const { data } = await axios.get("http://localhost:5009/api/auth/dashboard", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMessage(data.message);
            } catch (err) {
                alert("Session expired or unauthorized. Please log in again.");
                localStorage.removeItem("token");
                navigate("/login");
            }
        };

        fetchDashboard();
    }, [navigate]);

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h2>Welcome to Your Dashboard</h2>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Dashboard;