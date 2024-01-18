import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
    const [isLoggedInC, setIsLoggedInC] = useState(false);
    const [Companyy, setCompanyy] = useState({});

    const checkCompanyLoggedIn = async () => {
        try {
            // This includes cookies in the request
            const response = await axios.get(
                "http://localhost:8800/api/company/currCompany",
                {
                    withCredentials: true,
                    credentials: "include",
                }
            );

            console.log(response.data);
            if (response.data.status) {
                setIsLoggedInC(true);
                setCompanyy(response.data.company);
                console.log(response.data.company);
            } else {
                setIsLoggedInC(false);
                setCompanyy({});
            }
        } catch (error) {
            console.error("Error checking Company login status:", error);
        }
    };

    const handleLogout2 = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8800/api/company/logout",
                {
                    withCredentials: true,
                    credentials: "include",
                }
            );
            console.log(response.data);
            setIsLoggedInC(false);
            setCompanyy({});
            console.log(Companyy, "Company delted");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    useEffect(() => {
        checkCompanyLoggedIn();
    }, []);

    return (
        <CompanyContext.Provider
            value={{ isLoggedInC, Companyy, checkCompanyLoggedIn, handleLogout2 }}
        >
            {children}
        </CompanyContext.Provider>
    );
};
