import React from 'react'
import Loadable from 'react-loadable'
import HomeLoading from '@components/Loading/Home'
import TabPicker from '@pages/TabPicker'
import {Icon} from 'antd-mobile'

let Loading = props => (
  <div
    style={{
      position: 'fixed',
      top: '50px',
      left: '50%',
      transform: 'translate3d(-50%, 0, 0)'
    }}
  >
    <Icon type="loading" />
  </div>
)

const Home = Loadable({
  loader: () => import('@pages/Home'),
  loading: () => <HomeLoading />
})

const routes = [
  {
    path: '/timeline/:category',
    exact: true,
    component: Home,
    meta: {role: ['auth', 'guest']}
  },
  {
    path: '/auth',
    exact: true,
    meta: {role: ['guest']},
    component: Loadable({
      loader: () => import('@pages/Auth'),
      loading: () => <Loading />
    })
  },
  {
    path: '/register',
    exact: true,
    meta: {role: ['guest']},
    component: Loadable({
      loader: () => import('@pages/Register'),
      loading: () => <Loading />
    })
  },
  {
    path: '/settings',
    exact: true,
    component: Loadable({
      loader: () => import('@pages/Settings'),
      loading: () => <Loading />
    }),
    meta: {role: ['auth','guest']}
  },
  {
    path: '/post/:id',
    meta: {role: ['auth', 'guest']},
    component: Loadable({
      loader: () => import('@pages/Post'),
      loading: () => <Loading />
    })
  },
  {
    path: '/postdata/:id',
    meta: {role: ['auth', 'guest']},
    component: Loadable({
      loader: () => import('@pages/PostData'),
      loading: () => <Loading />
    })
  },
  {
    path: '/pin/:id',
    meta: {role: ['auth', 'guest']},
    component: Loadable({
      loader: () => import('@pages/Pin'),
      loading: () => <Loading />
    })
  },
  {path: '/recommended', component: TabPicker, meta: {role: ['auth', 'guest']}},
  {
    path: '/activity/:category/:id?', //id参数可选
    meta: {role: ['auth', 'guest']},
    component: Loadable({
      loader: () => import('@pages/Activity'),
      loading: () => <Loading />
    })
  },
  {
    path: '/explore',
    meta: {role: ['auth', 'guest']},
    component: Loadable({
      loader: () => import('@pages/Explore'),
      loading: () => <Loading />
    })
  },
  {
    path: '/feedback',
    meta: {role: ['auth', 'guest']},
    component: Loadable({
      loader: () => import('@pages/Feedback'),
      loading: () => <Loading />
    })
  },
  {
    path: '/xiaoce',
    exact: true,
    component: Loadable({
      loader: () => import('@pages/Xiaoce'),
      loading: () => <Loading />
    }),
    meta: {role: ['auth','guest']}
  },
  {
    path: '/profile',
    exact: true,
    component: Loadable({
      loader: () => import('@pages/Profile'),
      loading: () => <Loading />
    }),
    meta: {role: ['auth','guest']}
  },

  {
    path: '/user/:id',
    meta: {role: ['auth', 'guest']},
    component: Loadable({
      loader: () => import('@pages/User'),
      loading: () => <Loading />
    }),
    routes: [
      {
        path: '/user/:id/:tag',
        meta: {role: ['auth', 'guest']},
        component: Loadable({
          loader: () => import('@pages/User'),
          loading: () => <Loading />
        })
      }
    ]
  },
  {
    path: '/joinus',
    meta: {role: ['auth', 'guest']},
    component: Loadable({
      loader: () => import('@pages/JoinUs'),
      loading: () => <Loading />
    })
  }
]

export default routes
