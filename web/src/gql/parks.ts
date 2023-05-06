export const SEARCH_PARKS = gql`
  mutation SearchParks($address: String!) {
    searchParks(address: $address) {
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
