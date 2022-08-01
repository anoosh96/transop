import { gql } from 'apollo-angular';


// TODO: eventually split this into sub filters with dedicated queries for each model type
export const GET_COMMUNITIES_BY_USER_ID_QUERY = gql`
  query myCommunities($user_id: String!) {
    myCommunities (userId: $user_id) {
      id,
      name,
      description
    }
  }
`;

export const CREATE_COMMUNITY_QUERY = gql`
  mutation createCommunity($name: String!, $description: String!){
    createCommunity(
      input: {
        name: $name,
        description: $description
      }
  ) {
      id
      name
      description
    }
  }
`

export const REGISTER_USER_QUERY = gql`
  mutation createUser($name: String!, $email: String!, $password: String!){
    createUser(
      input: {
        name: $name,
        authProvider: {
          credentials: {
            email: $email,
            password: $password
          }
        }
      }
  ) {
      id
      name
      email
    }
  }
`;

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

export const GET_DESCRIPTION = gql`
  query description{
    description
  }
`;