import React, { useRef, useEffect } from 'react';

const CarDetails = ({ initialData }) => {
    const formRef = useRef(null);

    useEffect(() => {
        formRef.current.reset();
    }, [initialData]);

    return (
        <form ref={formRef}>
            <label>
                Model:
                <input type="text" name="model" defaultValue={initialData.model} />
            </label>
            <br />
            <label>
                Year:
                <input type="text" name="year" defaultValue={initialData.year} />
            </label>
            <br />
            <label>
                Color:
                <input type="text" name="color" defaultValue={initialData.color} />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default CarDetails;
