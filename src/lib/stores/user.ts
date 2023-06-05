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

  function withdrawPoints(amount: number): boolean {
    const user = get(store);

    if (!user) {
      return false;
    }

    if (amount > user.points) {
      return false;
    }

    update((user) => {
      if (!user) {
        return null;
      }
      return { ...user, points: Math.max(user.points - amount, 0) };
    });

    return true;
  }

  return {
    subscribe,
    signIn,
    signOut,
    getFullName,
    withdrawPoints
  };
}

export const user = createUserStore();
