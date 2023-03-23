import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ImovelCard from '../components/ImovelCard'

import './ImovelGrid.css';

const searchURL = 'http://localhost:3333/imoveis/';


const Search = () => {
  const [searchParams] = useSearchParams();

  const [imoveis, setImoveis] = useState([]);
  const query = searchParams.get('q');
  // console.log(query);

  const getSearchedImoveis = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data);
    setImoveis(data);
    // console.log(setImoveis);

  };

  useEffect(() => {
      const searchWithQueryUrl = searchURL+query;

      // console.log(searchWithQueryUrl);

      getSearchedImoveis(searchWithQueryUrl);
  }, [query]);

  return (
    <div className="container">
        <h2 className="title">
          Resultados para: <span className='query-text'>{query}</span>
        </h2>
        <div className="imoveis-container">
            {imoveis.length === 0 && <p>Carregando...</p>}
            {imoveis.length > 0 && imoveis.map((imovel) => <ImovelCard key={imovel.id} imovel={imovel} />)}
        </div>
    </div>
)
}

export default Search