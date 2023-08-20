import './BackButton.ui.css';

import { MouseEventHandler } from 'react';
import { ReactComponent as Icon } from '@assets/images/icon/left-arrow.svg';

interface BackButtonProps {
  enable: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}

export function BackButtonUI (props: BackButtonProps): React.ReactElement {
  return (
    <div
      className={`back-button-container ${props.enable ? '' : 'disabled'}`}
      onClick={props.onClick}
    >
      <Icon className='back-button-icon' />
    </div>
  );
}
