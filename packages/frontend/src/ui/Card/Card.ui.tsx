import './Card.ui.css';
import { ReactComponent as Logo } from '@assets/images/icon/logo.svg';

interface CardProps {
  text: string;
  image: string;
  alternative: boolean;
  onReset: () => void;
}

export function CardUI (props: CardProps): React.ReactElement {
  function renderTextOrImage () {
    if (props.alternative) {
      return (
        <div className='card-header-text'>
          <span className='card-header-h1'>
            🎉
          </span>
          <span className='card-header-h2'>
            Concluímos por aqui!
          </span>
          <span className='card-header-h3'>
            Baseado nas suas respostas, essa é a sua profissão indicada.
          </span>
          <span className='card-header-h4'>
            Agora é com a gente! Clique em seguir para meu mural(...)
          </span>
          <span className='card-header-h5'>
            Escolha uma das respostas apresentadas ao lado, que você acredita ser a resposta mais adequada para nos contar um pouco sobre você.
          </span>
        </div>
      );
    } else {
      return (
        <img className='card-img' key='people' src={props.image} />
      );
    }
  }

  function renderFooterTextOrResetButton () {
    if (props.alternative) {
      return (
        <span className='reset-link' onClick={() => props.onReset()}>
          Não é isso que você esperava? clique aqui e refaça o teste.
        </span>
      );
    } else {
      return (
        <div className="card-footer">
          {props.text}
        </div>
      );
    }
  }

  return (
    <div className={`card-container ${props.alternative ? 'alternative' : ''}`}>
      <div className="card-header">
        <div className="card-title">
          <span className='card-brand'>ASIMOV</span>
          <div className="card-slogan">um amanhã para todos!</div>
        </div>

        <Logo className='card-logo' />

        {renderTextOrImage()}
      </div>

      {renderFooterTextOrResetButton()}
    </div>
  );
}
