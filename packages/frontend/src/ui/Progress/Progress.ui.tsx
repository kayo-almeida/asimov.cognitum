import './Progress.ui.css';

interface ProgressProps {
  max: number
  current: number
  title: string
  label: string
}

export function ProgressUI (props: ProgressProps): React.ReactElement {
  return (
    <div className="progress-container">
      <div className="progress-bars">
        {new Array(props.max).fill(0).map((_, i) => (
          <div
            className="progress-bar"
            style={{
              backgroundColor: (props.current === i) ? '#886CB7' : '#E5EDFC',
            }}
            key={`progress-${i}`}
          />
        ))}
      </div>

      <div className='progress-text'>
        <span className="progress-title">
          Dados pessoais
        </span>

        <span className='progress-label'>
          {(props.current + 1)} de {props.max} {props.label}
        </span>
      </div>
    </div>
  );
}
