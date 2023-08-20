import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomeScreen } from '@presentation/screens/Home/Home.screen';

export function Router (): ReactElement<null> {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
    </Routes>
  );
}
