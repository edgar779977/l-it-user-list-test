import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import users, { User } from './modules/users'

Vue.use(Vuex)

export interface RootState {
  users: {
    userList: User[],
    emailList: string[],
  },
}

const store: StoreOptions<RootState> = {
  modules: {
    users
  }
}

export default new Vuex.Store<RootState>(store)
