import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <div>
            {!isAuth
                ? <button onClick={onLogin}>Войти</button>
                : <button onClick={onLogOut}>Выйти из системы</button>
            }
        </div>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
