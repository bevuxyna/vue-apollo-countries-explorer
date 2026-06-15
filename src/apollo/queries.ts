import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
    query GetCountries($filter: CountryFilterInput) {
        countries(filter: $filter) {
            code
            name
            emoji
            currency
            capital
            continent {
                code
                name
            }
            languages {
                code
                name
            }
        }
    }
`;