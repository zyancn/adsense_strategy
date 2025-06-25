import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Clock, Target, TrendingUp, User } from 'lucide-react'
import AdBanner from '../components/AdBanner'

const Tutorials: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: '全部教程' },
    { id: 'beginner', name: '新手入门' },
    { id: 'cardio', name: '有氧运动' },
    { id: 'strength', name: '力量训练' },
    { id: 'flexibility', name: '柔韧拉伸' },
    { id: 'hiit', name: 'HIIT训练' }
  ]

  const tutorials = [
    {
      id: 1,
      title: '零基础徒手健身完整教程',
      description: '从基础动作开始，逐步建立正确的健身习惯。包含热身、训练和放松的完整流程，适合完全没有健身经验的初学者。',
      image: '/images/bodyweight.jpg',
      category: 'beginner',
      duration: '45分钟',
      difficulty: '初级',
      author: '张教练',
      views: '12.5k',
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
    },
    {
      id: 2,
      title: '30分钟HIIT燃脂训练',
      description: '高强度间歇训练，快速燃烧脂肪。结合有氧和无氧运动，最大化卡路里消耗，适合有一定健身基础的人群。',
      image: '/images/cardio.jpg',
      category: 'hiit',
      duration: '30分钟',
      difficulty: '中级',
      author: '李教练',
      views: '8.9k',
      content: `
## HIIT训练原理

高强度间歇训练（HIIT）是一种结合高强度和低强度运动的训练方式。这种训练方法的核心在于：

### 训练特点
- **高效燃脂**：短时间内最大化卡路里消耗
- **后燃效应**：训练后12-24小时内持续燃脂
- **心肺强化**：快速提升心肺功能
- **时间节省**：30分钟相当于60分钟传统有氧

### 训练结构
**工作时间 vs 休息时间**
- 初学者：1:2（工作20秒，休息40秒）
- 中级者：1:1（工作30秒，休息30秒）
- 高级者：2:1（工作40秒，休息20秒）

## 训练前准备

### 热身运动（5分钟）

**1. 关节活动（2分钟）**
- 颈部转动：左右各10次
- 肩部绕环：前后各10次
- 腰部扭转：左右各10次
- 膝盖绕圈：左右各10次
- 脚踝转动：左右各10次

**2. 动态热身（3分钟）**
- 原地踏步：30秒，逐渐加快节奏
- 开合跳：20次，动作轻松
- 高抬腿：30秒，膝盖尽量抬高
- 踢臀跑：30秒，脚跟碰臀部
- 侧滑步：左右各10次

## 主要训练内容

### 第一轮：上肢爆发力训练（8分钟）

**动作1：爆发性俯卧撑（30秒工作，30秒休息）**
- 下降动作控制，推起时爆发力量
- 可以在推起时拍手（进阶版）
- 保持核心紧张

**动作2：平板支撑跳跃（30秒工作，30秒休息）**
- 平板支撑姿势开始
- 双脚同时向前跳跃靠近手部
- 再跳跃回到起始位置

**动作3：波比跳（30秒工作，30秒休息）**
- 站立开始，快速下蹲手撑地
- 跳跃成平板支撑
- 跳跃收腿回蹲姿
- 向上跳跃，双手举过头顶

**动作4：登山者（30秒工作，30秒休息）**
- 平板支撑姿势
- 快速交替将膝盖拉向胸部
- 保持上身稳定

*每个动作重复2组，组间休息1分钟*

### 第二轮：下肢爆发力训练（8分钟）

**动作1：跳跃深蹲（30秒工作，30秒休息）**
- 标准深蹲姿势
- 蹲到最低点时爆发性跳起
- 落地时缓冲，立即下蹲

**动作2：侧向跳跃（30秒工作，30秒休息）**
- 半蹲姿势
- 向左跳跃，左脚着地，右脚离地
- 向右跳跃，右脚着地，左脚离地
- 保持重心低，动作连贯

**动作3：箭步蹲跳（30秒工作，30秒休息）**
- 箭步蹲姿势开始
- 爆发性跳跃，空中换腿
- 落地即另一腿在前的箭步蹲

**动作4：单腿跳跃（每腿15秒工作，30秒休息）**
- 单腿站立，另一腿抬起
- 单腿连续小跳跃
- 保持平衡，核心发力

*每个动作重复2组，组间休息1分钟*

### 第三轮：全身综合训练（8分钟）

**动作1：开合跳（30秒工作，30秒休息）**
- 快速开合跳跃
- 手臂同时上下摆动
- 保持节奏，呼吸顺畅

**动作2：熊爬（30秒工作，30秒休息）**
- 四肢着地，膝盖离地
- 同时移动对侧手脚
- 保持背部平直

**动作3：星形跳跃（30秒工作，30秒休息）**
- 站立开始，手脚并拢
- 跳跃时四肢向外展开成大字
- 落地时回到起始位置

**动作4：俄式转体跳（30秒工作，30秒休息）**
- 半蹲姿势，双手抱胸
- 跳跃时身体转向一侧
- 落地后立即跳转向另一侧

*每个动作重复2组，组间休息1分钟*

## 训练后恢复

### 缓解运动（3分钟）

**1. 慢走（1分钟）**
- 原地慢走或小范围移动
- 让心率逐渐下降
- 深呼吸放松

**2. 深呼吸（1分钟）**
- 4秒吸气，6秒呼气
- 腹式呼吸，手放腹部
- 感受腹部起伏

**3. 轻度伸展（1分钟）**
- 手臂过头伸展
- 侧弯拉伸腰部
- 简单的腿部摆动

### 全面拉伸（5分钟）

**上肢拉伸（2分钟）**
- 胸部拉伸：30秒
- 肩膀拉伸：每侧30秒
- 三头肌拉伸：每侧15秒

**下肢拉伸（2分钟）**
- 大腿前侧：每腿30秒
- 大腿后侧：每腿30秒
- 小腿拉伸：每腿30秒

**核心拉伸（1分钟）**
- 眼镜蛇式：30秒
- 婴儿式：30秒

## 训练计划安排

### 初学者计划（第1-2周）
- **频率**：每周2-3次
- **强度**：工作20秒，休息40秒
- **目标**：适应高强度训练

### 中级计划（第3-6周）
- **频率**：每周3-4次
- **强度**：工作30秒，休息30秒
- **目标**：提升心肺功能

### 高级计划（第7周以上）
- **频率**：每周4-5次
- **强度**：工作40秒，休息20秒
- **目标**：最大化燃脂效果

## 营养补充建议

### 训练前（30-60分钟）
- 少量碳水化合物：香蕉、燕麦
- 充足水分：300-500ml水
- 避免：大量食物、高脂肪食物

### 训练中
- 小口补水：每10-15分钟少量饮水
- 避免大量饮水影响运动

### 训练后（30分钟内）
- 蛋白质补充：蛋白粉、鸡蛋、牛奶
- 碳水化合物：全麦面包、水果
- 补充水分：训练中失水量的150%

## 安全注意事项

### 训练前评估
- 是否有心血管疾病
- 关节是否有伤病
- 当日身体状况如何

### 训练中监测
- 心率不应超过最大心率的90%
- （220-年龄）× 0.9
- 如有胸闷、头晕立即停止

### 常见错误避免
- 不要憋气，保持呼吸顺畅
- 动作质量优于速度
- 适当休息，不要勉强

### 何时停止训练
- 出现胸痛或呼吸困难
- 关节疼痛或不适
- 过度疲劳或头晕

通过规律的HIIT训练，您将在2-4周内感受到体能的显著提升。坚持8-12周，您将看到体脂率的明显下降和肌肉线条的改善。记住，安全第一，循序渐进是成功的关键。
        `
    },
    {
      id: 3,
      title: '全身拉伸与柔韧性训练',
      description: '专业的拉伸指导，改善身体柔韧性，缓解肌肉紧张。适合运动前后拉伸，以及日常身体保养。',
      image: '/images/home-workout.jpg',
      category: 'flexibility',
      duration: '25分钟',
      difficulty: '初级',
      author: '瑜伽导师王老师',
      views: '15.2k',
      content: `
## 拉伸的重要性

柔韧性训练是健身中经常被忽视但极其重要的一环。良好的柔韧性不仅能提升运动表现，还能预防伤病，改善生活质量。

### 拉伸的益处

**身体层面**
- **增加关节活动范围**：让身体动作更流畅自然
- **改善血液循环**：促进营养物质输送和废物排出
- **缓解肌肉紧张**：减少运动后的僵硬感
- **预防运动伤害**：柔软的肌肉不易拉伤
- **改善姿态**：纠正长期不良姿势导致的肌肉不平衡

**心理层面**
- **减压放松**：拉伸时的深呼吸有助于放松心情
- **提升专注力**：关注身体感受，达到冥想效果
- **改善睡眠**：睡前拉伸有助于身心放松

### 拉伸的类型

**静态拉伸**
- 将肌肉拉长到舒适位置并保持
- 适合训练后和日常保养
- 保持时间：15-30秒

**动态拉伸**
- 通过控制性的动作增加关节活动度
- 适合训练前热身
- 重复次数：10-15次

**PNF拉伸**
- 结合收缩和放松的高级拉伸技术
- 效果显著但需要专业指导
- 适合有经验的练习者

## 拉伸前准备

### 环境准备
- 选择安静、温暖的环境
- 准备瑜伽垫或毛巾
- 穿着宽松、舒适的服装
- 准备舒缓的背景音乐（可选）

### 注意事项
- 不要在肌肉完全冷却时进行深度拉伸
- 轻微活动身体，让体温稍微上升
- 保持自然呼吸，不要憋气
- 拉伸应该感到舒适的张力，不应疼痛

## 颈部与肩膀拉伸（5分钟）

### 颈部拉伸序列

**1. 颈部侧屈拉伸（每侧30秒）**
- 坐直或站立，双肩放松
- 头部缓慢向右侧倾斜
- 右手可轻放在头部左侧辅助
- 感受左侧颈部的拉伸
- 换侧重复

**动作要点：**
- 保持双肩水平，不要耸肩
- 动作缓慢，避免快速转动
- 呼吸自然，不要憋气

**2. 颈部后屈拉伸（30秒）**
- 双手交叉放于脑后
- 轻轻向下施力，下巴靠近胸部
- 感受颈部后侧的拉伸

**3. 颈部旋转（每方向5次）**
- 头部画小圆圈
- 顺时针和逆时针各5次
- 动作要慢，幅度适中

### 肩膀拉伸序列

**1. 肩膀后拉（30秒）**
- 双手在身后交握
- 手臂向后上方抬起
- 挺胸，感受胸部和肩前侧拉伸

**2. 单臂横拉（每侧30秒）**
- 右臂横过胸前
- 左手抱住右臂，轻轻拉向身体
- 感受右肩外侧和后侧拉伸

**3. 肩膀绕环（前后各10次）**
- 双臂自然下垂
- 肩膀做大幅度圆周运动
- 前10次，后10次

## 上肢拉伸（5分钟）

### 手臂拉伸序列

**1. 三头肌拉伸（每侧30秒）**
- 右臂举过头顶，肘部弯曲
- 左手握住右肘，轻轻向左拉
- 感受右臂后侧三头肌拉伸
- 保持上身直立

**2. 二头肌拉伸（每侧30秒）**
- 右臂向后伸直，贴墙或门框
- 身体缓慢向前，感受手臂前侧拉伸
- 注意保持手臂伸直

**3. 前臂拉伸（每侧30秒）**
- 右臂向前伸直，掌心向上
- 左手握住右手手指，轻轻向身体拉
- 感受前臂内侧拉伸
- 然后掌心向下重复

### 胸部拉伸

**1. 门框胸部拉伸（30秒）**
- 面对门框站立
- 双手扶住门框两侧
- 身体缓慢向前，感受胸部拉伸

**2. 背后拉手（30秒）**
- 一手从上方，一手从下方
- 尝试在背后握手
- 如果够不到，可用毛巾辅助

## 躯干拉伸（6分钟）

### 脊柱拉伸序列

**1. 猫牛式（1分钟）**
- 四肢着地，手腕在肩膀下方
- 吸气时，腹部下沉，头部抬起（牛式）
- 呼气时，拱背向上，头部下垂（猫式）
- 缓慢连续10-15次

**2. 脊柱扭转（每侧45秒）**
- 坐姿，右腿伸直，左腿弯曲跨过右腿
- 右手扶住左膝，身体向左扭转
- 左手在身后支撑
- 保持脊柱挺直，加深扭转

**3. 侧弯拉伸（每侧45秒）**
- 站立，双脚与肩同宽
- 右手举过头顶，身体向左侧弯
- 感受右侧腰部拉伸
- 左手可叉腰或顺着腿部下滑

### 背部拉伸

**1. 婴儿式（1分钟）**
- 跪坐，大脚趾相触，膝盖分开
- 上身前趴，手臂向前伸展
- 额头贴地，放松整个背部

**2. 膝抱胸式（30秒）**
- 仰卧，双膝抱于胸前
- 轻轻左右摇摆
- 感受下背部放松

### 腹部拉伸

**1. 眼镜蛇式（45秒）**
- 俯卧，手掌在肩膀下方
- 缓慢撑起上身，保持骨盆贴地
- 感受腹部前侧拉伸

**2. 驼式（30秒）**
- 跪立，手扶腰部
- 缓慢后仰，有能力者可触碰脚跟
- 初学者保持手扶腰部即可

## 下肢拉伸（8分钟）

### 臀部拉伸序列

**1. 坐姿臀部拉伸（每侧1分钟）**
- 坐位，右腿弯曲，脚踝放在左膝上
- 双手抱住左大腿，轻轻拉向胸部
- 感受右侧臀部深度拉伸

**2. 鸽子式变体（每侧1分钟）**
- 右腿弯曲在前，左腿向后伸直
- 上身前倾，双手支撑
- 感受右侧臀部和髋关节拉伸

### 大腿拉伸序列

**1. 大腿前侧拉伸（每侧45秒）**
- 站立，右脚向后弯曲
- 右手抓住脚踝，拉向臀部
- 左手可扶墙保持平衡
- 感受大腿前侧股四头肌拉伸

**2. 大腿后侧拉伸（每侧45秒）**
- 坐位，右腿伸直，左腿弯曲
- 上身前倾，手尽量触碰脚尖
- 感受右腿后侧腘绳肌拉伸

**3. 大腿内侧拉伸（1分钟）**
- 坐位，双脚掌相对，双手抱脚
- 轻轻将膝盖向地面压
- 上身可缓慢前倾加深拉伸

### 小腿拉伸序列

**1. 小腿拉伸（每腿45秒）**
- 面墙站立，右脚在后
- 右腿伸直，脚跟着地
- 身体前倾，感受小腿后侧拉伸

**2. 比目鱼肌拉伸（每腿30秒）**
- 同上姿势，但后腿略微弯曲
- 重心下沉，感受小腿深层肌肉拉伸

## 全身整合拉伸（1分钟）

### 结束动作

**1. 全身伸展（30秒）**
- 仰卧，四肢向四个方向伸展
- 深呼吸，感受全身的放松
- 手臂过头，腿部伸直

**2. 放松冥想（30秒）**
- 保持仰卧，四肢自然放置
- 闭眼，专注于呼吸
- 感受身体的轻松和舒适

## 拉伸训练计划

### 日常保养计划
- **频率**：每天15-20分钟
- **重点**：问题区域重点拉伸
- **时间**：睡前或起床后

### 运动配合计划
- **训练前**：5-10分钟动态拉伸
- **训练后**：15-20分钟静态拉伸
- **休息日**：30分钟全面拉伸

### 柔韧性提升计划
- **频率**：每周4-6次
- **时长**：30-45分钟
- **目标**：系统性提升全身柔韧性

## 进阶技巧

### 呼吸配合
- **拉伸时**：缓慢深呼吸，每次呼气时略微加深拉伸
- **节奏**：4秒吸气，6秒呼气
- **专注**：将注意力集中在呼吸和身体感受上

### 温度控制
- **热身**：轻微活动提升体温
- **环境**：选择温暖的环境
- **热毛巾**：可用热毛巾敷在紧张的肌肉上

### 渐进原则
- **第1-2周**：适应各种拉伸动作
- **第3-4周**：增加保持时间
- **第5周以上**：增加动作难度

通过坚持规律的拉伸训练，您将在2-4周内感受到身体柔韧性的显著改善。长期坚持不仅能让身体更加灵活，还能有效预防运动伤害，提升整体生活质量。记住，拉伸是一个渐进的过程，切忌急躁，享受这个让身心放松的美好时光。
        `
    },
    {
      id: 4,
      title: '核心力量强化训练',
      description: '专注核心肌群的全面训练，包括腹肌、背肌和深层稳定肌群。打造强健的核心，改善体态和运动表现。',
      image: '/images/strength.jpg',
      category: 'strength',
      duration: '35分钟',
      difficulty: '中级',
      author: '力量训练专家赵教练',
      views: '9.8k'
    }
  ]

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '初级': return 'bg-green-100 text-green-600'
      case '中级': return 'bg-yellow-100 text-yellow-600'
      case '高级': return 'bg-red-100 text-red-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">健身教程</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          专业的健身指导，从零基础到进阶训练，帮助您科学有效地达成健身目标
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索教程..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[150px]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner size="728x90" position="content" />

      {/* Tutorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredTutorials.map((tutorial) => (
          <div key={tutorial.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${getDifficultyColor(tutorial.difficulty)}`}>
                  {tutorial.difficulty}
                </span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {categories.find(c => c.id === tutorial.category)?.name}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                {tutorial.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {tutorial.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{tutorial.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>{tutorial.views} 观看</span>
                  </div>
                </div>
              </div>

              <Link
                to={`/article/${tutorial.id}`}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>开始学习</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">未找到相关教程</h3>
          <p className="text-gray-600">请尝试调整搜索条件或浏览其他分类</p>
        </div>
      )}

      {/* Bottom Ad */}
      <AdBanner size="336x280" position="footer" />
    </div>
  )
}

export default Tutorials
