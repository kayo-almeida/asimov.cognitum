import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '@redux/root-reducer';
import { AffinitySelectUI } from '@ui/AffinitySelect/AffinitySelect.ui';
import { setAffinitiesAction } from '@redux/onboarding/onboarding.slice';

export function HomeScreenFormPage06 (): React.ReactElement {
  const { user: { name }, affinities } = useSelector((state: StateType) => state.onboarding);
  const dispatch = useDispatch();

  function handleAffinitySelect (n: string, selected: number) {
    dispatch(setAffinitiesAction({ value: selected, name: n }));
  }

  const getSelected = (n: string): (number | null) =>
    affinities.find(a => a.name === n)?.value || null;

  return (
    <>
      <p id='welcome-title'>
        {name},
      </p>

      <span id='welcome-text'>
        o que mais se aproxima do seu sonho?
      </span>
      
      <AffinitySelectUI
        title='Lorem title 01'
        selected={getSelected('title01')}
        onSelect={s => handleAffinitySelect('title01', s)}
      />

      <AffinitySelectUI
        title='Lorem title 02'
        selected={getSelected('title02')}
        onSelect={s => handleAffinitySelect('title02', s)}
      />

      <AffinitySelectUI
        title='Lorem title 03'
        selected={getSelected('title03')}
        onSelect={s => handleAffinitySelect('title03', s)}
      />
    </>
  );
}
