import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'
import { ChevronDown } from 'lucide-react'
import { moistureTrendData } from '../data'

export default function MoistureTrend() {
  return (
    <div className="card p-4 flex-1 min-w-0" id="moisture-trend">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-[#1a1a1a]">Moisture trend</h3>
        <button className="p-1 rounded-lg hover:bg-gray-50 transition-colors">
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>
      <div className="h-20">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={moistureTrendData}>
            <Tooltip
              contentStyle={{
                background: '#fff',
                border: 'none',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#6b7280', fontWeight: 500 }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6b8f3e"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4, fill: '#6b8f3e', stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
