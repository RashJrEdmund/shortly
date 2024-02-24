import { create } from 'zustand';
import type { ILinkStore } from './link-store.d';

const useLinkStore = create<ILinkStore>((set) => {
  return {
    userUrls: [
      // {
      //   id: crypto.randomUUID(),
      //   original: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop',
      //   short: 'http://localhost:5173/',
      // },
      // {
      //   id: crypto.randomUUID(),
      //   original: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop',
      //   short: 'http://localhost:5173/',
      // },
      // {
      //   id: crypto.randomUUID(),
      //   original: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop',
      //   short: 'http://localhost:5173/',
      // },
    ],
    setUserUrls: (_userUrls) => set({ userUrls: _userUrls }),
  }
})

export {
  useLinkStore,
};
