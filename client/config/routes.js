import Todo from './../views/todo/todo.vue'
import Login from './../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    // path: '/app/:id',
    // props: (route) => ({ id: route.query.name }),
    path: '/app',
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is an app',
      description: 'assa'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
  }
]
