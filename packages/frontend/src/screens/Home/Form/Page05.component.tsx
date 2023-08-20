import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '@redux/root-reducer';
import { IOption, OptionsSelectUI } from '@ui/OptionsSelect/OptionsSelect.ui';
import { useState } from 'react';
import { setDreamAction } from '@redux/onboarding/onboarding.slice';

const options: IOption[] = [
  {
    number: 1,
    text: 'Uma graduação!',
    value: '12',
  },
  {
    number: 2,
    text: 'Um curso técnico.',
    value: '24',
  },
  {
    number: 3,
    text: 'Apenas estudar com mais direcionamento.',
    value: '48',
  },
];

export function HomeScreenFormPage05 (): React.ReactElement {
  const { user: { name }, dream } = useSelector((state: StateType) => state.onboarding);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<IOption | null>(options.find(({ value }) => value === dream) || null);

  function handleSelect (option: IOption) {
    setSelected(option);
    dispatch(setDreamAction(option.value));
  }

  return (
    <>
      <p id='welcome-title'>
        {name},
      </p>

      <span id='welcome-text'>
        em quanto tempo você deseja entrar na faculdade:
      </span>
      
      <OptionsSelectUI
        options={options}
        onSelect={handleSelect}
        selected={selected}
      />
    </>
  );
}
