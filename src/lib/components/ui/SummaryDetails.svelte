<script lang="ts">
  import type { Offer } from '$lib/custom-types';
  import { t } from '$lib/services/i18n';

  export let offer: Offer;
  export let amount: number;
</script>

<div class="w-full pb-6 mx-auto md:w-1/3">
  <div class="grid grid-cols-2 py-2">
    <p>{t('summary_product')}</p>
    <p class="font-bold text-right">{offer.title}</p>
  </div>
  <div class="grid grid-cols-2 py-2">
    <p>{t('summary_amount')}</p>
    <p class="font-bold text-right">{amount}</p>
  </div>
  <div class="grid grid-cols-2 py-2">
    <p>{t('summary_points')}</p>
    <p class="font-bold text-right">{offer.points * amount}</p>
  </div>
</div>
