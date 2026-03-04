<script setup lang="ts">
import { useAvatarStore } from '../stores/avatar';
import { useRouter } from 'vue-router';
import { MessageOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';

const avatarStore = useAvatarStore();
const router = useRouter();

const goToChat = (id: string) => {
  avatarStore.selectAvatar(id);
  router.push('/chat');
};
</script>

<template>
  <div class="dashboard">
    <div class="header">
      <h2>我的生生管理</h2>
      <a-button type="primary" @click="$router.push('/create')">创造新生生</a-button>
    </div>

    <div v-if="avatarStore.avatars.length === 0" class="empty">
      <a-empty description="还没有创造任何生生" />
    </div>

    <a-row :gutter="[16, 16]" v-else>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="avatar in avatarStore.avatars" :key="avatar.id">
        <a-card hoverable class="avatar-card">
          <template #cover>
            <div class="avatar-cover">
              <a-avatar :size="80" :src="avatar.avatarUrl" />
            </div>
          </template>
          <template #actions>
            <MessageOutlined key="chat" @click="goToChat(avatar.id)" />
            <EditOutlined key="edit" />
            <EllipsisOutlined key="more" />
          </template>
          <a-card-meta :title="avatar.name" :description="avatar.description">
            <template #avatar>
              <!-- Small avatar if needed, but we have big one in cover -->
            </template>
          </a-card-meta>
          <div class="tags">
            <a-tag v-for="tag in avatar.personalities.slice(0, 3)" :key="tag" color="blue">{{ tag }}</a-tag>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.avatar-cover {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  background-color: #f0f2f5;
}
.tags {
  margin-top: 12px;
}
</style>
