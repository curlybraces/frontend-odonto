import Vue from 'vue'
import Vuex from 'vuex'

import consult from './consult'
import users from './users'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      consult,
      users
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  module.hot.accept(['./consult'], () => {
    const newConsult = require('./consult').default
    Store.hotUpdate({ modules: { consult: newConsult } })
  })
  module.hot.accept(['./users'], () => {
    const newUsers = require('./users').default
    Store.hotUpdate({ modules: { users: newUsers } })
  })
  return Store
}
