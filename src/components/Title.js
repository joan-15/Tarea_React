import React, { useState, useEffect } from "react";

const Title = () => {
    const [text, setText] = useState("Hola mundo!");

    useEffect(() => {
        setTimeout(() => setText("Adiós mundo!"), 2000); // Cambia el texto después de 2 segundos
    }, []);

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default Title;
