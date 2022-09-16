import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("auth") === "true";

    const onLogin = () => {
        localStorage.setItem("auth", "true");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
            <CardWrapper>
                <SimpleComponent {...props} isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut}/>
            </CardWrapper>
    );
};

export default withFunctions;
