# Mood Motivator - Android App

A beautiful and modern Android application that provides personalized motivational quotes based on your current mood. Built with React Native and Expo.

## 📱 Features

- **Mood-based Quotes**: Enter your current mood and receive personalized motivational quotes
- **Native Android UI**: Beautiful, responsive design optimized for Android devices
- **Smart Mood Recognition**: Automatically categorizes your mood and provides relevant quotes
- **Multiple Mood Categories**: Supports various moods including sad, happy, stressed, angry, tired, excited, anxious, and motivated
- **Offline Functionality**: Works completely offline - no internet connection required
- **Smooth Animations**: Native Android animations and transitions

## 🎯 Supported Moods

The app recognizes and provides quotes for these mood categories:

- **Sad/Depressed/Down** - Comforting and uplifting quotes
- **Happy/Joyful/Good** - Quotes about maintaining happiness
- **Stressed/Overwhelmed/Busy** - Stress management and perspective quotes
- **Angry/Mad/Frustrated** - Quotes about channeling anger productively
- **Tired/Exhausted/Sleepy** - Quotes about rest and energy
- **Excited/Thrilled/Pumped** - Motivational and achievement quotes
- **Anxious/Worried/Nervous** - Calming and reassuring quotes
- **Motivated** - General motivational quotes (default)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for local development)
- Android device or emulator

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

1. Start the development server:
   ```bash
   npm start
   ```

2. Use the Expo Go app on your Android device to scan the QR code, or press 'a' to open in Android emulator

### Building APK

#### Option 1: Using EAS Build (Recommended)

1. Install EAS CLI:
   ```bash
   npm install -g @expo/cli
   ```

2. Login to your Expo account:
   ```bash
   expo login
   ```

3. Build the APK:
   ```bash
   npm run build:android
   ```

4. Download the APK from the provided link

#### Option 2: Local Build

1. Install Expo Development Client:
   ```bash
   npx expo install expo-dev-client
   ```

2. Build locally:
   ```bash
   expo build:android
   ```

## 📱 How to Use

1. **Enter Your Mood**: Type how you're feeling in the input field (e.g., "sad", "happy", "stressed")
2. **Get Quote**: Tap the "Get Motivated!" button or press Enter
3. **Read & Reflect**: The app will display a personalized motivational quote with its author
4. **Repeat**: Get new quotes anytime by entering a different mood or tapping the button again

## 🛠 Technology Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and build tools
- **EAS Build** - Cloud build service for APK generation
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
MoodMotivatorAndroid/
├── App.js              # Main application component
├── app.json            # Expo configuration
├── eas.json            # EAS Build configuration
├── package.json        # Dependencies and scripts
├── assets/             # App icons and splash screens
└── README.md          # Project documentation
```

## 🎨 Design Features

- **Material Design**: Follows Android design guidelines
- **Gradient Backgrounds**: Beautiful purple-blue gradient theme
- **Card-based Layout**: Clean, modern card design
- **Responsive Typography**: Optimized for different screen sizes
- **Touch Feedback**: Native Android touch interactions

## 📦 APK Generation

The app is configured to generate APK files that can be installed directly on Android devices without going through the Google Play Store.

### Build Profiles

- **Preview**: Development build with debugging enabled
- **Production**: Optimized build for distribution

### APK Features

- **Standalone**: No need for Expo Go app
- **Offline**: Works without internet connection
- **Optimized**: Small file size and fast performance
- **Secure**: Signed with proper certificates

## 🔧 Customization

### Adding New Quotes

To add new quotes, edit the `quotesByMood` object in `App.js`. Each mood category contains an array of quote objects with `text` and `author` properties.

### Adding New Mood Categories

1. Add a new key to the `quotesByMood` object
2. Add the mood recognition logic in the `getQuote` function
3. Add corresponding quotes for the new mood

### Styling

The app uses React Native StyleSheet. You can customize the appearance by modifying the styles in `App.js`.

## 📱 Installation on Android Device

1. **Enable Unknown Sources**: Go to Settings > Security > Unknown Sources
2. **Download APK**: Download the generated APK file
3. **Install**: Tap the APK file to install the app
4. **Launch**: Open the Mood Motivator app from your app drawer

## 🤝 Contributing

Feel free to contribute by:
- Adding new motivational quotes
- Improving the mood recognition algorithm
- Enhancing the UI/UX
- Adding new features
- Optimizing performance

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Quotes from various inspirational figures and authors
- React Native and Expo communities for excellent tooling
- Material Design principles for Android UI/UX