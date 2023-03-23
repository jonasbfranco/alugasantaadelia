import { Link } from 'react-router-dom';

import { FaHeart} from 'react-icons/fa';

const imageUrl = 'https://fotos.vivadecora.com.br/fachadas-de-casas-retrofit-fachada-iarakilaris-176283-proportional-height_cover_medium.jpg';

const ImovelCard = ({ imovel, showLink = true }) => {
  return (
    <div className='imovel-card'>
        <img src={imageUrl} alt={imovel.title} width={300} height={300}/>
        <div className="text" >
          <h2>{imovel.title}</h2>
          <p>
              <FaHeart /> <span>Favoritos</span>
          </p>
          {showLink && <Link to={`detalhes/${imovel.id}`}>Detalhes</Link>}
          </div>
    </div>
  )
}

export default ImovelCard