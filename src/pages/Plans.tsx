import React, { useState } from 'react'
import { Calendar, Clock, Target, Users, Star, ArrowRight } from 'lucide-react'
import AdBanner from '../components/AdBanner'

const Plans: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const goals = [
    { id: 'all', name: '全部目标' },
    { id: 'weight-loss', name: '减脂塑形' },
    { id: 'muscle-gain', name: '增肌强化' },
    { id: 'endurance', name: '体能提升' },
    { id: 'flexibility', name: '柔韧性' },
    { id: 'general', name: '综合健身' }
  ]

  const levels = [
    { id: 'all', name: '全部水平' },
    { id: 'beginner', name: '初学者' },
    { id: 'intermediate', name: '中级' },
    { id: 'advanced', name: '高级' }
  ]

  const plans = [
    {
      id: 1,
      title: '4周减脂塑形计划',
      description: '科学的减脂方案，结合有氧运动和力量训练，帮助您在4周内看到明显的身体变化。',
      goal: 'weight-loss',
      level: 'beginner',
      duration: '4周',
      frequency: '每周5次',
      timePerSession: '45分钟',
      difficulty: '初级',
      image: '/images/cardio.jpg',
      rating: 4.8,
      participants: '2.3k',
      features: [
        '每日详细训练计划',
        '营养指导建议',
        '进度跟踪工具',
        '视频教学演示'
      ],
      weekPlan: {
        week1: {
          title: '第一周：基础适应',
          description: '建立运动习惯，学习基础动作',
          days: [
            { day: 1, focus: '全身有氧 + 基础力量', duration: '40分钟' },
            { day: 2, focus: '上肢力量训练', duration: '35分钟' },
            { day: 3, focus: '低强度有氧恢复', duration: '30分钟' },
            { day: 4, focus: '下肢力量训练', duration: '40分钟' },
            { day: 5, focus: '核心 + 柔韧性', duration: '30分钟' },
            { day: 6, focus: '休息或轻度活动', duration: '-' },
            { day: 7, focus: '休息', duration: '-' }
          ]
        },
        week2: {
          title: '第二周：强度提升',
          description: '增加训练强度，提高代谢水平',
          days: [
            { day: 1, focus: 'HIIT间歇训练', duration: '45分钟' },
            { day: 2, focus: '上肢 + 核心强化', duration: '40分钟' },
            { day: 3, focus: '中等强度有氧', duration: '35分钟' },
            { day: 4, focus: '下肢 + 臀部训练', duration: '45分钟' },
            { day: 5, focus: '全身循环训练', duration: '40分钟' },
            { day: 6, focus: '瑜伽拉伸', duration: '30分钟' },
            { day: 7, focus: '休息', duration: '-' }
          ]
        }
      }
    },
    {
      id: 2,
      title: '8周增肌强化计划',
      description: '系统的力量训练计划，专注于肌肉增长和力量提升，适合有一定基础的健身爱好者。',
      goal: 'muscle-gain',
      level: 'intermediate',
      duration: '8周',
      frequency: '每周4次',
      timePerSession: '60分钟',
      difficulty: '中级',
      image: '/images/strength.jpg',
      rating: 4.9,
      participants: '1.8k',
      features: [
        '渐进式超负荷',
        '分化训练方案',
        '营养补充指导',
        '力量测试评估'
      ]
    },
    {
      id: 3,
      title: '6周体能提升计划',
      description: '全面提升心肺功能、力量和爆发力。适合希望提高运动表现的人群。',
      goal: 'endurance',
      level: 'intermediate',
      duration: '6周',
      frequency: '每周5次',
      timePerSession: '50分钟',
      difficulty: '中级',
      image: '/images/cardio.jpg',
      rating: 4.7,
      participants: '1.5k',
      features: [
        '心肺功能测试',
        '间歇训练方案',
        '运动表现评估',
        '恢复监测指导'
      ]
    },
    {
      id: 4,
      title: '12周综合健身计划',
      description: '最全面的健身方案，涵盖力量、有氧、柔韧性各个方面，适合长期健身目标。',
      goal: 'general',
      level: 'beginner',
      duration: '12周',
      frequency: '每周4次',
      timePerSession: '55分钟',
      difficulty: '初级',
      image: '/images/family-fitness.jpeg',
      rating: 4.8,
      participants: '3.1k',
      features: [
        '阶段性目标设定',
        '多样化训练方式',
        '生活方式指导',
        '长期习惯养成'
      ]
    },
    {
      id: 5,
      title: '30天柔韧性提升',
      description: '专注于改善身体柔韧性和关节活动度，缓解现代生活带来的身体僵硬问题。',
      goal: 'flexibility',
      level: 'beginner',
      duration: '30天',
      frequency: '每天',
      timePerSession: '20分钟',
      difficulty: '初级',
      image: '/images/home-workout.jpg',
      rating: 4.6,
      participants: '2.7k',
      features: [
        '每日拉伸序列',
        '姿态改善指导',
        '办公室拉伸',
        '睡前放松方案'
      ]
    }
  ]

  const filteredPlans = plans.filter(plan => {
    const matchesGoal = selectedGoal === 'all' || plan.goal === selectedGoal
    const matchesLevel = selectedLevel === 'all' || plan.level === selectedLevel
    return matchesGoal && matchesLevel
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">健身计划</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          科学制定的训练计划，根据您的健身目标和水平，提供系统性的指导方案
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">筛选计划</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Goal Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">健身目标</label>
            <select
              value={selectedGoal}
              onChange={(e) => setSelectedGoal(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {goals.map(goal => (
                <option key={goal.id} value={goal.id}>
                  {goal.name}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">健身水平</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner size="728x90" position="content" />

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredPlans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${getDifficultyColor(plan.difficulty)}`}>
                  {plan.difficulty}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-600">{plan.rating}</span>
                  <span className="text-sm text-gray-500">({plan.participants}人参与)</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {plan.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {plan.description}
              </p>

              {/* Plan Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <Calendar className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-800">{plan.duration}</div>
                  <div className="text-xs text-gray-500">训练周期</div>
                </div>
                <div className="text-center">
                  <Target className="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-800">{plan.frequency}</div>
                  <div className="text-xs text-gray-500">训练频率</div>
                </div>
                <div className="text-center">
                  <Clock className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-800">{plan.timePerSession}</div>
                  <div className="text-xs text-gray-500">每次时长</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">计划特色</h4>
                <ul className="space-y-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <span>开始计划</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Plan Example */}
      {plans[0] && (
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">计划详情示例：{plans[0].title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(plans[0].weekPlan).map(([weekKey, week]) => (
              <div key={weekKey} className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">{week.title}</h3>
                <p className="text-gray-600 text-sm">{week.description}</p>
                
                <div className="space-y-2">
                  {week.days.map((day) => (
                    <div key={day.day} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-800">第{day.day}天</span>
                        <div className="text-sm text-gray-600">{day.focus}</div>
                      </div>
                      <span className="text-sm font-medium text-blue-600">{day.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Native Ad */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-xs text-gray-500 mb-4 text-center">推荐内容</div>
        <div className="w-full h-[200px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-gray-400">原生广告单元</div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">选择健身计划的建议</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">新手指南</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span className="text-gray-600">从初级计划开始，逐步建立运动习惯</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span className="text-gray-600">重视动作质量，不要急于增加强度</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span className="text-gray-600">保证充足的休息和恢复时间</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">进阶技巧</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <span className="text-gray-600">根据身体反馈调整训练强度</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <span className="text-gray-600">定期测试和评估训练效果</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <span className="text-gray-600">配合合理的营养和作息</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Ad */}
      <AdBanner size="336x280" position="footer" />
    </div>
  )
}

export default Plans
