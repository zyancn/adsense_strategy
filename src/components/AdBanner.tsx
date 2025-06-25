import React from 'react'

// 声明 adsbygoogle 全局变量
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

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

  React.useEffect(() => {
    // 确保 adsbygoogle 对象存在
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className={`${positionClasses[position]} ${className}`}>
      <div className={`${sizeClasses[size]} bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden`}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6400746346592229"
          crossOrigin="anonymous"
        />
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-6400746346592229"
          data-ad-slot="5159592179"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  )
}

export default AdBanner
