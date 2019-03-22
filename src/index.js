import {
    split, groupBy, map, zipObj,
    keys, reduce, values, mergeAll
} from 'ramda'

const dealUrlParams = () => {
    let params = map(
        item => {
            let [key, value] = split("=", item)
            return zipObj([key], [value])
        },
        split('&', split('?', window.location.href)[1] || '')
    )

    let result = map(
        groupItem => reduce(
            (acc, pair) => acc.concat(values(pair)[0]),
            [], groupItem
        )
        , groupBy(item => keys(item)[0], params)
    )
    return result
}


export default {
    install: function (Vue, opt) {
        const params = () => {
            let urlParams = dealUrlParams()
            return mergeAll([opt, urlParams])
        }

        Object.defineProperty(
            Vue.prototype,
            '$pageUtil',
            { value: { params } }
        )
    }
}