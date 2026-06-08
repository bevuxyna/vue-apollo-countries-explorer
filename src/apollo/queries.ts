import gql from 'graphql-tag';

export const GET_LAUNCHES = gql`
    query GetLaunches($limit: Int, $offset: Int) {
        launches(limit: $limit, offset: $offset) {
            id
            mission_name
            launch_year
            launch_success
            rocket {
                rocket_name
            }
            links {
                mission_patch_small
            }
        }
    }
`;

export const GET_LAUNCH_DETAILS = gql`
    query GetLaunchDetails($id: ID!) {
        launch(id: $id) {
            id
            mission_name
            details
            launch_date_utc
            launch_success
            rocket {
                rocket_name
                rocket_type
            }
            links {
                mission_patch_small
                video_link
                article_link
                wikipedia
            }
        }
    }
`;