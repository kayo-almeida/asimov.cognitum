import { ReactElement } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { HomeScreen } from '@screens/Home/Home.screen';

export function Router (): ReactElement<null> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
