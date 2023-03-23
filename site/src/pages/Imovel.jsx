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
        <h3 className='bairro'>
          <BsWallet /> Endereço: 
          {imovel[0].endereco_imovel}
        </h3>

        <h3 className='bairro'>
          <BsWallet /> Nº:
          {imovel[0].numero_imovel}
        </h3>
        <h3 className='bairro'>
          <BsWallet /> Qtde quartos:
          {imovel[0].qtdquartos_imovel}
        </h3>
        <h3 className='bairro'>
          <BsWallet /> Possui piscina?:
          {imovel[0].piscina_imovel}
        </h3>
        <h3 className='bairro'>
          <BsWallet /> Possui garagem?:
          {imovel[0].garagem_imovel}
        </h3>
        <h3 className='bairro'>
          <BsWallet /> Qtde carros na garagem?:
          {imovel[0].qtdcarros_imovel}
        </h3>
        <h3 className='bairro'>
          <BsWallet /> Possui aréa de lazer?:
          {imovel[0].areadelazer_imovel}
        </h3>
        <h3 className='bairro'>
          <BsWallet /> Observações:
          {imovel[0].observacoes_imovel}
        </h3> 
      </>
    )}
    </div>
  )
}

export default Imovel;