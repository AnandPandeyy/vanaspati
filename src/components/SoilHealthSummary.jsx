import { Sprout, Droplets, ThumbsDown } from 'lucide-react'

export default function SoilHealthSummary() {
  return (
    <div className="card p-5" id="soil-health">
      <h3 className="font-bold text-lg text-[#1a1a1a] mb-1">Soil Health Summary</h3>
      <p className="text-sm text-gray-400 mb-4">Good / Moderate / Poor</p>
      <div className="flex items-center justify-around">
        <SoilItem icon={<Sprout size={24} />} label="Good" color="text-green-500" />
        <SoilItem icon={<Droplets size={24} />} label="Moderate" color="text-blue-400" />
        <SoilItem icon={<ThumbsDown size={24} />} label="Poor" color="text-orange-400" />
      </div>
    </div>
  )
}

function SoilItem({ icon, label, color }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`p-2.5 rounded-xl bg-gray-50 ${color}`}>
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-500">{label}</span>
    </div>
  )
}
