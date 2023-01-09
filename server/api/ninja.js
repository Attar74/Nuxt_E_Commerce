export default defineEventHandler(async (event) => {

    // //handle query
    // const { name } = getQuery(event)

    // //handle post daat
    // const { age } = await readBody(event)
    // return {
    //     message: `Hello, ${name} ${age}`
    // }

    // api call with private key
    const { currencyKey } = useRuntimeConfig()

    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

    return data
})