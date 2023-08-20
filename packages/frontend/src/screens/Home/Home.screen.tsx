import './Home.screen.css';
import bg from '@assets/images/bg/gradient-bg.svg';
import people from '@assets/images/people.svg';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '@redux/root-reducer';

import { CardUI } from '@ui/Card/Card.ui';
import { ProgressUI } from '@ui/Progress/Progress.ui';
import { BackButtonUI } from '@ui/BackButton/BackButton.ui';
import { ButtonUI } from '@ui/Button/Button.ui';

import { HomeScreenFormPage01 } from './Form/Page01.component';
import { HomeScreenFormPage02 } from './Form/Page02.component';
import { HomeScreenFormPage03 } from './Form/Page03.component';
import { HomeScreenFormPage04 } from './Form/Page04.component';
import { HomeScreenFormPage05 } from './Form/Page05.component';
import { HomeScreenFormPage06 } from './Form/Page06.component';
import { resetOnboardingAction } from '@redux/onboarding/onboarding.slice';
import { CareerCardUI } from '@ui/CareerCard/CareerCard.ui';

interface FormPage {
  page: number,
  component: React.ReactElement
}

const pages: FormPage[] = [
  { page: 0, component: <HomeScreenFormPage01 /> },
  { page: 1, component: <HomeScreenFormPage02 /> },
  { page: 2, component: <HomeScreenFormPage03 /> },
  { page: 3, component: <HomeScreenFormPage04 /> },
  { page: 4, component: <HomeScreenFormPage05 /> },
  { page: 5, component: <HomeScreenFormPage06 /> },
];

export function HomeScreen (): React.ReactElement {
  const { user: { name, age, cep }, knowsCourse, monthsPlan, dream, affinities } = useSelector((state: StateType) => state.onboarding);
  const dispatch = useDispatch();

  const [page, setPage] = useState(6);
  const isFinalPage = (page === 6);

  function alert () {
    window.alert('preencha todos os campos corretamente');
  }

  function handleNextPage () {
    if (page === 0) {
      setPage(1);
    } else if (page === 1) {
      if (name.length <= 3 || age.length != 2 || cep.length != 8) {
        alert();
      } else {
        setPage(2);
      }
    } else if (page === 2) {
      if (knowsCourse === null) {
        alert();
      } else {
        setPage(3);
      }
    } else if (page === 3) {
      if (monthsPlan === null) {
        alert();
      } else {
        setPage(4);
      }
    } else if (page === 4) {
      if (dream === null) {
        alert();
      } else {
        setPage(5);
      }
    } else if (page === 5) {
      if (affinities.length < 3) {
        alert();
      } else {
        setPage(6);
      }
    }
  }

  function handleReset () {
    dispatch(resetOnboardingAction());
    setPage(0);
  }

  function renderFormOrCareer () {
    if (isFinalPage) {
      return (
        <CareerCardUI />
      );
    } else {
      return (
        <ProgressUI
          max={pages.length}
          current={page}
          title='Dados pessoais'
          label='perguntas'
        />
      );
    }
  }

  return (
    <div className={`background ${isFinalPage ? 'final-page' : ''}`} style={{
      backgroundImage: isFinalPage ? '' : `url(${bg as unknown as string})`,
      backgroundColor: isFinalPage ? '#8566B4' : '#FBFBFB',
    }}>
      <div className="container">
        <div id="card-container">
          <CardUI
            alternative={isFinalPage}
            onReset={handleReset}
            image={people as unknown as string}
            text='Escolha uma das respostas apresentadas ao lado, que você acredita ser a resposta mais adequada para nos contar um pouco sobre você.'
          />
        </div>

        <div id='form-container'>
          {renderFormOrCareer()}

          {pages.map(p => (p.page === page) ? p.component : null)}

          <div id='form-footer'>
            {isFinalPage ? null : (
              <BackButtonUI
                enable={page > 0}
                onClick={() => setPage(p => (p - 1))}
              />
            )}

            <ButtonUI
              label={isFinalPage ? 'Seguir para o meu mural' : page === 0 ? 'antecipar o meu futuro!' : 'avançar'}
              onClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
