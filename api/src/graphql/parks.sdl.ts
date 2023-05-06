export const schema = gql`
  type Mutation {
    searchParks(address: String!): [Address] @skipAuth
  }

  type Address {
    place_id: String
    licence: String
    osm_type: String
    osm_id: BigInt
    boundingbox: [String]
    lat: String
    lon: String
    display_name: String
    class: String
    type: String
    importance: Float
  }
`
