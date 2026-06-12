<template>
  <v-card class="card">
    <v-card-item>
      <template #prepend>
        <country-flag :iso="country.code" mode="squared" />
      </template>

      <v-card-title>{{ country?.continent.code }}</v-card-title>

      <v-card-text>
        <div class="d-flex flex-column">
          <span>{{ country?.name }}</span>
          <span>{{ country?.capital || '—' }}</span>
        </div>
        <v-chip
          size="x-small"
          :color="CONTINENT_COLORS[country?.continent.name].bg"
          variant="flat"
          >
          {{ country?.continent.code }}
        </v-chip>
      </v-card-text>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import type { Country } from '@/apollo/types/graphql.ts';
import { CONTINENT_COLORS } from '@/constants';

defineProps<{ country: Country }>();
</script>

<style scoped></style>
