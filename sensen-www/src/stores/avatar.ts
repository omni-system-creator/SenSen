import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Avatar {
  id: string
  name: string
  description: string
  personalities: string[]
  skills: string[]
  voice: string
  avatarUrl: string
  createdAt: number
}

export const useAvatarStore = defineStore('avatar', () => {
  const avatars = ref<Avatar[]>([])
  const currentAvatar = ref<Avatar | null>(null)

  function addAvatar(avatar: Omit<Avatar, 'id' | 'createdAt'>) {
    const newAvatar: Avatar = {
      ...avatar,
      id: Date.now().toString(),
      createdAt: Date.now()
    }
    avatars.value.push(newAvatar)
    return newAvatar
  }

  function selectAvatar(id: string) {
    const avatar = avatars.value.find(a => a.id === id)
    if (avatar) {
      currentAvatar.value = avatar
    }
  }

  return { avatars, currentAvatar, addAvatar, selectAvatar }
})
