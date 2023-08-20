import './AffinitySelect.ui.css';

interface AffinitySelectProps {
  title: string,
  selected: number | null,
  onSelect: (value: number) => void,
}

export function AffinitySelectUI (props: AffinitySelectProps): React.ReactElement {
  const isSelected = (i: number): boolean => (
    Boolean(props.selected && props.selected === (i))
  );

  return (
    <div
      className='affinity-select-container'
    >
      <div className="affinity-title">
        {props.title}
      </div>

      <div className='affinity-range'>
        {Array(5).fill(0).map((_, i) => (
          <span
            key={i}
            className={`affinity-value ${isSelected(i + 1) ? 'selected' : ''}`}
            onClick={() => props.onSelect(i + 1)}
          >
            {(i + 1)}
          </span>
        ))}
      </div>

      <div className="affinity-footer">
        <span>discordo totalmente</span>
        <span>concordo totalmente</span>
      </div>
    </div>
  );
}
