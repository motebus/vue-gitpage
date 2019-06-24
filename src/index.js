import get from './querystring'

export default {
    install: function (Vue, opt = {}) {
        const $pageUtil = Object.create(null)
        $pageUtil.get = get

        Vue.prototype.$pageUtil = $pageUtil
    }
}