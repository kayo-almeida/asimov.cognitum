import { InputUI } from '@ui/Input/Input.ui';

import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '@redux/root-reducer';
import { setUserAction } from '@redux/onboarding/onboarding.slice';

export function HomeScreenFormPage02 (): React.ReactElement {
  const { name, age, cep } = useSelector((state: StateType) => state.onboarding.user);
  const dispatch = useDispatch();

  return (
    <>
      <p id='welcome-title'>
        👋 Queremos te conhecer um pouco mais.
      </p>

      <span id='welcome-text'>
        Para iniciarmos nossa conversa, qual o seu nome?
      </span>

      <InputUI
        value={name}
        label='qual seu nome?'
        onChange={(value) => dispatch(setUserAction({ name: value, age, cep }))}
      />

      <InputUI
        value={age}
        label='qual sua idade?'
        onChange={(value) => dispatch(setUserAction({ name, age: value, cep }))}
      />

      <InputUI
        value={cep}
        label='seu cep'
        onChange={(value) => dispatch(setUserAction({ name, age, cep: value }))}
      />
    </>
  );
}
