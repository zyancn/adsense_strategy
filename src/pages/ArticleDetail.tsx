import React from 'react'
import { useParams } from 'react-router-dom'
import { Calendar, Clock, User, Share2, Bookmark, Eye } from 'lucide-react'
import AdBanner from '../components/AdBanner'

const ArticleDetail: React.FC = () => {
  const { id } = useParams()
  
  // Mock article data - in real app would fetch from API
  const article = {
    id: parseInt(id || '1'),
    title: '零基础徒手健身完整教程',
    subtitle: '从基础动作开始，逐步建立正确的健身习惯',
    author: '张教练',
    authorBio: '国家级健身教练，拥有10年专业健身指导经验',
    date: '2025-06-20',
    readTime: '12分钟阅读',
    views: '12.5k',
    image: '/images/bodyweight.jpg',
    category: '健身教程',
    tags: ['零基础', '徒手健身', '完整教程', '新手指南'],
    content: `
## 训练前准备

在开始任何健身训练前，充分的热身是必不可少的。热身可以：
- 提高体温，增加肌肉弹性
- 激活神经系统，提高反应速度
- 预防运动伤害
- 提高训练效果

### 热身动作（10分钟）

**1. 颈部伸展（2分钟）**
- 缓慢地左右转动头部，每个方向10次
- 上下点头运动，前后各10次
- 顺时针和逆时针绕圈，各5次

**2. 肩膀活动（2分钟）**
- 双臂前后绕圈，向前10次，向后10次
- 肩膀耸起放下，重复15次
- 双臂侧平举，做小幅度圆周运动

**3. 腰部热身（2分钟）**
- 双手叉腰，左右扭腰各10次
- 前屈后仰，动作缓慢控制
- 腰部画圆，顺逆时针各5次

**4. 腿部预热（2分钟）**
- 原地踏步，高抬腿30秒
- 踢臀跑，尽量让脚跟触碰臀部
- 侧步伐，左右各10步

**5. 全身激活（2分钟）**
- 开合跳，连续30秒
- 原地小跳，轻松跳跃30秒
- 手臂大幅摆动配合深呼吸

## 主要训练内容

### 第一部分：上肢力量训练（15分钟）

**1. 标准俯卧撑（3组 x 8-12次）**

俯卧撑是最经典的上肢训练动作，主要锻炼胸肌、肩膀和手臂力量。

**动作要领：**
- 双手撑地，距离略宽于肩膀
- 身体保持一条直线，从头到脚跟
- 下降时胸部几乎触地
- 推起时手臂完全伸直
- 呼吸：下降时吸气，推起时呼气

**常见错误：**
- 臀部过高或过低
- 头部过度抬起或低垂
- 手臂张开角度过大
- 动作幅度不够

**进阶变化：**
- 初学者：膝盖着地俯卧撑
- 进阶者：钻石俯卧撑、单手俯卧撑

**2. 平板支撑（3组 x 30-60秒）**

平板支撑是最有效的核心力量训练动作之一。

**动作要领：**
- 前臂着地，肘关节在肩膀正下方
- 身体保持一条直线
- 收紧腹部肌肉
- 自然呼吸，不要憋气

**注意事项：**
- 避免塌腰或拱背
- 不要耸肩
- 保持匀速呼吸

### 第二部分：下肢力量训练（15分钟）

**1. 深蹲（3组 x 12-15次）**

深蹲被誉为"动作之王"，能够全面锻炼下肢肌群。

**动作要领：**
- 双脚分开与肩同宽
- 脚尖略微外展
- 下蹲时臀部向后坐
- 膝盖不要内扣
- 大腿与地面平行
- 上身保持挺直

**呼吸方式：**
- 下蹲时吸气
- 站起时呼气

**2. 箭步蹲（每腿3组 x 10次）**

箭步蹲能够单独锻炼每条腿，改善力量不平衡。

**动作要领：**
- 向前迈出一大步
- 后腿膝盖几乎触地
- 前腿大腿与地面平行
- 上身保持直立
- 推回原位

### 第三部分：核心训练（10分钟）

**1. 卷腹（3组 x 15-20次）**
- 仰卧，膝盖弯曲
- 双手放于脑后
- 腹肌发力，抬起上身
- 下巴不要贴胸

**2. 侧平板支撑（每侧2组 x 20-30秒）**
- 侧卧，用前臂支撑身体
- 身体保持一条直线
- 另一只手可以叉腰或举起

## 训练后拉伸

拉伸是训练不可缺少的一部分，能够：
- 缓解肌肉紧张
- 促进血液循环
- 减少肌肉酸痛
- 提高柔韧性

### 全身拉伸流程（5分钟）

**1. 胸部拉伸**
- 双臂在身后交叉，向上抬起
- 感受胸部肌肉拉伸
- 保持15-20秒

**2. 肩膀拉伸**
- 一只手臂横过胸前
- 另一只手辅助拉伸
- 每侧15-20秒

**3. 腿部拉伸**
- 坐位体前屈，拉伸大腿后侧
- 单腿拉向胸部，拉伸臀部
- 站立拉伸大腿前侧

## 训练计划建议

### 初学者（第1-4周）
- 训练频率：每周3次
- 每次训练：30-40分钟
- 重点：掌握标准动作
- 强度：较低，以适应为主

### 进阶者（第5-8周）
- 训练频率：每周4-5次
- 每次训练：45-60分钟
- 重点：增加训练强度
- 可以增加训练组数和时间

### 注意事项

1. **循序渐进**
   - 不要急于求成
   - 逐渐增加训练强度
   - 听从身体的反馈

2. **保证休息**
   - 肌肉需要时间恢复
   - 保证充足睡眠
   - 避免连续高强度训练

3. **营养配合**
   - 训练前1-2小时适量进食
   - 训练后及时补充蛋白质
   - 保持充足水分摄入

4. **安全第一**
   - 动作标准比次数重要
   - 有不适立即停止
   - 必要时寻求专业指导

通过坚持这套完整的徒手健身教程，您将在4-8周内看到明显的身体变化。记住，健身是一个长期的过程，保持耐心和坚持是成功的关键。
    `
  }

  const relatedArticles = [
    {
      id: 2,
      title: '30分钟HIIT燃脂训练',
      image: '/images/cardio.jpg'
    },
    {
      id: 3,
      title: '全身拉伸与柔韧性训练',
      image: '/images/home-workout.jpg'
    },
    {
      id: 4,
      title: '核心力量强化训练',
      image: '/images/strength.jpg'
    }
  ]

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{line.slice(4)}</h3>
        }
        if (line.startsWith('**') && line.endsWith('**')) {
          return <h4 key={index} className="text-lg font-semibold text-gray-800 mt-4 mb-2">{line.slice(2, -2)}</h4>
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="text-gray-600 mb-1">{line.slice(2)}</li>
        }
        if (line.trim() === '') {
          return <br key={index} />
        }
        return <p key={index} className="text-gray-600 mb-3 leading-relaxed">{line}</p>
      })
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <span>首页</span> / <span>健身教程</span> / <span className="text-gray-800">{article.title}</span>
      </nav>

      {/* Article Header */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
              {article.category}
            </span>
            {article.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            {article.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>{article.views} 阅读</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Share2 className="h-4 w-4" />
              <span>分享</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Bookmark className="h-4 w-4" />
              <span>收藏</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="prose max-w-none">
              {formatContent(article.content)}
            </div>
          </div>

          {/* Content Ad */}
          <div className="my-8">
            <AdBanner size="728x90" position="content" />
          </div>

          {/* Author Info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">关于作者</h3>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-gray-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{article.author}</h4>
                <p className="text-gray-600 text-sm">{article.authorBio}</p>
              </div>
            </div>
          </div>

          {/* Native Ad */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-xs text-gray-500 mb-4 text-center">相关推荐</div>
            <div className="w-full h-[200px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-gray-400">原生广告单元</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Related Articles */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">相关文章</h3>
              <div className="space-y-4">
                {relatedArticles.map((relatedArticle) => (
                  <div key={relatedArticle.id} className="flex space-x-3">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm hover:text-blue-600 transition-colors cursor-pointer">
                        {relatedArticle.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Ad */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-xs text-gray-500 mb-2 text-center">赞助商广告</div>
              <div className="w-full h-[300px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400">AdSense 300x250</div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">目录</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#preparation" className="text-blue-600 hover:text-blue-700">训练前准备</a></li>
                <li><a href="#upper-body" className="text-blue-600 hover:text-blue-700">上肢力量训练</a></li>
                <li><a href="#lower-body" className="text-blue-600 hover:text-blue-700">下肢力量训练</a></li>
                <li><a href="#core" className="text-blue-600 hover:text-blue-700">核心训练</a></li>
                <li><a href="#stretching" className="text-blue-600 hover:text-blue-700">训练后拉伸</a></li>
                <li><a href="#plan" className="text-blue-600 hover:text-blue-700">训练计划建议</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ad */}
      <AdBanner size="336x280" position="footer" />
    </div>
  )
}

export default ArticleDetail
