import http from 'axios'

export const getLocation = (address) => {
  return http({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    params: {
      address,
      sensor: false,
      components: 'country:Australia',
    },
    headers: {
      Authorization: null,
    },
  }).then(({ data }) => data.results.map(item => ({
    name: item.formatted_address,
    geo: item.geometry.location,
    components: item.address_components,
  })))
}
