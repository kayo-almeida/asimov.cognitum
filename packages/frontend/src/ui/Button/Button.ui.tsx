import './Button.ui.css';

import { MouseEventHandler } from 'react';

interface ButtonProps {
  label: string
  onClick: MouseEventHandler<HTMLDivElement>
}

export function ButtonUI (props: ButtonProps): React.ReactElement {
  return (
    <div
      className='button-container'
      onClick={props.onClick}
    >
      <span className="button-label">
        {props.label}
      </span>
    </div>
  );
}
