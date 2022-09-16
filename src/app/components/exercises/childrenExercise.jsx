import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const NumberedComponent = ({ children }) => {
    return React.Children.map(children, (child) => {
        const config = { ...child.props || "" };
        return React.cloneElement(child, config);
    });
};
NumberedComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumberedComponent>
                <Component value={1}/>
                <Component value={2}/>
                <Component value={3}/>
            </NumberedComponent>
        </CollapseWrapper>
    );
};
ChildrenExercise.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const Component = ({ value }) => {
    return <div>
        {value}.
        Компонент списка
    </div>;
};
Component.propTypes = {
  value: PropTypes.number
};

export default ChildrenExercise;
