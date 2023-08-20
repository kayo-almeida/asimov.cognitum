import './Home.screen.css';
import bg from '@assets/images/bg/gradient-bg.svg';
import people from '@assets/images/people.svg';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StateType } from '@redux/root-reducer';
import { getHelloAction } from '@redux/hello/hello.slice';
import { CardUI } from '@ui/Card/Card.ui';
import { ProgressUI } from '@ui/Progress/Progress.ui';
import { BackButtonUI } from '@ui/BackButton/BackButton.ui';
import { ButtonUI } from '@ui/Button/Button.ui';

export function HomeScreen (): React.ReactElement {
  const message = useSelector((state: StateType) => state.hello.data.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHelloAction());
  }, []);

  return (
    <div className='background' style={{ backgroundImage: `url(${bg as unknown as string})` }}>
      <div className="container">
        <div id="card-container">
          <CardUI
            image={people as unknown as string}
            text='Escolha uma das respostas apresentadas ao lado, que você acredita ser a resposta mais adequada para nos contar um pouco sobre você.'
          />
        </div>

        <div id='form-container'>
          <ProgressUI
            max={5}
            current={0}
            title='Dados pessoais'
            label='perguntas'
          />

          <p id='welcome-title'>
            👋 Olá, bem-vindo!
          </p>

          <span id='welcome-text'>
            Escolha uma das respostas apresentadas ao lado, que você acredita ser a resposta mais
            adequada para nos contar um pouco sobre você.
          </span>

          <div id='form-footer'>
            <BackButtonUI
              enable={false}
              onClick={() => null}
            />

            <ButtonUI
              label='antecipar o meu futuro!'
              onClick={() => null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
