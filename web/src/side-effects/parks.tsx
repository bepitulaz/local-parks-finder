import { useMutation } from '@redwoodjs/web'

import { SEARCH_ADDRESS } from 'src/gql/parks'

export const useSearchAddress = () => {
  const [searchAddress, { loading, error, data }] = useMutation(SEARCH_ADDRESS)

  return {
    searchAddress,
    loading,
    error,
    data,
  }
}
