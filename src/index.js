import parse from 'url-parse'

export default {
    install: function (Vue, opt = {}) {
        const params = () => parse(window.location.href, true).query

        /**
         * @function get
         * @param {Object} query 
         * @param {string} query.field
         * @param {function} query.reducer
         */
        const get = ({
            field = undefined, 
            reducer = value => value
        } = {}) => {
            if (field === undefined) {
                return reducer(params())
            }

            if (typeof field !== 'string') {
                return undefined
            }

            let value = params()[field]
            return reducer(value)
        }

        Object.defineProperty(
            Vue.prototype,
            '$pageUtil',
            { value: { get } }
        )
    }
}