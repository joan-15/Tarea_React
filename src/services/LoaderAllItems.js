import axios from 'axios';

const LoaderAllItems = async (setDetail, url) => {
    try {
        const res = await axios.get(url);
        setDetail(res.data.message); // Ajustamos al formato de la API de perros
    } catch (error) {
        console.error("Error al cargar datos:", error);
        setDetail('No se pudo cargar la información');
    }
};

export default LoaderAllItems;
