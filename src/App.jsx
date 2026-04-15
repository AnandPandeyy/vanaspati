import { useState } from 'react'
import Navbar from './components/Navbar'
import PlantCard from './components/PlantCard'
import MoistureTrend from './components/MoistureTrend'
import WeatherWidget from './components/WeatherWidget'
import SoilHealthSummary from './components/SoilHealthSummary'
import AddPlantModal from './components/AddPlantModal'
import { LeafCornerTopRight, LeafCornerBottomLeft } from './components/LeafDecorations'
import { plantsData as initialPlants } from './data'

export default function App() {
  const [plants, setPlants] = useState(initialPlants)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [plantToEdit, setPlantToEdit] = useState(null)

  const handleSubmitPlant = (plantData) => {
    if (plantToEdit) {
      setPlants((prev) => prev.map(p => p.id === plantData.id ? plantData : p))
    } else {
      setPlants((prev) => [...prev, plantData])
    }
    setIsModalOpen(false)
  }

  const handleEditClick = (plant) => {
    setPlantToEdit(plant)
    setIsModalOpen(true)
  }

  const handleAddClick = () => {
    setPlantToEdit(null)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#edf7ed] relative">
      {/* Decorative background leaves */}
      <LeafCornerTopRight />
      <LeafCornerBottomLeft />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        {/* Page header */}
        <div className="mb-6">
          <h2 className="font-bold text-xl text-[#1a1a1a]">Main Dashboard</h2>
          <p className="text-sm text-gray-400 mt-0.5">Monitor your plants' health in real-time</p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* LEFT SECTION — Plant Cards (60%) */}
          <section className="md:col-span-3 space-y-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Your Plants
            </p>
            {plants.map((plant, index) => (
              <div key={plant.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <PlantCard plant={plant} onEdit={handleEditClick} />
              </div>
            ))}
          </section>

          {/* RIGHT SECTION — Stats Panel (40%) */}
          <aside className="md:col-span-2 space-y-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Insights
            </p>

            {/* Card 1 — Mini cards row */}
            <div className="flex gap-4">
              <MoistureTrend />
              <WeatherWidget />
            </div>

            {/* Card 2 — Soil Health */}
            <SoilHealthSummary />

            {/* Card 3 — Add New Plant */}
            <button
              onClick={handleAddClick}
              className="btn-add-plant w-full py-3.5 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#6b8f3e]/20"
              id="add-plant-btn"
            >
              <span className="text-lg">+</span>
              Add New Plant
            </button>
          </aside>
        </div>
      </main>

      {/* Modal */}
      <AddPlantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitPlant}
        plantToEdit={plantToEdit}
      />
    </div>
  )
}
