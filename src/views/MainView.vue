<template>
  <div class="page">
    <h1 class="mb-1">Countries of the World</h1>
    <span class="subtitle">250 countries — explore capitals, currencies, languages and more</span>

    <v-text-field
      prepend-inner-icon="mdi mdi-magnify"
      placeholder="Search by name, code or capital"
      rounded
      clearable
      variant="outlined"
      class="search-field"
    />

    <div class="d-flex ga-2">
      <v-chip-group v-model="continentFilter" selected-class="chip_selected">
        <v-chip
          v-for="continent of Continents"
          :key="continent"
          :value="continent"
          variant="outlined"
          class="chip"
        >
          {{ continent }}
        </v-chip>
      </v-chip-group>
    </div>

    <v-container class="mt-3">
      <v-row>
        <v-col
          v-for="country of result?.countries"
          :key="country?.code"
          cols="4"
          sm="6"
          md="4"
          lg="3"
        >
          <CountryCard :country="country" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { GET_COUNTRIES } from '@/apollo/queries';
import type { GetCountriesQuery, GetCountriesQueryVariables } from '@/apollo/types/graphql';
import CountryCard from '@/components/CountryCard.vue';
import { Continents } from '@/constants';
import { ref } from 'vue';

const { result, loading, error, refetch } = useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
  GET_COUNTRIES
);

const continentFilter = ref(Continents.All);
</script>

<style scoped lang="scss">
.page {
  flex: 1;
}

.subtitle {
  color: var(--text-secondary);
}

.chip {
  background-color: var(--background-secondary);
  color: var(--text-secondary);
  border-color: var(--border);

  &_selected {
    background-color: var(--background-primary);
    color: var(--text-primary);
    border-color: var(--text-primary);
  }
}

.search-field {
  margin-top: 20px;

  :deep(.v-input__control) {
    .v-field__outline {
      //background-color: var(--background-secondary) !important;
    }

    .v-field__input {
      padding: 6px !important;
      min-height: 42px !important;
    }
  }
}
</style>
