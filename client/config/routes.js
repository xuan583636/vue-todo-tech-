// import Todo from './../views/todo/todo.vue'
// import Login from './../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/app/:id',
    // props: (route) => ({ id: route.query.name }),
    props: true,
    // path: '/app',
    component: import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is an app',
      description: 'assa'
    },
    beforeEnter (to, from, next) {
      console.log('app router before enter')
      next()
    }
  },
  {
    path: '/login',
    component: './../views/login/login.vue'
  }
]
