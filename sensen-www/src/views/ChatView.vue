<script setup lang="ts">
import { ref, computed, nextTick, h } from 'vue';
import { useAvatarStore } from '../stores/avatar';
import { useRouter } from 'vue-router';
import { SendOutlined, UserOutlined, RobotOutlined } from '@ant-design/icons-vue';

const router = useRouter();
const avatarStore = useAvatarStore();

const inputValue = ref('');
const messages = ref<{ id: number; text: string; isUser: boolean; time: string }[]>([]);
const messagesContainer = ref<HTMLDivElement | null>(null);

const currentAvatar = computed(() => avatarStore.currentAvatar);
const avatars = computed(() => avatarStore.avatars);

const selectAvatar = (id: string) => {
  avatarStore.selectAvatar(id);
  messages.value = [
    {
      id: 1,
      text: `你好，我是${avatarStore.currentAvatar?.name}。${avatarStore.currentAvatar?.description || '很高兴见到你。'}`,
      isUser: false,
      time: new Date().toLocaleTimeString(),
    },
  ];
};

const sendMessage = async () => {
  if (!inputValue.value.trim()) return;

  const text = inputValue.value;
  inputValue.value = '';

  messages.value.push({
    id: Date.now(),
    text: text,
    isUser: true,
    time: new Date().toLocaleTimeString(),
  });

  await scrollToBottom();

  // Simulate AI response
  setTimeout(async () => {
    let responseText = `我听到了你说"${text}"。`;
    if (currentAvatar.value?.personalities.includes('humorous')) {
      responseText += ' 哈哈，这真有意思！';
    } else if (currentAvatar.value?.personalities.includes('rational')) {
      responseText += ' 从逻辑上讲，这是合理的。';
    } else if (currentAvatar.value?.personalities.includes('warm')) {
      responseText += ' 我会一直陪着你的。';
    }

    messages.value.push({
      id: Date.now() + 1,
      text: responseText,
      isUser: false,
      time: new Date().toLocaleTimeString(),
    });
    await scrollToBottom();
  }, 1000);
};

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// Initialize if an avatar is already selected
if (currentAvatar.value) {
  selectAvatar(currentAvatar.value.id);
}
</script>

<template>
  <div class="chat-view">
    <a-layout style="height: 600px; background: #fff;">
      <a-layout-sider width="250" theme="light" style="border-right: 1px solid #f0f0f0;">
        <div class="sider-header">我的生生</div>
        <div v-if="avatars.length === 0" class="no-avatars">
          <p>还没有生生</p>
          <a-button type="primary" size="small" @click="router.push('/create')">去创造</a-button>
        </div>
        <a-menu v-else mode="inline" :selectedKeys="currentAvatar ? [currentAvatar.id] : []">
          <a-menu-item v-for="avatar in avatars" :key="avatar.id" @click="selectAvatar(avatar.id)">
            <template #icon>
              <a-avatar :src="avatar.avatarUrl" size="small" />
            </template>
            <span>{{ avatar.name }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-header style="background: #fff; padding: 0 24px; border-bottom: 1px solid #f0f0f0;">
          <div v-if="currentAvatar" class="chat-header">
            <a-avatar :src="currentAvatar.avatarUrl" />
            <span class="avatar-name">{{ currentAvatar.name }}</span>
            <span class="avatar-tags">
              <a-tag v-for="tag in currentAvatar.personalities" :key="tag">{{ tag }}</a-tag>
            </span>
          </div>
          <div v-else class="chat-header">
            请选择一个生生开始对话
          </div>
        </a-layout-header>

        <a-layout-content style="padding: 24px; display: flex; flex-direction: column; overflow: hidden;">
          <div v-if="!currentAvatar" class="empty-state">
            <RobotOutlined style="font-size: 48px; color: #ccc;" />
            <p>选择左侧的生生开始对话</p>
          </div>
          
          <template v-else>
            <div class="messages" ref="messagesContainer">
              <div
                v-for="msg in messages"
                :key="msg.id"
                class="message-wrapper"
                :class="{ 'is-user': msg.isUser }"
              >
                <div class="message-content">
                  <div class="message-bubble">{{ msg.text }}</div>
                  <div class="message-time">{{ msg.time }}</div>
                </div>
                <a-avatar
                  class="message-avatar"
                  :src="msg.isUser ? undefined : currentAvatar.avatarUrl"
                  :icon="msg.isUser ? h(UserOutlined) : undefined"
                  style="background-color: #87d068;"
                >
                  <template v-if="msg.isUser"><UserOutlined /></template>
                </a-avatar>
              </div>
            </div>

            <div class="input-area">
              <a-textarea
                v-model:value="inputValue"
                placeholder="输入消息..."
                :auto-size="{ minRows: 2, maxRows: 4 }"
                @pressEnter.prevent="sendMessage"
              />
              <a-button type="primary" shape="circle" :icon="h(SendOutlined)" class="send-btn" @click="sendMessage" />
            </div>
          </template>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped>
.chat-view {
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}
.sider-header {
  padding: 16px;
  font-weight: bold;
  border-bottom: 1px solid #f0f0f0;
}
.no-avatars {
  padding: 24px;
  text-align: center;
  color: #999;
}
.chat-header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.avatar-name {
  font-weight: bold;
  font-size: 16px;
}
.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999;
}
.messages {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 16px;
}
.message-wrapper {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 12px;
}
.message-wrapper.is-user {
  flex-direction: row-reverse;
}
.message-content {
  max-width: 70%;
  display: flex;
  flex-direction: column;
}
.message-wrapper.is-user .message-content {
  align-items: flex-end;
}
.message-bubble {
  background-color: #f0f2f5;
  padding: 8px 12px;
  border-radius: 8px;
  word-break: break-word;
}
.message-wrapper.is-user .message-bubble {
  background-color: #1890ff;
  color: white;
}
.message-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}
.input-area {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  align-items: flex-end;
}
.send-btn {
  margin-bottom: 4px;
}
</style>
