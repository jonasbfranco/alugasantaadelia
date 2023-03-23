import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { 
  BsGraphUp,
  BsWallet,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import ImovelCard from '../components/ImovelCard';

import './Imovel.css';


const imovelUrl = 'http://localhost:3333/detalhes/';

const Imovel = () => {
  const { id } = useParams();
  const [imovel, setImovel] = useState(null);

  const getImovel = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setImovel(data);
    console.log(data);
  }

  useEffect(() => {
    const detalheUrl = imovelUrl+id;
    // console.log(detalheUrl);
    getImovel(detalheUrl);
  }, []);

  return (
    <div className='imovel-page'>
      {imovel &&  (
      <>
        <ImovelCard imovel={imovel} showLink={false} />
        <p className='bairro'>{imovel.bairro}</p>
        <h2>{imovel.title}</h2>
      </>
    )}
    </div>
  )
}

export default Imovel;