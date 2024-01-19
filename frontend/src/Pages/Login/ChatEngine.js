import { ChatEngine } from "react-chat-engine";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { CompanyContext } from "../../context/CompanyContext";

const ChatEngineComponent = () => {
    const { isLoggedIn, userr, checkUserLoggedIn, handleLogout } =
        useContext(UserContext);

    const { isLoggedInC, Companyy, checkCompanyLoggedIn, handleLogout2 } =
        useContext(CompanyContext);
    const userrr = JSON.parse(localStorage.getItem("userr"));
    const companyyy = JSON.parse(localStorage.getItem("companyy"));

    return (
        <div>
            {userrr && userrr.username ? (
                <ChatEngine
                    projectID="3a259a8c-d0bf-4004-b787-7d5833ba50f5"
                    userName={userrr.username}
                    userSecret={userrr.secret}
                />
            ) : (
                <ChatEngine
                    projectID="3a259a8c-d0bf-4004-b787-7d5833ba50f5"
                    userName={companyyy.username}
                    userSecret={companyyy.secret}
                />
            )}
        </div>
    );
};

export default ChatEngineComponent;
