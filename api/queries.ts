import { gql } from "graphql-tag"

export const GET_POLICY_BY_SLUG = gql`
    query policies($where: PolicyFilter){
        policyCollection(where: $where) {
            items {
                title
                body {
                    json
                }
            }
        }
    }
`
