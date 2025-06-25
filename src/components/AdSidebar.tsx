import React from 'react'

const AdSidebar: React.FC = () => {
  React.useEffect(() => {
    // 确保 adsbygoogle 对象存在
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="space-y-6">
      {/* 300x250 中等矩形广告 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-xs text-gray-500 mb-2 text-center">赞助商广告</div>
        <div className="w-[300px] h-[250px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center mx-auto">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6400746346592229"
            crossOrigin="anonymous"
          />
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-6400746346592229"
            data-ad-slot="9853515655"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>

      {/* 原生广告单元 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-xs text-gray-500 mb-2 text-center">推荐内容</div>
        <div className="w-full h-[400px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-gray-400">原生广告单元</div>
            {/* 原生 AdSense 代码 */}
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
              crossOrigin="anonymous"
            />
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-format="fluid"
              data-ad-layout-key="-fb+5w+4e-db+86"
              data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
              data-ad-slot="xxxxxxxxxx"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdSidebar
