import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StateType } from '@redux/root-reducer';
import { getHelloAction } from '@redux/hello/hello.slice';

export function HomeScreen (): React.ReactElement {
  const message = useSelector((state: StateType) => state.hello.data.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHelloAction());
  }, []);

  return (
    <div>
      <span>
        {message}
      </span>
    </div>
  );
}
