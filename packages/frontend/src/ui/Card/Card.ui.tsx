import './Card.ui.css';
import logo from '@assets/images/icon/logo.svg';

interface CardProps {
  text: string;
  image: string;
}

export function CardUI (props: CardProps): React.ReactElement {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-title">
          <span className='card-brand'>ASIMOV</span>
          <div className="card-slogan">um amanhã para todos!</div>
        </div>

        <img src={logo as unknown as string} alt="ASMIOV" className='card-logo' />

        <img className='card-img' key='people' src={props.image} />
      </div>

      <div className="card-footer">
        {props.text}
      </div>
    </div>
  );
}
