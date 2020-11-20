
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: {name: 'home'}},
      { path: 'home', name: 'home', component: () => import('pages/Index.vue') },
      // { path: 'blog', name: 'blog', component: () => import('pages/Blog.vue') },
      {path: 'page/:page', name: 'page', component: () => import('pages/Blog.vue')},
      {path: 'page/:page/:subpage', name: 'subpage', component: () => import('pages/Blog.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
