import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOnboardingState, ONBOARDING, IOnboardingUser, IAffinity } from './onboarding.types';

const onboardingInitialState: IOnboardingState = {
  user: { name: 'Victor', age: '', cep: '' },
  knowsCourse: null,
  monthsPlan: null,
  dream: null,
  affinities: [],
};

export const onboardingSlice = createSlice({
  name: ONBOARDING,
  initialState: onboardingInitialState,
  reducers: {
    setUserAction: (state: IOnboardingState, { payload: user }: PayloadAction<IOnboardingUser>) => {
      state.user = user;
    },

    setKnowCourseAction: (state: IOnboardingState, { payload: knowsCourse }: PayloadAction<string>) => {
      state.knowsCourse = knowsCourse;
    },

    setMonthsPlanAction: (state: IOnboardingState, { payload: monthsPlan }: PayloadAction<string>) => {
      state.monthsPlan = monthsPlan;
    },

    setDreamAction: (state: IOnboardingState, { payload: dream }: PayloadAction<string>) => {
      state.dream = dream;
    },

    setAffinitiesAction: (state: IOnboardingState, { payload: affinity }: PayloadAction<IAffinity>) => {
      state.affinities = [
        ...state.affinities.filter(({ name }) => affinity.name !== name),
        affinity,
      ];
    },

    resetOnboardingAction: () => {
      return onboardingInitialState;
    },
  },
});

export const {
  setUserAction,
  setKnowCourseAction,
  setMonthsPlanAction,
  setDreamAction,
  setAffinitiesAction,
  resetOnboardingAction,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;