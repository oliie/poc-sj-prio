import type { User } from '$lib/custom-types';
import { get, writable } from 'svelte/store';

function createUserStore() {
  const store = writable<User | null>(null);
  const { subscribe, update, set } = store;

  async function signIn() {
    const res = await fetch('/api/auth', { method: 'POST' });

    if (!res.ok) {
      return;
    }

    set(await res.json());
  }

  async function signOut() {
    set(null);
  }

  function getFullName() {
    const user = get(store);

    if (!user) {
      return;
    }

    const { firstname, lastname } = user;
    return `${firstname} ${lastname}`;
  }

  function addPoints(points: number) {
    update((user) => {
      if (!user) {
        return null;
      }

      return { ...user, points: user.points + points };
    });
  }

  return {
    subscribe,
    signIn,
    signOut,
    getFullName,
    addPoints
  };
}

export const user = createUserStore();
