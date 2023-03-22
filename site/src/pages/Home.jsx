import React, { useState, useEffect } from 'react'
import ImovelCard from '../components/ImovelCard';

import './ImovelGrid.css';

const imoveisURL = 'http://localhost:3333/imoveis'

const Home = () => {

    // console.log(imoveisURL);

    const [imoveis, setImoveis] = useState([]);
    
    const getAllImoveis = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        // console.log(data);
        setImoveis(data);
        // console.log(setImoveis);
    };

    useEffect(() => {
        const allImoveisUrl = imoveisURL;

        // console.log(allImoveisUrl);

        getAllImoveis(allImoveisUrl);
    }, []);

    return (
        <div className="container">
            <h2 className="title">Casas para Alugar</h2>
            <div className="imoveis-container">
                {imoveis.length === 0 && <p>Carregando...</p>}
                {imoveis.length > 0 && imoveis.map((imovel) => <ImovelCard key={imovel.id} imovel={imovel} />)}
            </div>
        </div>
    )
}

export default Home