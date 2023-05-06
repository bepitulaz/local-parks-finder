import { useMutation } from '@redwoodjs/web'

import { SEARCH_PARKS } from 'src/gql/parks'

/**
 * A custom hook that abstracts away the useMutation logic for searching for parks
 * @returns {Object} An object containing the searchParks mutation, loading, error, and data
 */
export const useSearchParks = () => {
  const [searchParks, { loading, error, data }] = useMutation(SEARCH_PARKS)

  return {
    searchParks,
    loading,
    error,
    addresses: data?.searchParks || [],
  }
}
