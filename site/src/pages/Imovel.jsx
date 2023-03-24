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
        <div className='info'>
          <h3>
            <BsWallet /> Endereço: 
          </h3>
          <p>{imovel[0].endereco_imovel}, nº {imovel[0].numero_imovel}</p>
        </div>
        <div className='info'>
          <h3>
            <BsWallet /> Qtde quartos:
          </h3>
          <p>{imovel[0].qtdquartos_imovel}</p>
        </div>
        <div className='info'>
          <h3>
            <BsWallet /> Possui piscina?:
          </h3>
          <p>{imovel[0].piscina_imovel}</p>
        </div>
        <div className='info'>
          <h3>
            <BsWallet /> Possui garagem?:
          </h3>
          <p>{imovel[0].garagem_imovel}</p>
        </div>
        <div className='info'>
          <h3>
            <BsWallet /> Qtde carros na garagem?:
          </h3>
          <p>{imovel[0].qtdcarros_imovel}</p>
        </div>
        <div className='info'>
          <h3>
            <BsWallet /> Possui aréa de lazer?:
          </h3>
          <p>{imovel[0].area_de_lazer_imovel}</p>
        </div>
        <div className='info description'>
          <h3>
            <BsWallet /> Observações:
          </h3>
          <p>{imovel[0].observacoes_imovel}</p>
        </div> 
      </>
    )}
    </div>
  )
}

export default Imovel;