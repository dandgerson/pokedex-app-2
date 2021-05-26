import URL from 'url'
import axios from 'axios'
import config from 'config'

const request = async ({ endpoint = '', query = {}, uriSuffix = '' }) => {
  const url = URL.format({
    ...config.client.server,
    ...config.client.endpoint[endpoint as keyof typeof config.client.endpoint].uri,
    ...(uriSuffix
      ? {
        pathname: `${config.client.endpoint[endpoint as keyof typeof config.client.endpoint].uri.pathname}${uriSuffix}`,
      }
      : {}),
    ...query,
  })

  return axios({
    url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
}

export default request
