import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '6320f604-a0b0-4372-ba96-4801c1d3eb66',
};

export const sampleWithPartialData: IAuthority = {
  name: 'b6784c9a-3ccd-4b25-9c54-3555a881b31e',
};

export const sampleWithFullData: IAuthority = {
  name: '6f5d2b53-24c0-44d7-bc93-cd80d68192b7',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
