import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import { CompanyContext } from "../../context/CompanyContext";
import { useContext } from "react";

import axios from "axios";
import { Line } from "recharts";

const LoginB = () => {
    const { isLoggedInC, Companyy, checkCompanyLoggedIn, handleLogout2 } =
        useContext(CompanyContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [email1, setEmail1] = useState("");
    const [password1, setPassword1] = useState("");
    // const [phone1, setPhone1] = useState("");
    const [name1, setName1] = useState("");
    const [departments, setDepartments] = useState("");

    // Register action
    const handleClick1 = async (e) => {
        e.preventDefault();
        if (!validateEmail(email1)) {
            alert("Invalid email address");
            return;
        }
        if (!validatePassword(password1)) {
            alert("Password too weak. Try again.");
            return;
        }
        if (!name1) {
            alert("Please fill all the fields first.");
            return;
        }

        const formData = {
            email: email1,
            companyName: name1,
            password: password1,
            departments: departments.split(",").map((dep) => dep.trim()),
        };
        console.log(formData);

        let data = {
            "username": name1,
            "secret": password1,
            // "email": "b_baker@mail.com",
            // "first_name": "Bob",
            // "last_name": "Baker",
            // "custom_json": { "fav_game": "Candy Crush", "high_score": 2002 }
        };

        let config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': "f85dcad6-4829-4abd-9b92-763858c7492b"
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        await localStorage.setItem('companyy', JSON.stringify(data));


        console.log("one part done")


        try {
            const response = await axios.post(
                "http://localhost:8800/api/company/registerCompany",
                formData
            );
            console.log(response.data);
            console.log("Register succesful");
            navigate("/");
        } catch (error) {
            console.error(error.response);
        }
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordPattern.test(password);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Login action
    const handleClick = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill all the fields first.");
            return;
        }
        const formData = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(
                "http://localhost:8800/api/company/loginCompany",
                formData,
                {
                    withCredentials: true,
                    credentials: "include",
                }
            );
            checkCompanyLoggedIn();

            console.log(formData);
            console.log("Login succesful");
            navigate("/dashboardbusiness");
        } catch (error) {
            console.log(formData);
            console.error(error.response);
        }
    };

    const [containerClass, setContainerClass] = useState("");

    const handleRegisterClick = () => {
        setContainerClass("active");
    };

    const handleLoginClick = () => {
        setContainerClass("close");
    };

    return (
        <>
            <div id="LoginReg" className={containerClass}>
                <div className="Login">
                    <div className="content">
                        <h1>Log In</h1>
                        <label className="inp" htmlFor="usernameInput">
                            <input
                                placeholder="Enter your email"
                                id="usernameInput"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="label">Email</span>
                            <span className="focus-bg"></span>
                        </label>
                        <label className="inp" htmlFor="passwordInput">
                            <input
                                placeholder="Enter your password"
                                id="passwordInput"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="label">Password</span>
                            <span className="focus-bg"></span>
                        </label>
                        <input
                            className="LoginBtn"
                            type="button"
                            onClick={handleClick}
                            value="Sign In"
                        />
                    </div>
                </div>

                <div className="page front">
                    <div className="content">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="96"
                            height="96"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user-plus"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <line x1="20" y1="8" x2="20" y2="14" />
                            <line x1="23" y1="11" x2="17" y2="11" />
                        </svg>
                        <h1>Welcome Back!</h1>
                        <p>
                            We genuinely appreciate the trust you place in us
                            and your commitment to customer satisfaction !
                        </p>
                        <button
                            type="button"
                            id="register"
                            onClick={handleRegisterClick}
                        >
                            Login
                        </button>
                    </div>
                </div>

                <div className="page back">
                    <div className="content">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="96"
                            height="96"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-log-in"
                        >
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                            <polyline points="10 17 15 12 10 7" />
                            <line x1="15" y1="12" x2="3" y2="12" />
                        </svg>
                        <h1>Hello !</h1>
                        <p>
                            Your commitment to customer satisfaction aligns with
                            ours. Let's streamline complaint management
                            together!
                        </p>
                        <button
                            type="button"
                            id="login"
                            onClick={handleLoginClick}
                        >
                            Register
                        </button>
                    </div>
                </div>

                <div className="Register">
                    <div className="content">
                        <Link to="/dashb">
                            <h1>Sign Up</h1>
                        </Link>
                        <label className="inp" htmlFor="nameInput">
                            <input
                                placeholder="Enter your Company Name"
                                id="nameInput"
                                type="text"
                                value={name1}
                                onChange={(e) => setName1(e.target.value)}
                            />
                            {/* <span className="label">Name</span> */}
                            <span className="focus-bg"></span>
                        </label>
                        <label className="inp" htmlFor="emailInput">
                            <input
                                placeholder="Enter your email"
                                id="emailInput"
                                type="email"
                                value={email1}
                                onChange={(e) => setEmail1(e.target.value)}
                            />
                            {/* <span className="label">Email</span> */}
                            <span className="focus-bg"></span>
                        </label>
                        {/* <label className="inp" htmlFor="phoneInput">
                            <input
                                placeholder="Enter your phone number"
                                id="phoneInput"
                                type="text"
                                value={phone1}
                                onChange={(e) => setPhone1(e.target.value)}
                            />
                            {/* <span className="label">Phone Number</span> */}
                        {/* <span className="focus-bg"></span>
                        </label> */}{" "}
                        <label className="inp" htmlFor="passwordInput">
                            <input
                                placeholder="Enter your password"
                                id="passwordInput"
                                type="password"
                                value={password1}
                                onChange={(e) => setPassword1(e.target.value)}
                            />
                            <label className="inp" htmlFor="departmentsInput">
                                <input
                                    placeholder="Enter departments (comma-separated)"
                                    id="departmentsInput"
                                    type="text"
                                    value={departments}
                                    onChange={(e) =>
                                        setDepartments(e.target.value)
                                    }
                                />
                                <span className="focus-bg"></span>
                            </label>
                            {/* <span className="label">Password</span> */}
                            <span className="focus-bg"></span>
                        </label>
                        <input
                            className="LoginBtn"
                            type="button"
                            onClick={handleClick1}
                            value="Sign Up"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginB;
