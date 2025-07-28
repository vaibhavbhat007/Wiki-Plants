import React, { useState, useMemo } from 'react';
import { Search, Leaf, Heart, Info, X } from 'lucide-react';
import { plantsData } from './data/plants';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const filteredPlants = useMemo(() => {
    if (!searchTerm) return plantsData;
    
    return plantsData.filter(plant =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.family.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleFavorite = (plantId) => {
    setFavorites(prev => 
      prev.includes(plantId) 
        ? prev.filter(id => id !== plantId)
        : [...prev, plantId]
    );
  };

  const PlantCard = ({ plant }) => (
    <div className="plant-card" onClick={() => setSelectedPlant(plant)}>
      <div className="plant-image">
        <span>{plant.icon}</span>
      </div>
      <div className="plant-info">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 className="plant-name">{plant.name}</h3>
            <p className="plant-scientific">{plant.scientificName}</p>
          </div>
          <button
            className={`btn-secondary ${favorites.includes(plant.id) ? 'favorited' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(plant.id);
            }}
            style={{
              background: favorites.includes(plant.id) ? '#ff6b6b' : '#f8f9fa',
              color: favorites.includes(plant.id) ? 'white' : '#495057',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Heart size={16} fill={favorites.includes(plant.id) ? 'white' : 'none'} />
          </button>
        </div>
        <p className="plant-description">{plant.description}</p>
        <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ 
            background: '#e3f2fd', 
            color: '#1976d2', 
            padding: '4px 8px', 
            borderRadius: '12px', 
            fontSize: '12px',
            fontWeight: '500'
          }}>
            {plant.type}
          </span>
          <span style={{ 
            background: '#f3e5f5', 
            color: '#7b1fa2', 
            padding: '4px 8px', 
            borderRadius: '12px', 
            fontSize: '12px',
            fontWeight: '500'
          }}>
            {plant.growthRate} growth
          </span>
        </div>
      </div>
    </div>
  );

  const PlantModal = ({ plant, onClose }) => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#f8f9fa',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ padding: '32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>{plant.icon}</div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>{plant.name}</h2>
            <p style={{ fontStyle: 'italic', color: '#718096', fontSize: '18px' }}>{plant.scientificName}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Family</h4>
              <p>{plant.family}</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Type</h4>
              <p>{plant.type}</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Origin</h4>
              <p>{plant.origin}</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Max Height</h4>
              <p>{plant.maxHeight}</p>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>Description</h3>
            <p style={{ lineHeight: '1.6', color: '#4a5568' }}>{plant.description}</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Care Instructions</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: '600', minWidth: '100px' }}>Light:</span>
                <span>{plant.care.light}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: '600', minWidth: '100px' }}>Water:</span>
                <span>{plant.care.water}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: '600', minWidth: '100px' }}>Humidity:</span>
                <span>{plant.care.humidity}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: '600', minWidth: '100px' }}>Temperature:</span>
                <span>{plant.care.temperature}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px', background: plant.toxicity.includes('Non-toxic') ? '#d4edda' : '#f8d7da', borderRadius: '12px' }}>
            <Info size={20} color={plant.toxicity.includes('Non-toxic') ? '#155724' : '#721c24'} />
            <div>
              <h4 style={{ fontWeight: '600', color: plant.toxicity.includes('Non-toxic') ? '#155724' : '#721c24' }}>
                Pet Safety
              </h4>
              <p style={{ color: plant.toxicity.includes('Non-toxic') ? '#155724' : '#721c24', margin: 0 }}>
                {plant.toxicity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1><Leaf style={{ display: 'inline', marginRight: '12px' }} />Plant Wiki</h1>
          <p>Discover and learn about plants and their care specifications</p>
          
          <div className="stats">
            <div className="stat">
              <span className="stat-number">{plantsData.length}</span>
              <span className="stat-label">Plants</span>
            </div>
            <div className="stat">
              <span className="stat-number">{favorites.length}</span>
              <span className="stat-label">Favorites</span>
            </div>
            <div className="stat">
              <span className="stat-number">{filteredPlants.length}</span>
              <span className="stat-label">Results</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="search-section">
          <div style={{ position: 'relative' }}>
            <Search 
              size={20} 
              style={{ 
                position: 'absolute', 
                left: '16px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#718096' 
              }} 
            />
            <input
              type="text"
              placeholder="Search plants by name, scientific name, type, or family..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              style={{ paddingLeft: '48px' }}
            />
          </div>
          
          {searchTerm && (
            <p style={{ marginTop: '16px', color: '#718096' }}>
              Found {filteredPlants.length} plant{filteredPlants.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </p>
          )}
        </div>

        <div className="grid">
          {filteredPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <h3 style={{ color: 'white', marginBottom: '8px' }}>No plants found</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Try searching with different keywords or browse all plants
            </p>
            <button 
              className="btn" 
              onClick={() => setSearchTerm('')}
              style={{ marginTop: '16px' }}
            >
              Show All Plants
            </button>
          </div>
        )}
      </main>

      {selectedPlant && (
        <PlantModal 
          plant={selectedPlant} 
          onClose={() => setSelectedPlant(null)} 
        />
      )}
    </div>
  );
}

export default App;