import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 21763,
  login: '5H',
};

export const sampleWithPartialData: IUser = {
  id: 15521,
  login: 'r',
};

export const sampleWithFullData: IUser = {
  id: 5767,
  login: '_*?mp@9WyNVK\\*eyjwqh',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
