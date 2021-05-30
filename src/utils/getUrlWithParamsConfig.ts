import config from 'config/index'

export const resolveParams = ({ query, pathname }: { query: object, pathname: string }) =>
  Object.keys(query).reduce(
    (acc, current) =>
      pathname.includes(`{${current}}`)
        ? {
          pathname: acc.pathname.replace(`{${current}}`, query[current as keyof typeof query]),
          query: acc.query,
        }
        : {
          pathname: acc.pathname,
          query: { [current]: query[current as keyof typeof query] },
        },
    {
      query: {},
      pathname,
    },
  )

const getUrlWithParamsConfig = ({ endpoint, query = {} }: { endpoint: string; query?: object }) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint as keyof typeof config.client.endpoint].uri,
    ...resolveParams({
      pathname: config.client.endpoint[endpoint as keyof typeof config.client.endpoint].uri.pathname,
      query,
    }),
  }

  return url
}

export default getUrlWithParamsConfig
