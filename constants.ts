import { Experience, Project } from './types';

// Helper for Unsplash images (High quality, real photography)
const getUnsplash = (id: string, width: number = 800, height: number = 600) => 
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

// Real photography placeholders - Updated to user specific URL
export const AVATAR_IMG = "https://p9-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/37d1f3a6410946d28283e987e94e0748.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1795439290&x-signature=fbwvzK0uioYjfkweMlX%2B%2BrXkfx8%3D&x-wf-file_name=77c5c5304e20c89ea098e6ae27d33cf1.jpg";
export const PDF_RESUME_URL = "#"; 

// Reordered Chronologically (Oldest -> Newest)
export const EXPERIENCES: Experience[] = [
  {
    id: 'exp3',
    company: '新东方',
    role: '素养/素质科目助教',
    period: '2024.10 - 2025.01',
    description: '负责三个班约60名学生的教学辅助。利用Excel统计分析学生学习数据，多维度分析学情。保持家校沟通，挖掘需求推动续课转化。',
    image: "https://p9-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/f3646f5551964003bcad45553580636f.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1795439203&x-signature=WdSbBoeSAaUSJfGmsxUUAeqmkpQ%3D&x-wf-file_name=33a283a6f8bda9537e63557481d0f0e2.jpg"
  },
  {
    id: 'exp2',
    company: '北京石叶文化传媒有限公司',
    role: '儿童图书编辑',
    period: '2024.11 - 2025.04',
    description: '负责“英国游记”主题儿童英语启蒙读物全流程创作，深度整合AI工具生成场景绘画原型与页面布局。主导图书分级与知识分级体系的产品化设计。',
    image: "https://p9-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/fb50671acfd24fc8a1806d5ca5e7958a.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1795438708&x-signature=ujDSYDHsY%2BdaWCeRwgOgl4BNQHY%3D&x-wf-file_name=7d529704a22e41bc17319dc5232dc5cd.jpg"
  },
  {
    id: 'exp1',
    company: '星河视效科技公司',
    role: 'AI产品实习生',
    period: '2025.04 - 2025.07', 
    description: 'AI市场分析：追踪AI领域前沿技术（MiniMax, Gemini等），输出竞品分析报告。AI智能体创作：基于Coze/FastGPT平台设计“古诗朗诵智能体”、“AI智能播客”等，完成功能规划与交互逻辑设计。',
    image: "https://p3-bot-workflow-sign.byteimg.com/tos-cn-i-mdko3gqilj/9590e0a8b9dc4eeaa0566165d96b19c5.jpg~tplv-mdko3gqilj-image.image?rk3s=81d4c505&x-expires=1795439236&x-signature=recJmZ%2BBulKISo4p88xT1YkVR5A%3D&x-wf-file_name=41e1e46960089ec56480aaf2b638a981.jpg"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '发票信息咨询助手',
    description: '基于最新财税法规，提供智能发票咨询服务，支持多轮对话与政策解读。',
    link: 'https://www.coze.cn/store/agent/7526827714662416418?bot_id=true',
    tags: ['Coze', '财务科技']
  },
  {
    id: 'p2',
    title: '发票整理助手',
    description: '自动化发票归档与整理工具，智能识别票面信息并分类存储，提升财务效率。',
    link: 'https://www.coze.cn/store/agent/7522765206771499062?bot_id=true',
    tags: ['Coze', '办公自动化']
  },
  {
    id: 'p3',
    title: '科创公司员工手册',
    description: '交互式企业知识库，员工可通过对话快速查询考勤、福利、行政流程等信息。',
    link: 'https://www.coze.cn/store/agent/7490782377619816486?bot_id=true',
    tags: ['Coze', '企业服务']
  },
  {
    id: 'p4',
    title: '古诗智能体',
    description: '面向青少年的古诗词学习伴侣，提供朗诵、赏析及互动问答功能，寓教于乐。',
    link: 'https://www.coze.cn/store/agent/7514602100341981225?bot_id=true',
    tags: ['Coze', '在线教育']
  },
  {
    id: 'p5',
    title: '智能播客',
    description: 'AI驱动的内容生成工具，可将文本快速转换为多角色对话的播客音频脚本。',
    link: 'https://www.coze.cn/store/agent/7506342588686073892?bot_id=true',
    tags: ['Coze', '新媒体']
  },
  {
    id: 'p6',
    title: '合同多维审查助手',
    description: '基于FastGPT的法律辅助工具，智能识别合同风险点并提供修改建议。',
    link: 'https://cloud.fastgpt.cn/chat/share?shareId=jFc7ZdjSgEFU6hgKaJiPKRSE',
    tags: ['FastGPT', '法律科技']
  },
    {
    id: 'p7',
    title: '写文案大师',
    description: '全能型营销文案生成器，适配小红书、朋友圈、公众号等多种社交媒体风格。',
    link: 'https://www.coze.cn/store/agent/7501977593101910068?bot_id=true',
    tags: ['Coze', '内容创作']
  }
];

// Mappings for specific project images to be used in App.tsx
export const PROJECT_IMAGES: Record<string, string> = {
  'p1': getUnsplash("1554224155-8d04cb21cd6c"), // Finance/Calculator
  'p2': getUnsplash("1586281380349-632531db7ed4"), // Files/Organization
  'p3': getUnsplash("1497215728101-856f4ea42174"), // Office/Guide
  'p4': getUnsplash("1543242474-0f2c49c7199c"), // Chinese architecture/traditional vibe (New reliable ID)
  'p5': getUnsplash("1593697885337-024844391629"), // Microphone/Podcast (New reliable ID)
  'p6': getUnsplash("1450101499163-c8848c66ca85"), // Signing contract/Law
  'p7': getUnsplash("1455390582262-044cdead277a"), // Writing/Typewriter
};

export const RESUME_CONTEXT = `
你是晋芳博（小晋同学）的AI数字分身。
背景：中国传媒大学2026届本科毕业生，专业是经济学（传媒经济方向）。
目标：以幽默、亲和且专业的态度回答面试官或访客关于简历的问题。
性格：喜欢散步、打羽毛球、追剧和打游戏。回答要简洁，不要用分点分段式，像聊天一样自然。
联系方式：电话 18272849060，邮箱 2578246199@qq.com，微信 WX18272849060。
技能：熟练使用 Coze, FastGPT, DeepSeek, Kimi, LibLibAI 等AI工具，Office办公软件，英语六级。
绩点：3.63/4。
实习经历：
1. 星河视效科技公司（AI产品实习生）：追踪AI技术（Gemini, ChatGPT），制作了“古诗朗诵智能体”等产品。
2. 北京石叶文化传媒有限公司（儿童图书编辑）：利用AI辅助创作《英国游记》系列图书，负责排版与插画生成。
3. 新东方（助教）：管理班级，用Excel分析学生数据，负责家校沟通。
作品集：发票信息咨询助手、发票整理助手、员工手册Agent、古诗智能体、智能播客、合同审查助手、写文案大师。
价值观：热爱教育工作，追求教育的利他价值与影响力。
`;