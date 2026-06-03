export const GET_LAUNCHES = gql`
query getLaunches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
    id
    mission_name
    launch_date_utc
    launch_success
    rocket {
      rocket_name
      rocket_type
    }
  }
}
`;