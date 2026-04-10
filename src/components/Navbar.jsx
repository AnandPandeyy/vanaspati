import { Bell, Settings } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left — App name */}
          <h1 className="font-bold text-2xl text-[#1a1a1a] tracking-tight">
            🌿 Vanaspati
          </h1>

          {/* Right — User info + icons */}
          <div className="flex items-center gap-4">
            {/* Avatar + Name */}
            <div className="flex items-center gap-2.5">
              <img
                src="/avatar.png"
                alt="Ajay Rathore"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#6b8f3e]/20"
              />
              <span className="text-sm font-semibold text-[#1a1a1a] hidden sm:block">
                Ajay Rathore
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />

            {/* Bell with badge */}
            <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors" id="notification-bell">
              <Bell size={20} className="text-gray-500" />
              <span className="notification-badge" />
            </button>

            {/* Settings */}
            <button className="p-2 rounded-xl hover:bg-gray-50 transition-colors" id="settings-btn">
              <Settings size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
