import helloReducer from '@redux/hello/hello.slice';
import { HelloStateType } from '@redux/hello/hello.types';

import onboardingReducer from '@redux/onboarding/onboarding.slice';
import { IOnboardingState } from '@redux/onboarding/onboarding.types';

export type StateType = {
  hello: HelloStateType,
  onboarding: IOnboardingState,
};

export const rootReducer = {
  hello: helloReducer,
  onboarding: onboardingReducer,
};
