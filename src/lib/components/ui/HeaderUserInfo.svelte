<script lang="ts">
  import { language, locale } from '$lib/utils/languageUtil';
  import type { User } from '$lib/custom-types';

  export let lang = language.SV;
  export let user: User | null;
  export let pointsLabel: string;
  export let logInLabel: string;
  export let logOutLabel: string;
  export let onLogInClicked: () => void;
  export let onLogOutClicked: () => void;

  $: fullName = user ? `${user.firstname} ${user.lastname}` : '';

  const pointsFormatter = new Intl.NumberFormat(locale[lang]);
  $: formattedPoints = pointsFormatter.format(user?.points || 0);
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
