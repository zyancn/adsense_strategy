import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Play, Target, TrendingUp } from 'lucide-react'
import AdBanner from '../components/AdBanner'

const Home: React.FC = () => {
  const featuredArticles = [
    {
      id: 1,
      title: '30分钟全身燃脂HIIT训练计划',
      excerpt: '高效的间歇训练帮助您在家中快速燃烧脂肪，提升心肺功能。无需器械，适合所有健身水平的人群。',
      image: '/images/cardio.jpg',
      category: '健身计划',
      author: '健身专家张教练',
      date: '2025-06-20',
      readTime: '8分钟阅读'
    },
    {
      id: 2,
      title: '零基础家庭健身完整指南',
      excerpt: '从热身到力量训练，从有氧运动到拉伸恢复，为初学者提供全面的家庭健身解决方案。',
      image: '/images/home-workout.jpg',
      category: '健身教程',
      author: '营养师李老师',
      date: '2025-06-18',
      readTime: '12分钟阅读'
    },
    {
      id: 3,
      title: '健身前后营养补充完整攻略',
      excerpt: '科学的营养搭配是健身成功的关键。了解运动前后如何正确补充营养，最大化训练效果。',
      image: '/images/nutrition.jpg',
      category: '营养指南',
      author: '营养师王医生',
      date: '2025-06-15',
      readTime: '10分钟阅读'
    }
  ]

  const quickAccess = [
    {
      title: 'BMI计算器',
      description: '快速计算您的身体质量指数',
      icon: Target,
      link: '/tools/bmi'
    },
    {
      title: '健身进度跟踪',
      description: '记录您的健身历程',
      icon: TrendingUp,
      link: '/tools/progress'
    },
    {
      title: '视频教程',
      description: '观看专业健身动作演示',
      icon: Play,
      link: '/tutorials'
    }
  ]

  const latestArticles = [
    {
      id: 4,
      title: '家用哑铃选购指南：新手必看',
      category: '健身器材',
      date: '2025-06-22'
    },
    {
      id: 5,
      title: '晨练vs晚练：什么时间健身最有效？',
      category: '健身知识',
      date: '2025-06-21'
    },
    {
      id: 6,
      title: '减脂期间的饮食安排技巧',
      category: '营养指南',
      date: '2025-06-19'
    },
    {
      id: 7,
      title: '核心力量训练：在家练出马甲线',
      category: '健身教程',
      date: '2025-06-17'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-8 py-16 md:px-12 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              开启您的
              <br />
              <span className="text-yellow-300">家庭健身</span>
              <br />
              新旅程
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              专业指导 · 科学计划 · 健康生活
              <br />
              在家也能拥有健身房级别的训练效果
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tutorials"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                开始健身 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/plans"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                查看计划
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Ad Banner */}
      <AdBanner size="728x90" position="content" className="my-8" />

      {/* Quick Access */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">快速工具</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickAccess.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={index}
                to={item.link}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Featured Articles */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">精选文章</h2>
          <Link
            to="/tutorials"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
          >
            查看全部 <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Native Ad */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-xs text-gray-500 mb-4 text-center">赞助内容</div>
        <div className="w-full h-[200px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-gray-400">原生广告单元</div>
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">最新文章</h2>
        <div className="bg-white rounded-xl shadow-md divide-y divide-gray-100">
          {latestArticles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center space-x-3 mt-2 text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Ad */}
      <AdBanner size="336x280" position="footer" className="my-8" />
    </div>
  )
}

export default Home
