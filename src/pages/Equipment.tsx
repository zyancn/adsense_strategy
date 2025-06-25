import React, { useState } from 'react'
import { Star, ShoppingCart, Filter, Search, Award, ThumbsUp } from 'lucide-react'
import AdBanner from '../components/AdBanner'

const Equipment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: '全部器材' },
    { id: 'cardio', name: '有氧器材' },
    { id: 'strength', name: '力量器材' },
    { id: 'accessories', name: '健身配件' },
    { id: 'recovery', name: '恢复器材' }
  ]

  const priceRanges = [
    { id: 'all', name: '全部价格' },
    { id: 'budget', name: '100元以下' },
    { id: 'mid', name: '100-500元' },
    { id: 'high', name: '500-1500元' },
    { id: 'premium', name: '1500元以上' }
  ]

  const equipmentList = [
    {
      id: 1,
      name: '可调节哑铃套装',
      category: 'strength',
      priceRange: 'high',
      price: '899',
      originalPrice: '1299',
      rating: 4.8,
      reviews: 2847,
      image: '/images/equipment.jpg',
      brand: 'FitnessMax',
      features: [
        '重量可调5-40kg',
        '节省空间设计',
        '快速调节机制',
        '人体工学握把'
      ],
      pros: [
        '重量调节方便快捷',
        '占用空间小',
        '性价比高',
        '适合家庭使用'
      ],
      cons: [
        '最大重量有限',
        '调节机制需要保养'
      ],
      bestFor: '初学者到中级健身爱好者',
      description: '这套可调节哑铃是家庭健身的理想选择。独特的快速调节机制让您可以在5-40公斤之间自由调节重量，相当于15对传统哑铃的功能。人体工学设计的握把确保舒适性，紧凑的设计节省存储空间。'
    },
    {
      id: 2,
      name: '高端跑步机',
      category: 'cardio',
      priceRange: 'premium',
      price: '3299',
      originalPrice: '4299',
      rating: 4.7,
      reviews: 1523,
      image: '/images/cardio.jpg',
      brand: 'RunTech Pro',
      features: [
        '3.0马力静音电机',
        '速度0.8-16km/h',
        '坡度0-15%调节',
        '多媒体娱乐系统'
      ],
      pros: [
        '运行非常安静',
        '跑带宽敞舒适',
        '内置训练程序丰富',
        '折叠设计节省空间'
      ],
      cons: [
        '价格较高',
        '需要定期维护',
        '重量较大'
      ],
      bestFor: '认真的跑步爱好者和全家使用',
      description: '专业级家用跑步机，搭载3.0马力静音电机，即使高速运行也保持极低噪音。宽大的跑台（140×50cm）提供充足的运动空间，15级坡度调节模拟真实跑步环境。内置50+训练程序，适合不同水平的用户。'
    },
    {
      id: 3,
      name: '瑜伽垫套装',
      category: 'accessories',
      priceRange: 'budget',
      price: '89',
      originalPrice: '129',
      rating: 4.6,
      reviews: 5234,
      image: '/images/home-workout.jpg',
      brand: 'YogaLife',
      features: [
        '10mm加厚设计',
        'TPE环保材质',
        '防滑纹理',
        '附送收纳包'
      ],
      pros: [
        '厚度适中保护关节',
        '防滑效果极佳',
        '无异味环保材质',
        '方便收纳携带'
      ],
      cons: [
        '初期可能有轻微橡胶味',
        '深色容易显示灰尘'
      ],
      bestFor: '瑜伽练习者和地面训练',
      description: '高品质瑜伽垫，采用TPE环保材质制造，无毒无味更安全。10mm的厚度为膝盖和脊椎提供充分保护，双面防滑纹理设计确保练习时的稳定性。配送便携收纳包，方便外出携带。'
    },
    {
      id: 4,
      name: '筋膜枪按摩器',
      category: 'recovery',
      priceRange: 'mid',
      price: '299',
      originalPrice: '499',
      rating: 4.5,
      reviews: 3156,
      image: '/images/equipment.jpg',
      brand: 'RecoveryMax',
      features: [
        '4档力度调节',
        '6种按摩头',
        '低噪音设计',
        '长续航电池'
      ],
      pros: [
        '按摩效果显著',
        '噪音控制良好',
        '电池续航强',
        '按摩头种类丰富'
      ],
      cons: [
        '重量稍重',
        '价格偏中等'
      ],
      bestFor: '运动后肌肉放松和日常按摩',
      description: '专业级筋膜枪，搭载无刷电机，4档力度调节满足不同需求。6种专业按摩头针对不同肌肉群，有效缓解肌肉紧张和酸痛。超长续航设计，一次充电可使用6小时。'
    },
    {
      id: 5,
      name: '阻力带套装',
      category: 'accessories',
      priceRange: 'budget',
      price: '58',
      originalPrice: '88',
      rating: 4.4,
      reviews: 4567,
      image: '/images/strength.jpg',
      brand: 'FlexBand',
      features: [
        '5条不同阻力',
        '天然乳胶材质',
        '门框固定器',
        '详细训练指南'
      ],
      pros: [
        '阻力等级丰富',
        '携带方便',
        '价格实惠',
        '训练动作多样'
      ],
      cons: [
        '乳胶可能引起过敏',
        '长期使用会老化'
      ],
      bestFor: '力量训练和康复锻炼',
      description: '完整的阻力训练套装，包含5条不同阻力等级的弹力带，从轻度到超重度，满足各种训练需求。采用天然乳胶制造，弹性好耐用性强。配送门框固定器和训练指南，随时随地开始训练。'
    },
    {
      id: 6,
      name: '智能体脂秤',
      category: 'accessories',
      priceRange: 'mid',
      price: '199',
      originalPrice: '299',
      rating: 4.3,
      reviews: 2891,
      image: '/images/equipment.jpg',
      brand: 'HealthTrack',
      features: [
        '13项身体数据',
        'WiFi同步',
        '手机APP管理',
        '多用户识别'
      ],
      pros: [
        '数据准确详细',
        'APP功能丰富',
        '多人使用便利',
        '数据趋势分析'
      ],
      cons: [
        '需要WiFi连接',
        '测量时需赤脚'
      ],
      bestFor: '健身进度跟踪和健康监测',
      description: '智能体脂秤不仅测量体重，还提供体脂率、肌肉量、水分含量等13项身体指标。通过WiFi自动同步数据到手机APP，支持多用户使用，家庭成员可分别跟踪健康数据。'
    }
  ]

  const filteredEquipment = equipmentList.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesPrice = priceRange === 'all' || item.priceRange === priceRange
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesPrice && matchesSearch
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">健身器材</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          精心挑选的家用健身器材，专业评测帮您选择最适合的健身装备
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索器材..."
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
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {priceRanges.map(range => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
              <option>按评分排序</option>
              <option>按价格排序</option>
              <option>按销量排序</option>
            </select>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner size="728x90" position="content" />

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredEquipment.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-2/3 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600">{item.brand}</span>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">推荐</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                  <span className="text-sm text-gray-500">({item.reviews} 评价)</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">主要特点</h4>
                  <ul className="space-y-1">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-red-600">¥{item.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">¥{item.originalPrice}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>查看详情</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Review Example */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">深度评测：可调节哑铃套装</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/equipment.jpg"
              alt="可调节哑铃套装"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">优点</h3>
                <ul className="space-y-2">
                  {equipmentList[0].pros.map((pro, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ThumbsUp className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-gray-600 text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-2">缺点</h3>
                <ul className="space-y-2">
                  {equipmentList[0].cons.map((con, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-4 h-4 text-orange-500 mt-0.5">⚠</div>
                      <span className="text-gray-600 text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">评测总结</h3>
                <p className="text-gray-600 leading-relaxed">
                  这款可调节哑铃是我们测试过的最佳家用力量训练器材之一。虽然价格不算便宜，但考虑到它可以替代15对传统哑铃，性价比非常高。调节机制虽然需要一些练习才能熟练使用，但一旦掌握就非常方便。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">适用人群</h3>
                <p className="text-gray-600">
                  <strong>最适合：</strong>{equipmentList[0].bestFor}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">评分细则</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">设计质量</span>
                    <div className="flex items-center space-x-1">
                      {renderStars(5)}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">使用便利性</span>
                    <div className="flex items-center space-x-1">
                      {renderStars(4)}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">性价比</span>
                    <div className="flex items-center space-x-1">
                      {renderStars(5)}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">耐用性</span>
                    <div className="flex items-center space-x-1">
                      {renderStars(4)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">编辑推荐</h4>
                <p className="text-blue-700 text-sm">
                  "如果您正在寻找一款能够满足多种力量训练需求的家用器材，这款可调节哑铃绝对值得考虑。它将为您节省大量空间和金钱。"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Native Ad */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-xs text-gray-500 mb-4 text-center">器材推荐</div>
        <div className="w-full h-[200px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-gray-400">原生广告单元</div>
          </div>
        </div>
      </div>

      {/* Buying Guide */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">购买指南</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">新手必备</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <span className="text-gray-600">瑜伽垫：基础必需品</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <span className="text-gray-600">阻力带：便宜且多功能</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <span className="text-gray-600">体重秤：跟踪进度</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">进阶装备</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2" />
                <span className="text-gray-600">可调节哑铃：力量训练核心</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2" />
                <span className="text-gray-600">引体向上器：上肢训练</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2" />
                <span className="text-gray-600">筋膜枪：恢复辅助</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">高级配置</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span className="text-gray-600">跑步机：有氧运动首选</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span className="text-gray-600">综合训练架：完整解决方案</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <span className="text-gray-600">智能设备：数据跟踪</span>
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

export default Equipment
