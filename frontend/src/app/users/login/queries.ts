import { gql } from 'apollo-angular';

export const LOGIN_USER_QUERY = gql`
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
      }
    }
  }
`;