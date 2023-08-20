import './Input.ui.css';

interface InputProps {
  value: string
  label: string
  onChange: (value: string) => void
}

export function InputUI (props: InputProps): React.ReactElement {
  return (
    <div
      className='input-container'
    >
      <span className="input-label">
        {props.label}
      </span>

      <input
        className='input-value'
        type="text"
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
    </div>
  );
}
