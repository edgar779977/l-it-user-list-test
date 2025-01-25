import { Module } from 'vuex'
import { RootState } from '@/store'
import axiosInstance from '@/utils/axiosInstance'

export interface User {
  name: string;
  username: string;
  email: string;
  [key: string]: any;
}

interface UsersState {
  userList: User[]
  emailList: string[]
}

const users: Module<UsersState, RootState> = {
  namespaced: true,
  state: {
    userList: [],
    emailList: []
  },
  mutations: {
    SET_USERS (state, users: User[]) {
      state.userList = users.map((user) => user)
    },
    SET_USERS_EMAIL_LIST (state, users: User[]) {
      state.emailList = users.map((user) => user.email)
    }
  },
  actions: {
    async fetchUsers ({ commit }, payload) {
      try {
        const filteredPayload = Object.fromEntries(
          Object.entries(payload).filter(([_, value]) => value !== '')
        )

        const response = await axiosInstance.get('/users', {
          params: filteredPayload
        })
        const users: User[] = await response.data
        commit('SET_USERS', users)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    async fetchUsersEmail ({ commit }) {
      try {
        const response = await axiosInstance.get('/users')
        const users: User[] = await response.data
        commit('SET_USERS_EMAIL_LIST', users)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
  },
  getters: {
    allUsers (state): User[] {
      return state.userList.map((user: any) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city
      }))
    },
    getUserById: (state) => (id: number): User | undefined => {
      return state.userList.find(user => user.id === id)
    },
    allEmailListSelect (state) {
      return [{ label: 'All', value: '' }, ...state.emailList.map(item => ({ label: item, value: item }))]
    }
  }
}

export default users
