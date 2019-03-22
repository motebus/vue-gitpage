import { mergeAll } from 'ramda'
import parse from 'url-parse'

export default {
    install: function (Vue, opt) {
        const params = () => mergeAll([
            opt,
            parse(window.location.href, true).query
        ])

        Object.defineProperty(
            Vue.prototype,
            '$pageUtil',
            { value: { params } }
        )
    }
}