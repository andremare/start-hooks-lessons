import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallBack = useRef(0);
    const withCallBack = useRef(0);
    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    // Without Callback
    const validateWithoutCallBack = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallBack.current++;
    }, [validateWithoutCallBack]);

    // With Callback
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);
    useEffect(() => {
        validateWithoutCallBack(data);
        validateWithCallBack(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Without Callback : {withoutCallBack.current}</p>
            <p>With Callback : {withCallBack.current}</p>
            <label
                htmlFor="email"
                className="form-label"
            >
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
