export type IOnboardingUser = {
  name: string
  age: string
  cep: string
};

export type IAffinity = {
  name: string
  value: number
};

export type IOnboardingState = {
  user: IOnboardingUser,
  knowsCourse: string | null,
  monthsPlan: string | null,
  dream: string | null,
  affinities: IAffinity[] | []
};

export const ONBOARDING = 'onboarding';
export type Hello = typeof ONBOARDING;

export const SET_USER = `${ONBOARDING}/setUserAction`;
export type SetUser = typeof SET_USER;

export const SET_KNOW_COURSE = `${ONBOARDING}/setKnowCourseAction`;
export type SetKnowCourse = typeof SET_KNOW_COURSE;

export const SET_MONTHS_PLAN = `${ONBOARDING}/setMonthsPlanAction`;
export type SetMounthsPlan = typeof SET_MONTHS_PLAN;

export const SET_DREAM = `${ONBOARDING}/setDreamAction`;
export type SetDream = typeof SET_DREAM;

export const SET_AFFINITIES = `${ONBOARDING}/setAffinitiesAction`;
export type SetAffinities = typeof SET_AFFINITIES;

export const RESET_ONBOARDING = `${ONBOARDING}/resetOnboardingAction`;
export type ResetOnboarding = typeof RESET_ONBOARDING;
