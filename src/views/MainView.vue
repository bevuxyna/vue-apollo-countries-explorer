<template>
  <div class="page">
    <h1>Countries of the World</h1>
    <span>250 countries — explore capitals, currencies, languages and more</span>

    <v-text-field
      prepend-inner-icon="mdi mdi-magnify"
      variant="outlined"
      placeholder="Search by name, code or capital…"
      rounded
    />

    <div class="d-flex ga-2">
      <v-chip v-for="continent of Continents" variant="outlined" class="chip">
        {{ continent }}
      </v-chip>
    </div>

    <v-container>
      <v-row>
        <v-col
          v-for="country of result?.countries"
          :key="country?.code"
          cols="12"
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

const { result, loading, error, refetch } = useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
  GET_COUNTRIES
);
</script>

<style scoped lang="scss">
.page {
  background: #18181b;
  color: #f1f5f9;
  flex: 1;
}

.card {
  background: #1f1f23;
  border-radius: 15px;
  border: 1px solid #2e2e32;
  color: #f1f5f9;
  padding: 16px;
}

.chip {
  background-color: #1f1f23;
  color: #a1a1aa;
  border-color: #a1a1aa;
}
</style>
