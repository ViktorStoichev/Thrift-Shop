import { useState } from "react";
import { loginUser } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await loginUser(email, password);
            console.log("Успешно влизане!");
            setError("");
            navigate('/profile');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    type="email"
                    className="input-field"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
