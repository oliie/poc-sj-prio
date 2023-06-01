<script lang="ts">
  import { page } from '$app/stores';
  import Hero from '$lib/components/ui/Hero.svelte';
  import { t } from '$lib/services/i18n';
</script>

<Hero
  title={$page.status + ''}
  introText={$page.error?.message ?? ''}
  imageAltText={t('error_page_hero_alt_text')}
  imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/56/Abandoned_train_platform_in_Nazimabad%2CUttarakhand%2C_India_WTK20150912-IMG_0416.jpg"
/>

<div class="container p-4 mx-auto text-center">
  <h1 class="mb-4 text-2xl font-bold text-center">{t('error_page_title')}</h1>
  <a
    href="/"
    class="normal-case border-none rounded-none btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark"
  >
    {t('error_page_link_text')}
  </a>
</div>
