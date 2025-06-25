import React from 'react'
import { Users, Target, Award, Heart, Mail, Phone, MapPin } from 'lucide-react'

const About: React.FC = () => {
  const teamMembers = [
    {
      name: '张教练',
      role: '首席健身指导',
      experience: '10年',
      specialization: '力量训练、功能性训练',
      image: '/images/bodyweight.jpg',
      description: '国家级健身教练，专注于科学健身方法的推广，帮助数千人实现健身目标。'
    },
    {
      name: '王医生',
      role: '营养专家',
      experience: '8年',
      specialization: '运动营养、健康饮食',
      image: '/images/nutrition.jpg',
      description: '注册营养师，擅长制定个性化的运动营养方案，倡导科学健康的饮食理念。'
    },
    {
      name: '李老师',
      role: '瑜伽导师',
      experience: '6年',
      specialization: '瑜伽、柔韧性训练',
      image: '/images/home-workout.jpg',
      description: '专业瑜伽导师，致力于推广身心平衡的健康生活方式。'
    }
  ]

  const values = [
    {
      icon: Target,
      title: '科学专业',
      description: '基于运动科学和营养学的专业知识，为用户提供科学、安全、有效的健身指导。'
    },
    {
      icon: Heart,
      title: '用户至上',
      description: '始终将用户的健康和安全放在首位，提供个性化的健身解决方案。'
    },
    {
      icon: Users,
      title: '普惠健身',
      description: '让每个人都能享受到专业的健身指导，不受地域、时间和经济条件限制。'
    },
    {
      icon: Award,
      title: '持续创新',
      description: '不断学习最新的健身理念和方法，为用户提供与时俱进的健身内容。'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: '网站创立',
      description: '家庭健身指南网站正式上线，开始为健身爱好者提供专业内容。'
    },
    {
      year: '2021',
      title: '用户突破10万',
      description: '网站用户数量突破10万，成为家庭健身领域的知名平台。'
    },
    {
      year: '2022',
      title: '内容体系完善',
      description: '建立完整的健身教程、营养指导和器材评测内容体系。'
    },
    {
      year: '2023',
      title: '专家团队扩充',
      description: '邀请更多专业教练和营养师加入，提升内容质量和专业度。'
    },
    {
      year: '2024',
      title: '服务升级',
      description: '推出个性化健身计划和在线指导服务，为用户提供更贴心的服务。'
    },
    {
      year: '2025',
      title: '持续发展',
      description: '继续优化用户体验，探索健身科技的前沿应用。'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">关于我们</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          家庭健身指南致力于为每个家庭提供专业、科学、实用的健身指导。我们相信，健康的生活方式应该是每个人都能轻松获得的。通过专业的内容和贴心的服务，我们帮助用户在家中就能享受到健身房级别的训练体验。
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">我们的使命</h2>
          <p className="text-blue-700 leading-relaxed">
            让每个人都能在家中享受专业的健身指导，打破时间、地点和经济的限制，普及科学健身知识，帮助更多人实现健康生活的目标。
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">我们的愿景</h2>
          <p className="text-green-700 leading-relaxed">
            成为家庭健身领域最受信赖的平台，通过科学的方法和温暖的服务，陪伴每个家庭走向更健康、更美好的生活。
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">我们的价值观</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">专家团队</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <div className="text-sm text-gray-600 mb-3">
                  <p><strong>经验：</strong>{member.experience}</p>
                  <p><strong>专长：</strong>{member.specialization}</p>
                </div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Development Timeline */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">发展历程</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10 hidden md:block">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-8 text-center">我们的成就</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">50万+</div>
            <div className="text-purple-200">累计用户</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-purple-200">专业文章</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">500万+</div>
            <div className="text-purple-200">总阅读量</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-purple-200">用户满意度</div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">联系我们</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">邮箱联系</h3>
            <p className="text-gray-600">info@fitness-guide.com</p>
            <p className="text-gray-600">support@fitness-guide.com</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">电话咨询</h3>
            <p className="text-gray-600">400-888-9999</p>
            <p className="text-gray-600">工作时间：9:00-18:00</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">公司地址</h3>
            <p className="text-gray-600">北京市朝阳区</p>
            <p className="text-gray-600">健康产业园A座10层</p>
          </div>
        </div>
      </div>

      {/* Join Us */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">加入我们</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          如果您是健身教练、营养师或运动爱好者，欢迎加入我们的团队。让我们一起为推广健康生活方式而努力！
        </p>
        <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
            成为内容创作者
          </button>
          <button className="bg-white text-orange-600 border border-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
            合作咨询
          </button>
        </div>
      </div>

      {/* Commitment */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">我们的承诺</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">内容质量</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span className="text-gray-600">所有内容均由专业人士审核</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span className="text-gray-600">基于最新科学研究和实践经验</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span className="text-gray-600">定期更新和完善内容</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">用户服务</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                <span className="text-gray-600">免费提供基础健身指导</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                <span className="text-gray-600">快速响应用户问题和建议</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                <span className="text-gray-600">保护用户隐私和数据安全</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
