<script lang="ts">
  import { language } from '$lib/utils/languageUtil';
  import HeaderUserInfo from '$lib/components/ui/HeaderUserInfo.svelte';
  import type { User } from '$lib/custom-types';

  export let lang: language = language.SV;
  export let user: User | null;
  export let logInLabel: string;
  export let logOutLabel: string;
  export let pointsLabel: string;
  export let onLogOutClicked: () => void;
  export let onLogInClicked: () => void;
</script>

<header class="navbar sticky top-0 z-50 justify-between bg-base-100">
  <nav>
    <a href="/" class="text-xl normal-case btn btn-ghost text-sj-leaf-dark">SJ Prioshop</a>
  </nav>
  <HeaderUserInfo
    {...{
      lang,
      user,
      logInLabel,
      logOutLabel,
      pointsLabel,
      onLogInClicked,
      onLogOutClicked
    }}
  />
</header>
