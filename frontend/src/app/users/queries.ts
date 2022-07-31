import { gql } from 'apollo-angular';

export const LOGIN_USER_QUERY_BY_EMAIL_PASSWORD = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser (
      input: {
        credentials: {
          email: $email,
          password: $password
        }
      }
    ) {
      token,
      user{
        id
        name
        email
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query currentUser($local_id: String!, $local_token: String!){
    currentUser (localId: $local_id, localToken: $local_token) {
      id,
      name,
      email,
      token
    }
  }
`;