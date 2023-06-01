<script lang="ts">
  import type { User } from '$lib/custom-types';
  import { numberWithSpaces } from '$lib/utils/helpers';

  export let user: User | null;
  export let pointsLabel: string;
  export let logInLabel: string;
  export let logOutLabel: string;
  export let onLogInClicked: () => void;
  export let onLogOutClicked: () => void;

  $: fullName = user ? `${user.firstname} ${user.lastname}` : '';

  $: formattedPoints = numberWithSpaces(user?.points || 0);
</script>

<div class="flex gap-4">
  {#if user}
    {fullName}
    <div>
      <span>{formattedPoints}</span> <span>{pointsLabel}</span>
    </div>
    <button class="btn btn-ghost" on:click={onLogOutClicked}>{logOutLabel} </button>
  {:else}
    <button class="btn btn-ghost" on:click={onLogInClicked}>{logInLabel} </button>
  {/if}
</div>
