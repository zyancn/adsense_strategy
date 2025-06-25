import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Dumbbell, Heart, Calendar, Apple, Home, Info } from 'lucide-react'
import { useState } from 'react'
import AdBanner from './AdBanner'
import AdSidebar from './AdSidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: '首页', icon: Home },
    { path: '/tutorials', label: '健身教程', icon: Dumbbell },
    { path: '/plans', label: '健身计划', icon: Calendar },
    { path: '/nutrition', label: '营养指南', icon: Apple },
    { path: '/equipment', label: '健身器材', icon: Heart },
    { path: '/about', label: '关于我们', icon: Info },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top AdSense Banner - Desktop */}
      <div className="hidden md:block">
        <AdBanner size="728x90" position="header" />
      </div>
      
      {/* Mobile AdSense Banner */}
      <div className="block md:hidden">
        <AdBanner size="320x50" position="header-mobile" />
      </div>

      {/* Navigation Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">家庭健身指南</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {children}
          </div>

          {/* Sidebar with Ads */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <AdSidebar />
              
              {/* Quick Navigation */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">快速导航</h3>
                <div className="space-y-2">
                  {navItems.slice(1).map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">订阅健身资讯</h3>
                <p className="text-sm mb-4 opacity-90">获取最新健身技巧和营养建议</p>
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="输入您的邮箱"
                    className="px-3 py-2 rounded-md text-gray-800 text-sm"
                  />
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                    订阅
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">家庭健身指南</span>
              </div>
              <p className="text-gray-400 text-sm">
                专注于提供优质的家庭健身指导，帮助您在家中实现健康生活目标。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <div className="space-y-2">
                <Link to="/tutorials" className="block text-gray-400 hover:text-white transition-colors">健身教程</Link>
                <Link to="/plans" className="block text-gray-400 hover:text-white transition-colors">健身计划</Link>
                <Link to="/nutrition" className="block text-gray-400 hover:text-white transition-colors">营养指南</Link>
                <Link to="/equipment" className="block text-gray-400 hover:text-white transition-colors">健身器材</Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">关于</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">关于我们</Link>
                <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors">隐私政策</Link>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">联系我们</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">服务条款</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">联系方式</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>邮箱：info@fitness-guide.com</p>
                <p>微信：FitnessGuide2025</p>
                <p>QQ群：123456789</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 家庭健身指南. 版权所有. | 
              <Link to="/privacy" className="hover:text-white transition-colors ml-1">隐私政策</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
