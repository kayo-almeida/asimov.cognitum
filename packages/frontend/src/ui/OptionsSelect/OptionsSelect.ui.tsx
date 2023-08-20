import './OptionsSelect.ui.css';

export interface IOption {
  number: number
  text: string
  value: string
}

interface OptionsSelectProps {
  options: IOption[],
  selected: IOption | null,
  onSelect: (option: IOption) => void
}

export function OptionsSelectUI (props: OptionsSelectProps): React.ReactElement {
  const isSelected = (option: IOption): boolean => (
    Boolean(props.selected && props.selected.number == option.number)
  );

  return (
    <div
      className='options-select-container'
    >
      {props.options.map(o => (
        <div
          key={o.number}
          className={`option ${isSelected(o) ? 'selected' : ''}`}
          onClick={() => props.onSelect(o)}
        >
          <span className="option-title">
            opção {o.number}
          </span>

          <span className="option-text">
            {o.text}
          </span>
        </div>
      ))}
    </div>
  );
}
