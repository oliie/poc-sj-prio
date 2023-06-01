<script lang="ts">
  import NavBar from '$lib/components/Header.svelte';
  import { t } from '$lib/services/i18n';
  import { user } from '$lib/stores/user';

  $: navBarProps = {
    user: $user,
    isLoggedIn: $user,
    logInLabel: t('log_in_label'),
    logOutLabel: t('log_out_label'),
    pointsLabel: t('total_points_label')
  };

  function onLogInClicked() {
    user.signIn();
  }

  function onLogOutClicked() {
    user.signOut();
  }
</script>

<NavBar {...navBarProps} {onLogInClicked} {onLogOutClicked} />
