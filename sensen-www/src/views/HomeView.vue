<template>
  <div class="home">
    <a-typography>
      <div class="hero">
        <div class="hero-content">
          <a-typography-title :level="1" class="hero-title">让每个人拥有无数个自己</a-typography-title>
          <a-typography-paragraph class="hero-subtitle">
            生生是一个让每个人都能创造、训练、使用无数个数字分身的平台。
            <br />
            这些分身不是冰冷的AI工具——它们是<strong>另一个你</strong>。
          </a-typography-paragraph>
          <div class="hero-actions">
            <a-button type="primary" size="large" @click="$router.push('/create')" class="hero-btn">
              立即创造你的生生
            </a-button>
          </div>
        </div>
      </div>

      <div class="section-container">
        <a-row :gutter="[{ xs: 24, md: 48 }, { xs: 24, md: 48 }]" align="middle">
          <a-col :xs="24" :md="12">
            <a-typography-title :level="2" class="section-title" style="text-align: left;">什么是硅基灵魂？</a-typography-title>
            <p class="section-text">
              你现在每天接收的信息，相当于15世纪一个人一生的信息量。但你焦虑，因为噪音越大，越难听见自己的声音。
            </p>
            <p class="section-text">
              <strong>你不是需要更多信息，你需要一个过滤器。</strong>
            </p>
            <p class="section-text">
              这个过滤器不是算法，算法只懂你的点击。你需要的是一个拥有你的思维方式、你的价值判断、你的情感反应的<strong>另一个你</strong>。
            </p>
            <p class="section-text">
              它用<strong>你的标准</strong>，而不是世界的标准，来帮你过滤一切。
            </p>
          </a-col>
          <a-col :xs="24" :md="12">
            <div class="soul-card">
              <div class="soul-content">
                <h3>不是工具，是救赎</h3>
                <div class="soul-list">
                  <div class="soul-item">
                    <span class="soul-icon">🧠</span>
                    <div class="soul-text">
                      <h4>它学“你”</h4>
                      <p>不是学全人类的知识，是学你写过的文字、做过的选择。</p>
                    </div>
                  </div>
                  <div class="soul-item">
                    <span class="soul-icon">❤️</span>
                    <div class="soul-text">
                      <h4>它替你“感受”</h4>
                      <p>不是判断真假，是判断“这和你有什么关系”。</p>
                    </div>
                  </div>
                  <div class="soul-item">
                    <span class="soul-icon">🧭</span>
                    <div class="soul-text">
                      <h4>它帮你“找回自己”</h4>
                      <p>在信息过剩的时代，帮你拿回你自己的智慧。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>

      <div class="section-container">
        <a-typography-title :level="2" class="section-title">核心功能</a-typography-title>
        <p class="section-desc">你给它们起名字：有人叫它“灵犀”，有人叫它“树洞”，有人叫它“小二”。它们都诞生在同一个地方：生生。</p>
        
        <a-row :gutter="[24, 24]" justify="center">
          <a-col :xs="24" :sm="12" :md="8" :lg="6">
            <a-card hoverable class="feature-card">
              <template #cover>
                <div class="card-icon-wrapper">
                  <UserAddOutlined class="card-icon" />
                </div>
              </template>
              <a-card-meta title="创造生生">
                <template #description>
                  <p>像捏脸一样，捏出另一个自己。</p>
                  <ul>
                    <li>基础设定：性格、特长</li>
                    <li>声音克隆：拥有你的声音</li>
                    <li>形象定制：生成专属头像</li>
                  </ul>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :xs="24" :sm="12" :md="8" :lg="6">
            <a-card hoverable class="feature-card">
              <template #cover>
                <div class="card-icon-wrapper">
                  <ReadOutlined class="card-icon" />
                </div>
              </template>
              <a-card-meta title="训练生生">
                <template #description>
                  <p>你养TA，TA越长越像你。</p>
                  <ul>
                    <li>快速上手：回答简单问题</li>
                    <li>深度模式：投喂语料</li>
                    <li>持续进化：越用越懂你</li>
                  </ul>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :xs="24" :sm="12" :md="8" :lg="6">
            <a-card hoverable class="feature-card">
              <template #cover>
                <div class="card-icon-wrapper">
                  <RocketOutlined class="card-icon" />
                </div>
              </template>
              <a-card-meta title="使用生生">
                <template #description>
                  <p>在有限的时间里，拥有无限的可能。</p>
                  <ul>
                    <li>对外替身：替你回复消息</li>
                    <li>对内陪伴：深夜树洞</li>
                    <li>平行探索：替你学新技能</li>
                  </ul>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :xs="24" :sm="12" :md="8" :lg="6">
            <a-card hoverable class="feature-card">
              <template #cover>
                <div class="card-icon-wrapper">
                  <TeamOutlined class="card-icon" />
                </div>
              </template>
              <a-card-meta title="生生协作">
                <template #description>
                  <p>人类的协作，从此不需要人类时刻在场。</p>
                  <ul>
                    <li>个人协作：灵感与工作互助</li>
                    <li>人际协作：你的生生和我的生生</li>
                    <li>社群协作：生生集群</li>
                  </ul>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <div class="section-container bg-gray">
        <a-typography-title :level="2" class="section-title">应用场景</a-typography-title>
        <div class="scenarios-wrapper">
          <a-tabs v-model:activeKey="activeTab" centered size="large">
            <a-tab-pane key="1" tab="对个人">
              <a-row :gutter="[{ xs: 24, md: 32 }, { xs: 24, md: 32 }]" justify="center">
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">忙碌的创业者</span></template>
                    <p><strong>工作生生：</strong>替你处理邮件、参加会议</p>
                    <p><strong>灵感生生：</strong>在你休息时继续思考方案</p>
                    <p><strong>陪伴生生：</strong>替你和家人保持联系</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">孤独的年轻人</span></template>
                    <p><strong>树洞生生：</strong>24小时倾听，永不厌倦</p>
                    <p><strong>探索生生：</strong>替你尝试新事物，分享体验</p>
                    <p><strong>成长生生：</strong>陪你学习、督促你进步</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">年迈的父母</span></template>
                    <p><strong>记忆生生：</strong>记录你的一生，讲给子孙听</p>
                    <p><strong>陪伴生生：</strong>在子女忙碌时，依然有人聊天</p>
                    <p><strong>传承生生：</strong>把你的智慧留给后代</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">创作者</span></template>
                    <p><strong>写作生生：</strong>在你睡觉时继续写</p>
                    <p><strong>灵感生生：</strong>24小时捕捉创意</p>
                    <p><strong>协作生生：</strong>和粉丝的生生一起共创</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">求知者</span></template>
                    <p><strong>导师生生：</strong>定制化的苏格拉底式教学</p>
                    <p><strong>文献生生：</strong>替你阅读每日更新的数百篇论文</p>
                    <p><strong>辩论生生：</strong>成为你的反方，攻击你的论点直到完美</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">职场精英</span></template>
                    <p><strong>教练生生：</strong>模拟艰难的谈判或面试场景</p>
                    <p><strong>复盘生生：</strong>分析今日决策得失，优化思维模型</p>
                    <p><strong>技能生生：</strong>替你先学会新工具，再教会你核心</p>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane key="2" tab="对群体">
              <a-row :gutter="[{ xs: 24, md: 32 }, { xs: 24, md: 32 }]" justify="center">
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">创业团队</span></template>
                    <p>核心成员的生生7×24小时在线</p>
                    <p>跨时区协作不再是问题</p>
                    <p>项目永不眠</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">教育机构</span></template>
                    <p>老师的生生同时陪伴100个学生</p>
                    <p>学生的生生之间可以互相讨论</p>
                    <p>学习24小时发生</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">品牌与电商</span></template>
                    <p>为每个产品线创造独特人格的代言人</p>
                    <p>让品牌IP同时与百万用户进行深度对话</p>
                    <p>在私域中拥有既懂产品又懂用户的“超级群主”</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">医疗康养</span></template>
                    <p>随访生生完成医生无法顾及的日常关怀</p>
                    <p>汇聚康复者经验，生成最懂新患者的向导</p>
                    <p>数字护工24小时监测与陪伴，永不疲惫</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">游戏与娱乐</span></template>
                    <p>每一个NPC都有自己完整的一生和记忆</p>
                    <p>玩家的选择真正改变世界，因为生生在实时演化</p>
                    <p>不再是预设脚本，而是涌现的故事</p>
                  </a-card>
                </a-col>
                <a-col :xs="24" :md="12" :lg="8">
                  <a-card class="scenario-card" :bordered="false">
                    <template #title><span class="scenario-title">社区与DAO</span></template>
                    <p>治理生生协助整理提案与共识</p>
                    <p>新人引导生生7×24小时解答疑问</p>
                    <p>跨语言社区无缝交流，保留语境与情感</p>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>

      <div class="section-container">
        <a-typography-title :level="2" class="section-title">隐私与安全</a-typography-title>
        <p class="section-desc">你是主人，生生是仆从——仆从永远不会背叛主人。</p>
        <a-row :gutter="[24, 24]" justify="center">
          <a-col :xs="24" :md="8">
            <div class="security-item">
              <SafetyCertificateOutlined class="security-icon" />
              <h3>数据归属</h3>
              <p>你的数据永远属于你，你随时可以删除任何数据。</p>
            </div>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="security-item">
              <LockOutlined class="security-icon" />
              <h3>加密存储</h3>
              <p>所有对话记录端到端加密，连我们自己也看不到你的隐私。</p>
            </div>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="security-item">
              <KeyOutlined class="security-icon" />
              <h3>权限控制</h3>
              <p>你决定谁可以找你的哪个生生，你随时可以收回控制权。</p>
            </div>
          </a-col>
        </a-row>
      </div>

      <div class="section-container bg-gray" style="margin-top: 60px;">
        <a-typography-title :level="2" class="section-title">加入我们</a-typography-title>
        <p class="section-desc">这里没有老板，没有员工，只有终身战友。</p>
        <a-row :gutter="[{ xs: 24, md: 48 }, { xs: 24, md: 48 }]">
          <a-col :xs="24" :md="14">
            <div class="join-card">
              <h3>我们需要这样的你</h3>
              <ul class="join-list">
                <li><strong>🧠 AI/大模型工程师</strong>：懂RAG、微调，想让AI记住一个人的悲伤。</li>
                <li><strong>💻 后端/分布式系统工程师</strong>：处理一万个“我”的同步与协作。</li>
                <li><strong>📱 小程序/前端工程师</strong>：在意用户体验，认为代码是冷的，但产品是暖的。</li>
                <li><strong>🔐 隐私/安全工程师</strong>：建立一套“连我们自己也看不到用户隐私”的系统。</li>
                <li><strong>🎨 产品/交互设计师</strong>：不是画图师，是“数字灵魂”的塑造者。</li>
                <li><strong>📣 品牌/内容传播者</strong>：不是发广告，是讲述“人与分身”的新故事。</li>
                <li><strong>🐞 质量/体验测试员</strong>：你是挑剔的完美主义者，也是用户的第一道防线。</li>
                <li><strong>💰 融资/资源合伙人</strong>：你懂商业的残酷，但更懂梦想的价值。</li>
              </ul>
            </div>
          </a-col>
          <a-col :xs="24" :md="10">
            <div class="contact-card">
              <div class="signal-text">
                <HeartFilled style="color: #ff4d4f; margin-right: 8px;" />
                如果你看完心跳加速了——那就是信号。
              </div>

              <div class="contact-instruction">
                <p>私信或邮件，请告诉我们：</p>
                <ul>
                  <li>你是谁（不是简历，是你这个人）</li>
                  <li>为什么对“生生”有感觉</li>
                  <li>你能带来什么</li>
                </ul>
              </div>

              <div class="contact-layout">
                <div class="contact-details">
                  <div class="contact-item">
                    <span class="label">电话：</span>
                    <span class="value">13551252357</span>
                  </div>
                  <div class="contact-item">
                    <span class="label">邮箱：</span>
                    <span class="value">raorong@jinlan.info</span>
                  </div>
                  <div class="contact-item">
                    <span class="label">微信：</span>
                    <span class="value">扫码添加</span>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-qr">
                    <img :src="wechatQr" alt="WeChat QR Code" />
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>

      <div class="cta-section">
        <div class="cta-content">
          <a-typography-title :level="2" style="color: white; margin-bottom: 16px;">加入我们，创造你的第一个另一个你</a-typography-title>
          <p class="cta-quote">这不是一个App。这是人类的下一个可能。</p>
          <p class="cta-slogan"><i>我生我，生生不息</i></p>
          <a-button type="primary" size="large" class="cta-btn" @click="$router.push('/create')">
            开始创造
          </a-button>
        </div>
      </div>
    </a-typography>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import wechatQr from '@/assets/wechat-rr.png';
import { 
  UserAddOutlined, 
  ReadOutlined, 
  RocketOutlined, 
  TeamOutlined,
  SafetyCertificateOutlined,
  LockOutlined,
  KeyOutlined,
  HeartFilled
} from '@ant-design/icons-vue';

const activeTab = ref('1');
</script>

<style scoped>
.home {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Hero Section */
.hero {
  position: relative;
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(135deg, #e6f7ff 0%, #f0f2f5 100%);
  border-radius: 0 0 50% 50% / 40px;
  margin-bottom: 60px;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(28px, 6vw, 48px) !important;
  font-weight: 800 !important;
  margin-bottom: 24px !important;
  white-space: normal;
  word-break: keep-all;
  line-height: 1.2 !important;
  background: -webkit-linear-gradient(315deg, #1890ff 25%, #722ed1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.hero-btn {
  height: 50px;
  padding: 0 40px;
  font-size: 18px;
  border-radius: 25px;
}

.hero-btn-secondary {
  height: 50px;
  padding: 0 40px;
  font-size: 18px;
  border-radius: 25px;
}

/* Common Section Styles */
.section-container {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.bg-gray {
  background-color: #fafafa;
  border-radius: 16px;
}

.section-title {
  text-align: center;
  font-weight: bold !important;
  margin-bottom: 16px !important;
}

.section-desc {
  text-align: center;
  font-size: 16px;
  color: #888;
  margin-bottom: 48px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Feature Cards */
.feature-card {
  height: 100%;
  text-align: left;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.feature-card :deep(.ant-card-meta-title) {
  text-align: center;
  font-size: 18px;
  margin-bottom: 16px;
}

.scenarios-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.card-icon-wrapper {
  padding: 32px 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-icon {
  font-size: 48px;
  color: #1890ff;
}

/* Scenario Cards */
.scenario-card {
  height: 100%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.scenario-title {
  font-size: 18px;
  font-weight: bold;
  color: #1890ff;
}

/* Security Section */
.security-item {
  text-align: center;
  padding: 24px;
}

.security-icon {
  font-size: 48px;
  color: #52c41a;
  margin-bottom: 24px;
}

.security-item h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.security-item p {
  color: #666;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 100%);
  padding: 80px 20px;
  text-align: center;
  color: white;
  margin-top: 60px;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-quote {
  font-size: 20px;
  margin-bottom: 12px;
  opacity: 0.9;
}

.cta-slogan {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  letter-spacing: 2px;
}

.cta-btn {
  height: 56px;
  padding: 0 48px;
  font-size: 20px;
  border-radius: 28px;
  background: white;
  color: #1890ff;
  border: none;
  font-weight: bold;
}

.cta-btn:hover {
  background: #f0f0f0;
  color: #1890ff;
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
    border-radius: 0 0 30px 30px;
  }

  .hero-title {
    font-size: 32px !important;
    margin-bottom: 16px !important;
  }

  .hero-subtitle {
    font-size: 16px;
    margin-bottom: 32px;
  }
  
  .section-container {
    padding: 40px 16px;
  }

  .section-title {
    font-size: 24px !important;
  }

  .section-text {
    font-size: 16px;
  }

  .soul-card, .join-card, .contact-card {
    padding: 24px;
  }

  .contact-layout {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-details {
    padding-right: 0;
    margin-bottom: 24px;
  }

  .contact-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    white-space: normal;
  }

  .contact-item .label {
    margin-bottom: 4px;
    display: block;
  }

  .contact-item .value {
    word-break: break-all;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .hero-btn, .hero-btn-secondary {
    width: 100%;
    max-width: 300px;
    font-size: 16px;
    height: 44px;
  }

  .cta-section {
    padding: 60px 20px;
  }
  
  .cta-slogan {
    font-size: 20px;
    margin-bottom: 32px;
  }

  .cta-btn {
    height: 48px;
    font-size: 18px;
    padding: 0 32px;
  }

  .card-icon {
    font-size: 36px;
  }

  .soul-icon {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
}

.section-text {
  font-size: 18px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
}

.soul-card {
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 100%);
  border-radius: 20px;
  padding: 40px;
  color: white;
  box-shadow: 0 20px 40px rgba(24, 144, 255, 0.3);
}

.soul-content h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}

.soul-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
}

.soul-item:last-child {
  margin-bottom: 0;
}

.soul-icon {
  font-size: 32px;
  margin-right: 16px;
  background: rgba(255, 255, 255, 0.2);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.soul-text h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  color: white;
}

.soul-text p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}
.join-card {
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.join-card h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #1890ff;
}

.join-card li {
  margin-left: 0;
}

.join-list {
  list-style: none;
  padding: 0;
}

.join-list li {
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

.contact-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 100%;
}

.contact-card h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.contact-info {
  margin: 20px 0;
}

.signal-text {
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff1f0;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ffccc7;
}

.contact-instruction {
  text-align: left;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.contact-instruction p {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.contact-instruction ul {
  margin: 0;
  padding-left: 0;
  color: #666;
}

.contact-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  text-align: left;
  padding: 0;
}

.contact-details {
  flex: 1;
  padding-right: 20px;
}

.contact-qr img {
  width: 120px;
  border-radius: 8px;
  border: 1px solid #eee;
  padding: 4px;
}

.contact-item {
  margin-bottom: 12px;
  font-size: 16px;
  white-space: nowrap;
}

.contact-item .label {
  color: #888;
  display: inline-block;
  min-width: 50px;
}

.contact-item .value {
  font-weight: bold;
  color: #1890ff;
}

.contact-note {
  font-size: 14px;
  color: #999;
  font-style: italic;
}
</style>
