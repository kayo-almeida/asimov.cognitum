import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '@redux/root-reducer';
import { IOption, OptionsSelectUI } from '@ui/OptionsSelect/OptionsSelect.ui';
import { useState } from 'react';
import { setKnowCourseAction } from '@redux/onboarding/onboarding.slice';

const options: IOption[] = [
  {
    number: 1,
    text: 'Ja sei que curso quero fazer!',
    value: 'yes',
  },
  {
    number: 2,
    text: 'Preciso de ajuda para descobrir a profissão ideal.',
    value: 'no',
  },
];

export function HomeScreenFormPage03 (): React.ReactElement {
  const { user: { name }, knowsCourse } = useSelector((state: StateType) => state.onboarding);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<IOption | null>(options.find(({ value }) => value === knowsCourse) || null);

  function handleSelect (option: IOption) {
    setSelected(option);
    dispatch(setKnowCourseAction(option.value));
  }

  return (
    <>
      <p id='welcome-title'>
        {name},
      </p>

      <span id='welcome-text'>
        pensando no seu futuro, e nos próximos passos da sua carreira, você:
      </span>
      
      <OptionsSelectUI
        options={options}
        onSelect={handleSelect}
        selected={selected}
      />
    </>
  );
}
