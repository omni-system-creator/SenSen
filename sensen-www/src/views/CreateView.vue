<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAvatarStore } from '../stores/avatar';
import { UserOutlined, SmileOutlined, SoundOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';

const router = useRouter();
const avatarStore = useAvatarStore();

const current = ref(0);
const formState = reactive({
  name: '',
  description: '',
  personalities: [] as string[],
  skills: [] as string[],
  voice: 'warm',
  avatarUrl: 'https://joeschmoe.io/api/v1/random',
});

const steps = [
  {
    title: '基础设定',
    icon: UserOutlined,
  },
  {
    title: '性格特质',
    icon: SmileOutlined,
  },
  {
    title: '形象与声音',
    icon: SoundOutlined,
  },
];

const personalityOptions = [
  { value: 'warm', label: '温暖' },
  { value: 'professional', label: '专业' },
  { value: 'humorous', label: '幽默' },
  { value: 'rational', label: '理性' },
  { value: 'emotional', label: '感性' },
  { value: 'strict', label: '严谨' },
  { value: 'free', label: '自由' },
];

const skillOptions = [
  { value: 'writing', label: '写作' },
  { value: 'coding', label: '编程' },
  { value: 'listening', label: '倾听' },
  { value: 'planning', label: '规划' },
  { value: 'chatting', label: '闲聊' },
];

const next = () => {
  if (current.value === 0 && !formState.name) {
    message.error('请输入生生的名字');
    return;
  }
  current.value++;
};

const prev = () => {
  current.value--;
};

const finish = () => {
  const newAvatar = avatarStore.addAvatar({
    name: formState.name,
    description: formState.description,
    personalities: formState.personalities,
    skills: formState.skills,
    voice: formState.voice,
    avatarUrl: formState.avatarUrl,
  });
  avatarStore.selectAvatar(newAvatar.id);
  message.success('生生创造成功！');
  router.push('/chat');
};
</script>

<template>
  <div class="create-view">
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title">
        <template #icon>
          <component :is="item.icon" />
        </template>
      </a-step>
    </a-steps>

    <div class="steps-content">
      <a-form layout="vertical" v-if="current === 0">
        <a-form-item label="生生名字" required>
          <a-input v-model:value="formState.name" placeholder="给TA起个名字，如：灵犀、小二" />
        </a-form-item>
        <a-form-item label="生生描述">
          <a-textarea v-model:value="formState.description" placeholder="简单描述一下TA是一个怎样的存在..." :rows="4" />
        </a-form-item>
      </a-form>

      <a-form layout="vertical" v-if="current === 1">
        <a-form-item label="性格标签">
          <a-select
            v-model:value="formState.personalities"
            mode="multiple"
            style="width: 100%"
            placeholder="选择性格标签"
            :options="personalityOptions"
          />
        </a-form-item>
        <a-form-item label="擅长技能">
          <a-select
            v-model:value="formState.skills"
            mode="multiple"
            style="width: 100%"
            placeholder="选择擅长技能"
            :options="skillOptions"
          />
        </a-form-item>
      </a-form>

      <a-form layout="vertical" v-if="current === 2">
        <a-form-item label="选择声音">
          <a-radio-group v-model:value="formState.voice">
            <a-radio-button value="warm">温暖治愈</a-radio-button>
            <a-radio-button value="professional">专业干练</a-radio-button>
            <a-radio-button value="cute">活泼可爱</a-radio-button>
            <a-radio-button value="deep">低沉磁性</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="生成头像">
          <div style="text-align: center;">
            <a-avatar :size="100" :src="formState.avatarUrl" />
            <div style="margin-top: 16px;">
              <a-button @click="formState.avatarUrl = `https://joeschmoe.io/api/v1/${Math.random()}`">
                随机生成头像
              </a-button>
            </div>
          </div>
        </a-form-item>
      </a-form>
    </div>

    <div class="steps-action">
      <a-button v-if="current > 0" style="margin-right: 8px" @click="prev">上一步</a-button>
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">下一步</a-button>
      <a-button v-if="current === steps.length - 1" type="primary" @click="finish">
        完成创造
      </a-button>
    </div>
  </div>
</template>

<style scoped>
.create-view {
  max-width: 800px;
  margin: 0 auto;
}
.steps-content {
  margin-top: 40px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 300px;
  padding: 40px;
}
.steps-action {
  margin-top: 24px;
  text-align: center;
}
</style>
