import nominatim from 'nominatim-client'

export const searchParks = ({ address }) => {
  // Nominatim supports phrase search, so we can search for "parks near <address>" directly
  // Check the special phrases here: https://wiki.openstreetmap.org/wiki/Nominatim/Special_Phrases/EN
  const query = {
    q: `parks near ${address}`,
    addressDetails: '1',
  }
  const client = nominatim.createClient({
    useragent: 'LocalParkFinder',
    referer: 'http://localhost:8910',
  })

  return client.search(query)
}
