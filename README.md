# Plant Wiki - Modern Web Application

A modern, responsive web application for exploring plants and their care specifications. Built with React and featuring a beautiful, intuitive user interface.

## Features

### 🔐 Authentication System
- **Sign Up**: Create a new account with email validation
- **Sign In**: Secure login with password visibility toggle
- **Form Validation**: Real-time validation with helpful error messages
- **Demo Credentials**: Try the app with demo@plantwiki.com / demo123

### 🌿 Plant Database
- **Comprehensive Plant Library**: 10+ popular houseplants with detailed information
- **Advanced Search**: Search by name, scientific name, plant type, or family
- **Detailed Plant Profiles**: Care instructions, toxicity info, growth rates, and more
- **Favorites System**: Mark plants as favorites for quick access

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Beautiful Animations**: Smooth transitions and hover effects
- **Glass-morphism Design**: Modern backdrop blur and transparency effects
- **Gradient Backgrounds**: Stunning visual design with floating plant animations

### 🚀 Technical Features
- **React 18**: Modern React with hooks and functional components
- **Local Storage**: Persistent user sessions and favorites
- **Form Validation**: Client-side validation with real-time feedback
- **Loading States**: Smooth loading animations and transitions
- **Modal System**: Detailed plant information in overlay modals

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd plant-wiki-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Demo Access
Use these credentials to try the app:
- **Email**: demo@plantwiki.com
- **Password**: demo123

## Plant Database

The application includes detailed information for these plants:

- **Monstera Deliciosa** - Tropical houseplant with split leaves
- **Snake Plant** - Hardy, low-maintenance succulent
- **Fiddle Leaf Fig** - Popular indoor tree with violin-shaped leaves
- **Peace Lily** - Elegant flowering plant for low-light conditions
- **Rubber Plant** - Classic houseplant with glossy leaves
- **Pothos** - Easy-to-grow trailing vine
- **ZZ Plant** - Drought-tolerant plant perfect for beginners
- **Aloe Vera** - Medicinal succulent with healing properties
- **Spider Plant** - Popular hanging plant with plantlets
- **Boston Fern** - Lush, feathery fern for humid conditions

Each plant entry includes:
- Common and scientific names
- Plant family and type classification
- Native origin information
- Detailed care instructions (light, water, humidity, temperature)
- Growth rate and maximum height
- Pet toxicity warnings
- Comprehensive descriptions

## Technology Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Modern CSS with custom properties and animations
- **Icons**: Lucide React icon library
- **Storage**: Browser localStorage for persistence
- **Build Tool**: Create React App
- **Development**: Hot reload with React Scripts

## Project Structure

```
src/
├── components/
│   └── Auth.js          # Authentication component
├── data/
│   └── plants.js        # Plant database
├── App.js               # Main application component
├── index.js             # Application entry point
└── index.css            # Global styles and animations
```

## Available Scripts

- `npm start` - Runs the development server
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Plant information sourced from botanical databases
- Icons provided by Lucide React
- Design inspired by modern plant care applications
