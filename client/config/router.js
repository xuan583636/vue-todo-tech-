import Router from 'vue-router'
import routes from './routes'

console.log('routes', routes)
export default () => {
  return new Router({
    routes,
    base: '/base/',
    mode: 'history',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, form, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0, y: 0
        }
      }
    },
    fallback: true
  })
}
