import React from 'react'
import { Shield, Eye, Lock, Globe, Mail, Calendar } from 'lucide-react'

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">隐私政策</h1>
        <p className="text-gray-600">最后更新时间：2025年6月25日</p>
      </div>

      {/* Introduction */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">重要说明</h2>
        <p className="text-blue-700 leading-relaxed">
          家庭健身指南网站（以下简称"我们"或"本网站"）非常重视您的隐私保护。本隐私政策详细说明了我们如何收集、使用、存储和保护您的个人信息。请在使用我们的服务前仔细阅读本政策。
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">目录</h2>
        <ul className="space-y-2">
          <li><a href="#section1" className="text-blue-600 hover:text-blue-700">1. 信息收集</a></li>
          <li><a href="#section2" className="text-blue-600 hover:text-blue-700">2. 信息使用</a></li>
          <li><a href="#section3" className="text-blue-600 hover:text-blue-700">3. 信息共享</a></li>
          <li><a href="#section4" className="text-blue-600 hover:text-blue-700">4. Cookie和跟踪技术</a></li>
          <li><a href="#section5" className="text-blue-600 hover:text-blue-700">5. 广告服务</a></li>
          <li><a href="#section6" className="text-blue-600 hover:text-blue-700">6. 数据安全</a></li>
          <li><a href="#section7" className="text-blue-600 hover:text-blue-700">7. 您的权利</a></li>
          <li><a href="#section8" className="text-blue-600 hover:text-blue-700">8. 国际数据传输</a></li>
          <li><a href="#section9" className="text-blue-600 hover:text-blue-700">9. 政策更新</a></li>
          <li><a href="#section10" className="text-blue-600 hover:text-blue-700">10. 联系我们</a></li>
        </ul>
      </div>

      {/* Section 1: Information Collection */}
      <div id="section1" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Eye className="h-6 w-6 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-800">1. 信息收集</h2>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">1.1 自动收集的信息</h3>
          <p className="text-gray-600 leading-relaxed">
            当您访问我们的网站时，我们会自动收集以下信息：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>IP地址和地理位置信息</li>
            <li>浏览器类型和版本</li>
            <li>操作系统信息</li>
            <li>访问时间和页面停留时间</li>
            <li>访问的页面和点击的链接</li>
            <li>来源网站（如果您是从其他网站访问的）</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">1.2 主动提供的信息</h3>
          <p className="text-gray-600 leading-relaxed">
            您可能会主动向我们提供以下信息：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>邮箱地址（用于订阅我们的资讯）</li>
            <li>姓名或昵称</li>
            <li>反馈和评论内容</li>
            <li>联系表单中的信息</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">1.3 第三方信息</h3>
          <p className="text-gray-600 leading-relaxed">
            我们可能从以下第三方来源获取信息：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>Google Analytics（网站分析数据）</li>
            <li>Google AdSense（广告投放数据）</li>
            <li>社交媒体平台（如果您选择分享内容）</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Information Use */}
      <div id="section2" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Globe className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">2. 信息使用</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            我们收集的信息用于以下目的：
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800">2.1 服务提供</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>提供网站内容和功能</li>
            <li>个性化用户体验</li>
            <li>响应您的咨询和请求</li>
            <li>发送您订阅的资讯和更新</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">2.2 网站优化</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>分析网站使用情况</li>
            <li>改进网站性能和用户体验</li>
            <li>开发新功能和内容</li>
            <li>故障排除和技术支持</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">2.3 广告投放</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>展示相关的广告内容</li>
            <li>测量广告效果</li>
            <li>防止广告欺诈</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">2.4 法律合规</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>遵守法律法规要求</li>
            <li>保护我们的权利和财产</li>
            <li>防止非法或有害活动</li>
          </ul>
        </div>
      </div>

      {/* Section 3: Information Sharing */}
      <div id="section3" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Lock className="h-6 w-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-800">3. 信息共享</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            我们不会出售您的个人信息。我们仅在以下情况下共享您的信息：
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800">3.1 服务提供商</h3>
          <p className="text-gray-600 leading-relaxed">
            我们可能与以下第三方服务提供商共享信息：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li><strong>Google Analytics：</strong>用于网站分析和性能监控</li>
            <li><strong>Google AdSense：</strong>用于广告投放和收入分析</li>
            <li><strong>云服务提供商：</strong>用于数据存储和网站托管</li>
            <li><strong>邮件服务提供商：</strong>用于发送订阅邮件</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">3.2 法律要求</h3>
          <p className="text-gray-600 leading-relaxed">
            在以下情况下，我们可能被要求披露您的信息：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>法院命令或法律程序要求</li>
            <li>政府机关的合法要求</li>
            <li>保护我们或他人的权利、财产或安全</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">3.3 业务转让</h3>
          <p className="text-gray-600 leading-relaxed">
            如果我们的业务被收购或合并，您的信息可能会作为资产的一部分被转让。
          </p>
        </div>
      </div>

      {/* Section 4: Cookies */}
      <div id="section4" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Globe className="h-6 w-6 text-orange-600" />
          <h2 className="text-xl font-semibold text-gray-800">4. Cookie和跟踪技术</h2>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">4.1 什么是Cookie</h3>
          <p className="text-gray-600 leading-relaxed">
            Cookie是存储在您设备上的小型文本文件，用于记住您的偏好设置和浏览行为。
          </p>

          <h3 className="text-lg font-semibold text-gray-800">4.2 我们使用的Cookie类型</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">必要Cookie</h4>
            <p className="text-gray-600 text-sm">确保网站正常运行所必需的Cookie，无法被禁用。</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">分析Cookie</h4>
            <p className="text-gray-600 text-sm">帮助我们了解访问者如何使用网站，用于改进网站性能。</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">广告Cookie</h4>
            <p className="text-gray-600 text-sm">用于投放相关广告和测量广告效果。</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">功能Cookie</h4>
            <p className="text-gray-600 text-sm">记住您的偏好设置，提供个性化体验。</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">4.3 管理Cookie</h3>
          <p className="text-gray-600 leading-relaxed">
            您可以通过浏览器设置管理Cookie：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>阻止所有Cookie</li>
            <li>删除现有Cookie</li>
            <li>设置Cookie到期时间</li>
            <li>允许来自特定网站的Cookie</li>
          </ul>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>注意：</strong>禁用Cookie可能影响网站的某些功能。
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Advertising */}
      <div id="section5" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Globe className="h-6 w-6 text-red-600" />
          <h2 className="text-xl font-semibold text-gray-800">5. 广告服务</h2>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">5.1 Google AdSense</h3>
          <p className="text-gray-600 leading-relaxed">
            我们使用Google AdSense在网站上展示广告。Google可能会：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>使用Cookie跟踪您在我们网站和其他网站的访问</li>
            <li>基于您的兴趣展示个性化广告</li>
            <li>收集匿名的广告互动数据</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">5.2 DoubleClick DART Cookie</h3>
          <p className="text-gray-600 leading-relaxed">
            Google的DoubleClick DART Cookie用于：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>根据您访问我们网站和互联网上其他网站的情况投放广告</li>
            <li>提供更相关的广告内容</li>
            <li>测量广告效果</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">5.3 选择退出</h3>
          <p className="text-gray-600 leading-relaxed">
            您可以通过以下方式选择退出个性化广告：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>访问Google广告设置页面：<a href="https://www.google.com/settings/ads" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://www.google.com/settings/ads</a></li>
            <li>访问Digital Advertising Alliance退出页面：<a href="http://www.aboutads.info/" className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/</a></li>
            <li>使用浏览器的"请勿跟踪"功能</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>注意：</strong>退出个性化广告并不意味着您不再看到广告，而是看到的广告将不再基于您的兴趣定制。
            </p>
          </div>
        </div>
      </div>

      {/* Section 6: Data Security */}
      <div id="section6" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="h-6 w-6 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-800">6. 数据安全</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            我们采取适当的技术和组织措施保护您的个人信息：
          </p>

          <h3 className="text-lg font-semibold text-gray-800">6.1 技术措施</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>HTTPS加密传输</li>
            <li>安全的数据存储</li>
            <li>访问控制和身份验证</li>
            <li>定期安全更新和补丁</li>
            <li>防火墙和入侵检测系统</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">6.2 组织措施</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>员工隐私培训</li>
            <li>数据访问权限控制</li>
            <li>定期安全审计</li>
            <li>事件响应程序</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">6.3 数据保留</h3>
          <p className="text-gray-600 leading-relaxed">
            我们仅在必要的时间内保留您的个人信息：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>分析数据：最多保留26个月</li>
            <li>联系信息：直到您要求删除</li>
            <li>法律要求的数据：按法律规定的期限</li>
          </ul>

          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-red-800 text-sm">
              <strong>重要提醒：</strong>虽然我们努力保护您的信息安全，但互联网传输无法保证100%安全。请不要通过不安全的渠道发送敏感信息。
            </p>
          </div>
        </div>
      </div>

      {/* Section 7: Your Rights */}
      <div id="section7" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Eye className="h-6 w-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-800">7. 您的权利</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            根据适用的隐私法律，您享有以下权利：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">访问权</h4>
              <p className="text-gray-600 text-sm">了解我们收集了您的哪些信息</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">更正权</h4>
              <p className="text-gray-600 text-sm">要求更正不准确的个人信息</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">删除权</h4>
              <p className="text-gray-600 text-sm">要求删除您的个人信息</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">限制处理权</h4>
              <p className="text-gray-600 text-sm">限制我们处理您信息的方式</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">数据可携权</h4>
              <p className="text-gray-600 text-sm">获取您的数据副本</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">反对权</h4>
              <p className="text-gray-600 text-sm">反对某些数据处理活动</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">7.1 如何行使权利</h3>
          <p className="text-gray-600 leading-relaxed">
            要行使这些权利，请通过以下方式联系我们：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>邮箱：privacy@fitness-guide.com</li>
            <li>联系表单：通过网站联系页面</li>
            <li>邮寄地址：北京市朝阳区健康产业园A座10层</li>
          </ul>

          <p className="text-gray-600 leading-relaxed">
            我们将在30天内回复您的请求。
          </p>
        </div>
      </div>

      {/* Section 8: International Transfer */}
      <div id="section8" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Globe className="h-6 w-6 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-800">8. 国际数据传输</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            您的信息可能会被传输到您所在国家/地区以外的服务器进行处理和存储。我们确保：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>仅与提供适当保护级别的国家/地区共享数据</li>
            <li>与第三方签署适当的数据保护协议</li>
            <li>遵守适用的数据传输法律</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">8.1 主要数据传输</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li><strong>Google服务：</strong>数据可能传输到美国和其他国家</li>
            <li><strong>云存储：</strong>数据存储在符合安全标准的数据中心</li>
            <li><strong>分析服务：</strong>匿名化数据用于分析目的</li>
          </ul>
        </div>
      </div>

      {/* Section 9: Policy Updates */}
      <div id="section9" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Calendar className="h-6 w-6 text-yellow-600" />
          <h2 className="text-xl font-semibold text-gray-800">9. 政策更新</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            我们可能会不时更新本隐私政策，以反映：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>服务功能的变化</li>
            <li>法律法规的要求</li>
            <li>技术的发展</li>
            <li>最佳实践的改进</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">9.1 更新通知</h3>
          <p className="text-gray-600 leading-relaxed">
            当我们对隐私政策进行重大更改时，我们将：
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
            <li>在网站上发布更新通知</li>
            <li>更新本页面顶部的"最后更新时间"</li>
            <li>通过邮件通知订阅用户（如适用）</li>
          </ul>

          <p className="text-gray-600 leading-relaxed">
            建议您定期查看本政策以了解最新变化。
          </p>
        </div>
      </div>

      {/* Section 10: Contact */}
      <div id="section10" className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Mail className="h-6 w-6 text-teal-600" />
          <h2 className="text-xl font-semibold text-gray-800">10. 联系我们</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            如果您对本隐私政策有任何问题、意见或投诉，请通过以下方式联系我们：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">隐私专员</h3>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>邮箱：</strong>privacy@fitness-guide.com</p>
                <p className="text-gray-600"><strong>电话：</strong>400-888-9999</p>
                <p className="text-gray-600"><strong>工作时间：</strong>周一至周五 9:00-18:00</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">公司地址</h3>
              <div className="space-y-2">
                <p className="text-gray-600">家庭健身指南网站</p>
                <p className="text-gray-600">北京市朝阳区健康产业园A座10层</p>
                <p className="text-gray-600">邮编：100020</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">承诺</h4>
            <p className="text-green-700 text-sm">
              我们承诺在收到您的隐私相关询问后24小时内确认收到，并在30天内提供详细回复。我们重视您的隐私权利，致力于为您提供满意的解决方案。
            </p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-500 text-sm">
        <p>本隐私政策的中文版本为正式版本。如有翻译版本与中文版本不一致，以中文版本为准。</p>
      </div>
    </div>
  )
}

export default Privacy
