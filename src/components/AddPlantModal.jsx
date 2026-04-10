import { useState } from 'react'
import { X } from 'lucide-react'

export default function AddPlantModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    image: null,
  })

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.type) {
      onAdd({
        id: Date.now(),
        name: formData.name,
        emoji: '🌱',
        image: formData.image || '/eggplant.png',
        status: 'Waiting for sensor data',
        moistureQuality: 'Good',
        moistureChecked: 'checked just now',
        moistureLevel: 50,
      })
      setFormData({ name: '', type: '', image: null })
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 modal-overlay z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="card p-6 w-full max-w-md animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-xl text-[#1a1a1a]">Add New Plant</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-gray-100 transition-colors"
            id="close-modal"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">
              Plant Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Basil"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b8f3e]/30 focus:border-[#6b8f3e] transition-all"
              id="plant-name-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">
              Plant Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b8f3e]/30 focus:border-[#6b8f3e] transition-all bg-white"
              id="plant-type-select"
            >
              <option value="">Select type</option>
              <option value="vegetable">Vegetable</option>
              <option value="fruit">Fruit</option>
              <option value="herb">Herb</option>
              <option value="flower">Flower</option>
              <option value="succulent">Succulent</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">
              Plant Image (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b8f3e]/30 focus:border-[#6b8f3e] transition-all bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#6b8f3e]/10 file:text-[#6b8f3e] hover:file:bg-[#6b8f3e]/20"
              id="plant-image-input"
            />
            {formData.image && (
              <div className="mt-3 flex justify-center">
                <img src={formData.image} alt="Preview" className="h-20 w-20 object-cover rounded-xl shadow-sm" />
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-full btn-add-plant text-white text-sm font-semibold"
              id="submit-plant"
            >
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
