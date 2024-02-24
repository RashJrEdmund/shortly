import type { ILink } from '../../interfaces';

interface ILinkStore {
  userUrls: ILink[];

  setUserUrls: (link: ILink[]) => void;
}

export type {
  ILinkStore,
};
