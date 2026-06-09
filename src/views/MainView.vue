<template>
  <div class="page">
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
          <v-card class="card">
            <v-card-item>
              <v-card-title>{{ country.name }}</v-card-title>

              <v-card-text>
                <div class="d-flex flex-column">
                  <span>Capital: {{ country?.capital || '—' }}</span>
                  <span>Continent: {{ country?.continent.name }}</span>
                  <span>
                    Languages: {{ country.languages.map(l => l.name).join(', ') }}
                  </span>
                  <span>Currency: {{ country?.currency }}</span>
                </div>
              </v-card-text>
            </v-card-item>


          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import {GET_COUNTRIES} from '@/apollo/queries';
import type {
  GetCountriesQuery,
  GetCountriesQueryVariables,
} from '@/apollo/types/graphql';

const { result, loading, error, refetch } = useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GET_COUNTRIES
);
</script>

<style scoped>
.page {
  background: #18181B;
  color: #F1F5F9;
  flex: 1;
}

.card {
  background: #1F1F23;
  border-radius: 15px;
  border: 1px solid #2e2e32;
  color: #F1F5F9;
  padding: 16px;
}
</style>