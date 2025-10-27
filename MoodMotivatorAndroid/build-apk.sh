#!/bin/bash

echo "🚀 Building Mood Motivator Android APK..."

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null; then
    echo "📦 Installing EAS CLI..."
    npm install -g @expo/cli
fi

# Check if user is logged in to Expo
if ! eas whoami &> /dev/null; then
    echo "🔐 Please login to your Expo account:"
    eas login
fi

echo "🔨 Building APK..."
npm run build:android

echo "✅ APK build completed!"
echo "📱 You can download the APK from the link provided above"
echo "📋 To install on your Android device:"
echo "   1. Enable 'Unknown Sources' in Settings > Security"
echo "   2. Download the APK file"
echo "   3. Tap the APK to install"
echo "   4. Open Mood Motivator from your app drawer"