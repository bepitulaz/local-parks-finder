import nominatim from 'nominatim-client'

export const searchAddress = ({ address }) => {
  const query = {
    q: address,
    addressDetails: '1',
  }
  const client = nominatim.createClient({
    useragent: 'LocalParkFinder',
    referer: 'http://localhost:8910',
  })

  return client.search(query)
}
