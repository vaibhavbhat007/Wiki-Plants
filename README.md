# Mood Motivator

A beautiful and modern web application that provides personalized motivational quotes based on your current mood. Built with React and Vite.

## Features

- **Mood-based Quotes**: Enter your current mood and receive personalized motivational quotes
- **Beautiful UI**: Modern, responsive design with gradient backgrounds and smooth animations
- **Smart Mood Recognition**: Automatically categorizes your mood and provides relevant quotes
- **Multiple Mood Categories**: Supports various moods including sad, happy, stressed, angry, tired, excited, anxious, and motivated
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Supported Moods

The app recognizes and provides quotes for these mood categories:

- **Sad/Depressed/Down** - Comforting and uplifting quotes
- **Happy/Joyful/Good** - Quotes about maintaining happiness
- **Stressed/Overwhelmed/Busy** - Stress management and perspective quotes
- **Angry/Mad/Frustrated** - Quotes about channeling anger productively
- **Tired/Exhausted/Sleepy** - Quotes about rest and energy
- **Excited/Thrilled/Pumped** - Motivational and achievement quotes
- **Anxious/Worried/Nervous** - Calming and reassuring quotes
- **Motivated** - General motivational quotes (default)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Enter your current mood and click "Get Motivated!" to receive a personalized quote

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## How to Use

1. **Enter Your Mood**: Type how you're feeling in the input field (e.g., "sad", "happy", "stressed")
2. **Get Quote**: Click the "Get Motivated!" button or press Enter
3. **Read & Reflect**: The app will display a personalized motivational quote with its author
4. **Repeat**: Get new quotes anytime by entering a different mood or clicking the button again

## Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **JavaScript ES6+** - Modern JavaScript features

## Project Structure

```
mood-motivator/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## Customization

### Adding New Quotes

To add new quotes, edit the `quotesByMood` object in `src/App.jsx`. Each mood category contains an array of quote objects with `text` and `author` properties.

### Adding New Mood Categories

1. Add a new key to the `quotesByMood` object
2. Add the mood recognition logic in the `getQuote` function
3. Add corresponding quotes for the new mood

### Styling

The app uses CSS custom properties and modern CSS features. You can customize the appearance by modifying `src/index.css`.

## Contributing

Feel free to contribute by:
- Adding new motivational quotes
- Improving the mood recognition algorithm
- Enhancing the UI/UX
- Adding new features

## License

This project is licensed under the MIT License.

## Acknowledgments

- Quotes from various inspirational figures and authors
- Modern web design principles and best practices
- React and Vite communities for excellent tooling
