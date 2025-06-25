import React from 'react'

interface AdBannerProps {
  size: '728x90' | '320x50' | '336x280' | '300x250' | '300x600'
  position: 'header' | 'header-mobile' | 'content' | 'footer'
  className?: string
}

const AdBanner: React.FC<AdBannerProps> = ({ size, position, className = '' }) => {
  const sizeClasses = {
    '728x90': 'w-[728px] h-[90px]',
    '320x50': 'w-[320px] h-[50px]',
    '336x280': 'w-[336px] h-[280px]',
    '300x250': 'w-[300px] h-[250px]',
    '300x600': 'w-[300px] h-[600px]'
  }

  const positionClasses = {
    'header': 'mx-auto',
    'header-mobile': 'mx-auto',
    'content': 'mx-auto my-8',
    'footer': 'mx-auto'
  }

  return (
    <div className={`${positionClasses[position]} ${className}`}>
      <div className={`${sizeClasses[size]} bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden`}>
        {/* AdSense 广告代码将在这里插入 */}
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">广告</div>
          <div className="text-sm text-gray-400">AdSense {size}</div>
          {/* 这里将来会替换为实际的 AdSense 代码 */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
            crossOrigin="anonymous"
          />
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="xxxxxxxxxx"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </div>
  )
}

export default AdBanner
