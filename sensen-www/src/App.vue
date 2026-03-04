<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, ref } from 'vue';
import { HomeOutlined, PlusCircleOutlined, AppstoreOutlined, MessageOutlined, MenuOutlined } from '@ant-design/icons-vue';

const route = useRoute();
const selectedKeys = computed(() => [route.name as string]);
const drawerVisible = ref(false);

const showDrawer = () => {
  drawerVisible.value = true;
};

const onClose = () => {
  drawerVisible.value = false;
};
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#722ed1',
        borderRadius: 8,
      },
    }"
  >
    <a-layout class="layout">
      <a-layout-header class="header">
        <div class="header-content">
          <div class="logo">
            <img src="/logo.svg" alt="SenSen Logo" class="logo-img" />
            <span class="logo-text">生生 SenSen</span>
            <span class="logo-dot">.</span>
          </div>
          
          <!-- Desktop Menu -->
          <div class="desktop-menu">
            <a-menu
              theme="light"
              mode="horizontal"
              :style="{ lineHeight: '46px', borderBottom: 'none', flex: 1, justifyContent: 'flex-end', background: 'transparent' }"
              :selectedKeys="selectedKeys"
            >
              <a-menu-item key="home">
                <template #icon><HomeOutlined /></template>
                <router-link to="/">首页</router-link>
              </a-menu-item>
              <a-menu-item key="create">
                <template #icon><PlusCircleOutlined /></template>
                <router-link to="/create">创造生生</router-link>
              </a-menu-item>
              <a-menu-item key="dashboard">
                <template #icon><AppstoreOutlined /></template>
                <router-link to="/dashboard">生生管理</router-link>
              </a-menu-item>
              <a-menu-item key="chat">
                <template #icon><MessageOutlined /></template>
                <router-link to="/chat">与生生对话</router-link>
              </a-menu-item>
            </a-menu>
          </div>

          <!-- Mobile Menu Button -->
          <div class="mobile-menu-btn" @click="showDrawer">
            <MenuOutlined style="font-size: 24px; color: #722ed1;" />
          </div>

          <!-- Mobile Drawer -->
          <a-drawer
            placement="right"
            :closable="false"
            :open="drawerVisible"
            @close="onClose"
            width="250"
          >
            <div class="drawer-menu">
              <a-menu
                mode="vertical"
                :selectedKeys="selectedKeys"
                style="border: none;"
                @click="onClose"
              >
                <a-menu-item key="home">
                  <template #icon><HomeOutlined /></template>
                  <router-link to="/">首页</router-link>
                </a-menu-item>
                <a-menu-item key="create">
                  <template #icon><PlusCircleOutlined /></template>
                  <router-link to="/create">创造生生</router-link>
                </a-menu-item>
                <a-menu-item key="dashboard">
                  <template #icon><AppstoreOutlined /></template>
                  <router-link to="/dashboard">生生管理</router-link>
                </a-menu-item>
                <a-menu-item key="chat">
                  <template #icon><MessageOutlined /></template>
                  <router-link to="/chat">与生生对话</router-link>
                </a-menu-item>
              </a-menu>
            </div>
          </a-drawer>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div class="content-wrapper">
          <RouterView />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center; background: #f0f2f5;">
        SenSen ©2026 Created by SenSen | 让每个人拥有无数个自己
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  background: #f0f2f5;
}

.header {
  position: fixed;
  z-index: 1000;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 0;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 40px;
  cursor: pointer;
}

.desktop-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu-btn {
  display: none;
  cursor: pointer;
  padding: 8px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .header-content {
    justify-content: space-between;
  }
  
  .desktop-menu {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .logo {
    margin-right: 0;
  }
}

.logo-img {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}

.logo-text {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
}

.logo-dot {
  color: #722ed1;
  font-size: 32px;
  line-height: 1;
  margin-left: 2px;
}

.content-wrapper {
  margin-top: 64px;
  min-height: calc(100vh - 64px - 70px);
}

:deep(.ant-menu-horizontal) {
  border-bottom: none !important;
  background: transparent !important;
}

:deep(.ant-menu-item) {
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  margin: 0 4px !important;
  padding: 0 16px !important;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  top: 0 !important;
  height: 46px;
  line-height: 46px;
}

:deep(.ant-menu-item:hover) {
  color: #722ed1 !important;
  background-color: rgba(114, 46, 209, 0.08);
}

:deep(.ant-menu-item-selected) {
  color: #722ed1 !important;
  background-color: rgba(114, 46, 209, 0.12);
  font-weight: 600;
}

:deep(.ant-menu-item::after) {
  display: none !important;
}
</style>
