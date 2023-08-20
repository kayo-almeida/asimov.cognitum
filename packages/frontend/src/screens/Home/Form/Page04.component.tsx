import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '@redux/root-reducer';
import { IOption, OptionsSelectUI } from '@ui/OptionsSelect/OptionsSelect.ui';
import { useState } from 'react';
import { setMonthsPlanAction } from '@redux/onboarding/onboarding.slice';

const options: IOption[] = [
  {
    number: 1,
    text: 'No fim desse ano!',
    value: '12',
  },
  {
    number: 2,
    text: 'Nos próximos 2 anos.',
    value: '24',
  },
  {
    number: 3,
    text: 'Nos próximos 4 anos.',
    value: '48',
  },
];

export function HomeScreenFormPage04 (): React.ReactElement {
  const { user: { name }, monthsPlan } = useSelector((state: StateType) => state.onboarding);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<IOption | null>(options.find(({ value }) => value === monthsPlan) || null);

  function handleSelect (option: IOption) {
    setSelected(option);
    dispatch(setMonthsPlanAction(option.value));
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
