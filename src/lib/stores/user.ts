import type { User } from '$lib/custom-types';
import type { Readable } from 'svelte/store';
import { writable } from 'svelte/store';

interface UserStore extends Readable<User | null> {
  signIn: () => void;
  signOut: () => void;
  addPoints: (points: number) => void;
}

function createUserStore(): UserStore {
  const { subscribe, update, set } = writable<User | null>(null);

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
    addPoints
  };
}

export const user = createUserStore();
