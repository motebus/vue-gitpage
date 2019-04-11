import get from './querystring'
import createMMS from './webmms'

export default {
    install: function (Vue, opt = {}) {
        const $pageUtil = Object.create(null)
        $pageUtil.get = get
        $pageUtil.createMMS = createMMS

        Vue.prototype.$pageUtil = $pageUtil
    }
}