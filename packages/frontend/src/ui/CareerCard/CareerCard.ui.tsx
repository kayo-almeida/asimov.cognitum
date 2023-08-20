import './CareerCard.ui.css';
import studying from '@assets/images/studying.svg';

export function CareerCardUI (): React.ReactElement {
  return (
    <div className="career-card-container">
      <div className="career-card-header" style={{ backgroundImage: `url(${studying as unknown as string})` }} />

      <div className="career-card-body">
        <span className="career-card-tag">
          curso: design
        </span>

        <span className="career-card-title">
          Profissão
        </span>

        <div className="career-card-career-value">
          Designer de produto
        </div>

        <div className="career-card-about">
          <span className="career-card-about-title">
            Como é o mercado de trabalho?
          </span>

          <p className="career-card-about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
      </div>

      <div className="career-card-footer">
        <div className="career-card-footer-item">
          <div className="career-card-footer-item-title">Média salarial</div>
          <div className="career-card-footer-item-value">R$ 5.00000</div>
        </div>
        <div className="career-card-footer-item">
          <div className="career-card-footer-item-title">Faculdades próximas</div>
          <div className="career-card-footer-item-value">12</div>
        </div>
        <div className="career-card-footer-item">
          <div className="career-card-footer-item-title">Tempo de graduação</div>
          <div className="career-card-footer-item-value">4 anos</div>
        </div>
      </div>
    </div>
  );
}
