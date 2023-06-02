<script lang="ts">
  import { user } from '$lib/stores/user';
  import { numberWithSpaces } from '$lib/utils/helpers';
  import { t } from '$lib/services/i18n';

  const signInLabel = t('sign_in_label');
  const signOutLabel = t('sign_out_label');
  const pointsLabel = t('total_points_label');

  $: formattedPoints = numberWithSpaces($user?.points || 0);
</script>

<header class="navbar sticky top-0 z-50 justify-between bg-base-100">
  <nav>
    <a href="/" class="text-xl normal-case btn btn-ghost text-sj-leaf-dark">SJ Prioshop</a>
  </nav>

  <div class="flex gap-4">
    {#if $user}
      {user.getFullName()}
      <div>
        <span>{formattedPoints}</span> <span>{pointsLabel}</span>
      </div>
      <button class="btn btn-ghost" on:click={user.signOut}>{signOutLabel} </button>
    {:else}
      <button class="btn btn-ghost" on:click={user.signIn}>{signInLabel} </button>
    {/if}
  </div>
</header>
