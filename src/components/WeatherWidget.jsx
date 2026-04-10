import { ChevronDown, CloudSun } from 'lucide-react'

export default function WeatherWidget() {
  return (
    <div className="card p-4 flex-1 min-w-0" id="weather-widget">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-[#1a1a1a]">Weather</h3>
        <button className="p-1 rounded-lg hover:bg-gray-50 transition-colors">
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>
      <div className="flex items-center gap-2.5">
        <CloudSun size={32} className="text-amber-400" />
        <span className="text-3xl font-bold text-[#1a1a1a]">29°</span>
      </div>
    </div>
  )
}
