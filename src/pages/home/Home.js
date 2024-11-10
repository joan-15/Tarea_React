import React from "react";
import Title from "../../components/Title";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <Title />
            <Link to="/main">Iniciar</Link>
        </div>
    );
};

export default Home;
