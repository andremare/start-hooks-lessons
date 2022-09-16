import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.textContent = "text";
        inputRef.current.style.height = "150px";
        inputRef.current.style.width = "80px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={inputRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                Блок
            </div>
            <button className="btn btn-secondary" onClick={handleClick}>Изменить свойства</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
