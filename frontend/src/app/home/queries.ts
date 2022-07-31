import { gql } from 'apollo-angular';

export const GET_DESCRIPTION = gql`
  query description{
    description
  }
`;