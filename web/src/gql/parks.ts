export const SEARCH_ADDRESS = gql`
  mutation SearchAddress($address: String!) {
    searchAddress(address: $address) {
      place_id
      licence
      osm_type
      osm_id
      boundingbox
      lat
      lon
      display_name
      class
      type
      importance
    }
  }
`
