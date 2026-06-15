<template>
  <div class="card">
      <div>
        <div class="d-flex flex-column ga-1">
          <span class="title">{{ country?.name }}</span>
          <span class="caption">{{ country?.capital || '—' }}</span>
        </div>
        <v-chip
          size="x-small"
          :color="CONTINENT_COLORS[country?.continent.name].bg"
          :style="{ color: CONTINENT_COLORS[country?.continent.name].text }"
          variant="flat"
          class="mt-1"
        >
          {{ country?.continent.code }}
        </v-chip>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { Country } from '@/apollo/types/graphql.ts';
import { CONTINENT_COLORS } from '@/constants';

defineProps<{ country: Country }>();
</script>

<style scoped>
.card {
  background: var(--background-secondary);
  border-radius: 15px;
  border: 1px solid var(--border);
  color: #f1f5f9;
  padding: 16px;
}
</style>
