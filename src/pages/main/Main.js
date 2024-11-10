import React, { useEffect, useState } from "react";
import TableMain from "../../components/TableMain";
import ImageDisplay from "../../components/ImageDisplay";
import LoaderAllItems from "../../services/LoaderAllItems";

const Main = () => {
    const url = "https://dog.ceo/api/breeds/image/random";

    const [cleanDataDetail, setCleanDataDetail] = useState("");

    useEffect(() => {
        LoaderAllItems(setCleanDataDetail, url);
    }, []);

    return (
        <div>
            <h1>Interfaz SBS</h1>
            <ImageDisplay />
            <TableMain data={cleanDataDetail} />
        </div>
    );
};

export default Main;
