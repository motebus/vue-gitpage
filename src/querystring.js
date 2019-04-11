import parse from 'url-parse'
import { keys, reduce } from 'ramda'
import isJSON from 'is-json'

const params = () => {
    let { query } = parse(window.location.href, true)
    let queryKeys = keys(query)
    return reduce(
        (acc, elem) => {
            let value = query[elem]
            acc[elem] = isJSON(value) ? JSON.parse(value) : value
            return acc
        }, {}, queryKeys
    )
}

/**
 * @function get
 * @param {Object} query 
 * @param {string} query.field
 * @param {function} query.reducer
 */
function get({
    field = undefined,
    reducer = value => value
} = {}) {
    if (field === undefined) {
        return reducer(params())
    }

    if (typeof field !== 'string') {
        return undefined
    }

    let value = params()[field]
    return reducer(value)
}

export default get 