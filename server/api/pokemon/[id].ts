export default defineEventHandler(async event => {
  const name = getRouterParam(event, 'id')
  const { url } = getQuery(event)

  const data = await $fetch(`${url}`)

  return data
})
