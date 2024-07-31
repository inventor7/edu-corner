import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  
  const user = ref({ name: 'Eduardo' })
  const setUser = (newUser: { name: string }) => {
    user.value = newUser
  }


  return { user, setUser }
}
)