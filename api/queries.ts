import { gql } from "graphql-tag";

export const GET_POLICY_BY_SLUG = gql`
  query policies($where: PolicyFilter) {
    policyCollection(where: $where) {
      items {
        sys {
          id
        }
      }
    }
  }
`;

export const GET_POLICY_BY_ID = gql`
  query Policy($policyId: String!) {
    policy(id: $policyId) {
      title
      body {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              fileName
              url
            }
          }
        }
      }
    }
  }
`;
