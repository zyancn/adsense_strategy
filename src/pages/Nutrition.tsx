import React, { useState } from 'react'
import { Apple, Calculator, Clock, Target, TrendingUp, User } from 'lucide-react'
import AdBanner from '../components/AdBanner'

const Nutrition: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: '全部文章' },
    { id: 'basics', name: '营养基础' },
    { id: 'weight-loss', name: '减脂饮食' },
    { id: 'muscle-gain', name: '增肌营养' },
    { id: 'meal-prep', name: '备餐指南' },
    { id: 'supplements', name: '营养补充' }
  ]

  const articles = [
    {
      id: 1,
      title: '健身营养基础：宏量营养素完全指南',
      excerpt: '深入了解蛋白质、碳水化合物和脂肪在健身中的重要作用，以及如何合理搭配三大营养素。',
      category: 'basics',
      image: '/images/nutrition.jpg',
      author: '营养师王医生',
      date: '2025-06-20',
      readTime: '15分钟',
      tags: ['营养基础', '宏量营养素', '健身饮食']
    },
    {
      id: 2,
      title: '科学减脂饮食方案：一周健康减重计划',
      excerpt: '基于科学研究的减脂饮食策略，包含一周完整的减脂餐单和热量控制方法。',
      category: 'weight-loss',
      image: '/images/nutrition.jpg',
      author: '营养师李老师',
      date: '2025-06-18',
      readTime: '12分钟',
      tags: ['减脂', '热量控制', '健康减重']
    },
    {
      id: 3,
      title: '增肌期营养补充策略',
      excerpt: '增肌训练期间的营养需求分析，蛋白质摄入量计算，以及最佳的营养补充时机。',
      category: 'muscle-gain',
      image: '/images/nutrition.jpg',
      author: '运动营养师张博士',
      date: '2025-06-15',
      readTime: '18分钟',
      tags: ['增肌', '蛋白质', '营养补充']
    },
    {
      id: 4,
      title: '健身备餐完全指南：高效准备一周健康餐',
      excerpt: '详细的备餐计划和食谱，教您如何高效准备营养均衡的健身餐，节省时间和金钱。',
      category: 'meal-prep',
      image: '/images/nutrition.jpg',
      author: '健身达人小美',
      date: '2025-06-12',
      readTime: '20分钟',
      tags: ['备餐', '食谱', '时间管理']
    }
  ]

  const nutritionTips = [
    {
      title: '训练前营养',
      tips: [
        '训练前1-2小时适量进食',
        '选择易消化的碳水化合物',
        '避免高脂肪和高纤维食物',
        '保证充足的水分摄入'
      ],
      icon: Clock
    },
    {
      title: '训练后恢复',
      tips: [
        '训练后30分钟内补充蛋白质',
        '搭配简单碳水化合物',
        '补充流失的电解质',
        '充分补水促进恢复'
      ],
      icon: TrendingUp
    },
    {
      title: '日常饮食',
      tips: [
        '保持规律的用餐时间',
        '多样化的食物搭配',
        '控制总热量摄入',
        '注重食物的营养密度'
      ],
      icon: Apple
    }
  ]

  const filteredArticles = articles.filter(article =>
    selectedCategory === 'all' || article.category === selectedCategory
  )

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">营养指南</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          科学的营养知识和实用的饮食建议，为您的健身目标提供强有力的营养支持
        </p>
      </div>

      {/* Quick Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {nutritionTips.map((tip, index) => {
          const Icon = tip.icon
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{tip.title}</h3>
              </div>
              <ul className="space-y-2">
                {tip.tips.map((tipText, tipIndex) => (
                  <li key={tipIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                    <span className="text-sm text-gray-600">{tipText}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* BMI Calculator */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">BMI计算器</h2>
            <p className="text-gray-600">快速计算您的身体质量指数，了解您的健康状况</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">身高 (cm)</label>
                <input
                  type="number"
                  placeholder="170"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">体重 (kg)</label>
                <input
                  type="number"
                  placeholder="65"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  计算BMI
                </button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">BMI参考标准</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center p-2 bg-blue-100 rounded">
                  <div className="font-medium text-blue-800">偏瘦</div>
                  <div className="text-blue-600">&lt; 18.5</div>
                </div>
                <div className="text-center p-2 bg-green-100 rounded">
                  <div className="font-medium text-green-800">正常</div>
                  <div className="text-green-600">18.5-24.9</div>
                </div>
                <div className="text-center p-2 bg-yellow-100 rounded">
                  <div className="font-medium text-yellow-800">超重</div>
                  <div className="text-yellow-600">25.0-29.9</div>
                </div>
                <div className="text-center p-2 bg-red-100 rounded">
                  <div className="font-medium text-red-800">肥胖</div>
                  <div className="text-red-600">≥ 30.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner size="728x90" position="content" />

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">文章分类</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="space-y-6">
        {filteredArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                    {categories.find(c => c.id === article.category)?.name}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    阅读全文 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nutrition Facts */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">营养知识速查</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">蛋白质需求</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">一般人群</span>
                <span className="font-medium">0.8g/kg体重</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">力量训练</span>
                <span className="font-medium">1.6-2.2g/kg体重</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">耐力训练</span>
                <span className="font-medium">1.2-1.4g/kg体重</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">碳水化合物</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">减脂期</span>
                <span className="font-medium">2-3g/kg体重</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">维持期</span>
                <span className="font-medium">3-5g/kg体重</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">增肌期</span>
                <span className="font-medium">5-7g/kg体重</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">健康脂肪</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">总热量占比</span>
                <span className="font-medium">20-35%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">饱和脂肪</span>
                <span className="font-medium">&lt;10%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">不饱和脂肪</span>
                <span className="font-medium">&gt;20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Healthy Foods Grid */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">健身推荐食物</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">优质蛋白质</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">鸡胸肉</li>
              <li className="text-gray-600">瘦牛肉</li>
              <li className="text-gray-600">鱼类</li>
              <li className="text-gray-600">鸡蛋</li>
              <li className="text-gray-600">豆腐</li>
              <li className="text-gray-600">希腊酸奶</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">复合碳水</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">燕麦</li>
              <li className="text-gray-600">糙米</li>
              <li className="text-gray-600">全麦面包</li>
              <li className="text-gray-600">红薯</li>
              <li className="text-gray-600">藜麦</li>
              <li className="text-gray-600">豆类</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-4">健康脂肪</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">牛油果</li>
              <li className="text-gray-600">坚果</li>
              <li className="text-gray-600">橄榄油</li>
              <li className="text-gray-600">深海鱼</li>
              <li className="text-gray-600">亚麻籽</li>
              <li className="text-gray-600">奇亚籽</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-600 mb-4">维生素矿物质</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">深色蔬菜</li>
              <li className="text-gray-600">浆果类</li>
              <li className="text-gray-600">柑橘类</li>
              <li className="text-gray-600">绿叶菜</li>
              <li className="text-gray-600">胡萝卜</li>
              <li className="text-gray-600">西兰花</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Native Ad */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-xs text-gray-500 mb-4 text-center">营养产品推荐</div>
        <div className="w-full h-[200px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-gray-400">原生广告单元</div>
          </div>
        </div>
      </div>

      {/* Bottom Ad */}
      <AdBanner size="336x280" position="footer" />
    </div>
  )
}

export default Nutrition
