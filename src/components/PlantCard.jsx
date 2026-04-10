import { Droplets } from 'lucide-react'
import { CardLeaf } from './LeafDecorations'

export default function PlantCard({ plant }) {
  const isPoor = plant.moistureQuality === 'Poor'

  return (
    <div className="card relative overflow-hidden p-4 sm:p-5 animate-fade-in" id={`plant-card-${plant.id}`}>
      {/* Decorative leaf */}
      <CardLeaf />

      <div className="flex gap-4 sm:gap-5">
        {/* Plant photo */}
        <div className="shrink-0">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-sm"
          />
        </div>

        {/* Plant info */}
        <div className="flex-1 min-w-0">
          {/* Name + emoji */}
          <h2 className="font-bold text-2xl sm:text-4xl text-[#1a1a1a] mb-2 tracking-tight">
            {plant.name} {plant.emoji}
          </h2>

          {/* Status */}
          <div className="flex items-center gap-1.5 mb-1">
            <Droplets size={15} className="text-blue-400" />
            <span className="text-sm text-gray-500">
              <span className="font-medium text-[#1a1a1a]">Status:</span> {plant.status}
            </span>
          </div>

          {/* Moisture info */}
          <p className="text-sm text-gray-500 mb-3">
            <span className="font-medium text-[#1a1a1a]">Moisture:</span>{' '}
            <span className={isPoor ? 'text-red-500 font-medium' : 'text-green-600 font-medium'}>
              {plant.moistureQuality}
            </span>{' '}
            ({plant.moistureChecked})
          </p>

          {/* Moisture bar */}
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                isPoor ? 'moisture-bar-poor' : 'moisture-bar-good'
              }`}
              style={{ width: `${plant.moistureLevel}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
