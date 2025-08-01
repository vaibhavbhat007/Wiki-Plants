import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const quotesByMood = {
  sad: [
    { text: "Every day is a new beginning. Take a deep breath and start again.", author: "Anonymous" },
    { text: "The sun will rise and we will try again.", author: "Twenty One Pilots" },
    { text: "It's okay to not be okay. It's okay to start over.", author: "Anonymous" },
    { text: "Your feelings are valid. Tomorrow will be better.", author: "Anonymous" },
    { text: "The darkest nights produce the brightest stars.", author: "Anonymous" }
  ],
  happy: [
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "The joy of life comes from our encounters with new experiences.", author: "Christopher McCandless" },
    { text: "Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy.", author: "Ralph Marston" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "The more you praise and celebrate your life, the more there is in life to celebrate.", author: "Oprah Winfrey" }
  ],
  stressed: [
    { text: "Take life day by day and be grateful for the little things. Don't get caught up in what you can't control.", author: "Anonymous" },
    { text: "Stress is not what happens to us. It's our response to what happens.", author: "Maureen Killoran" },
    { text: "Breathe. It's just a bad day, not a bad life.", author: "Anonymous" },
    { text: "You are stronger than you think. You can handle this.", author: "Anonymous" },
    { text: "One step at a time. One day at a time. You've got this.", author: "Anonymous" }
  ],
  angry: [
    { text: "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.", author: "Mark Twain" },
    { text: "For every minute spent organizing, an hour is earned.", author: "Benjamin Franklin" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Channel your anger into something productive.", author: "Anonymous" },
    { text: "Peace comes from within. Do not seek it without.", author: "Buddha" }
  ],
  tired: [
    { text: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit. Then get back to work.", author: "Ralph Marston" },
    { text: "Sleep is the best meditation.", author: "Dalai Lama" },
    { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
    { text: "Your body can stand almost anything. It's your mind you have to convince.", author: "Anonymous" },
    { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" }
  ],
  excited: [
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" }
  ],
  anxious: [
    { text: "Worry does not empty tomorrow of its sorrows; it empties today of its strength.", author: "Corrie Ten Boom" },
    { text: "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.", author: "Charles Spurgeon" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { text: "Everything will be okay in the end. If it's not okay, it's not the end.", author: "John Lennon" },
    { text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", author: "Albert Camus" }
  ],
  motivated: [
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Don't limit your challenges. Challenge your limits.", author: "Anonymous" }
  ]
};

export default function App() {
  const [mood, setMood] = useState('');
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const getQuote = () => {
    if (!mood.trim()) {
      Alert.alert('Error', 'Please enter your current mood');
      return;
    }

    setLoading(true);
    setQuote(null);

    // Simulate API call delay
    setTimeout(() => {
      const moodLower = mood.toLowerCase().trim();
      let selectedMood = 'motivated'; // default

      // Match mood to category
      if (moodLower.includes('sad') || moodLower.includes('depressed') || moodLower.includes('down')) {
        selectedMood = 'sad';
      } else if (moodLower.includes('happy') || moodLower.includes('joy') || moodLower.includes('good')) {
        selectedMood = 'happy';
      } else if (moodLower.includes('stress') || moodLower.includes('overwhelm') || moodLower.includes('busy')) {
        selectedMood = 'stressed';
      } else if (moodLower.includes('angry') || moodLower.includes('mad') || moodLower.includes('frustrated')) {
        selectedMood = 'angry';
      } else if (moodLower.includes('tired') || moodLower.includes('exhausted') || moodLower.includes('sleepy')) {
        selectedMood = 'tired';
      } else if (moodLower.includes('excited') || moodLower.includes('thrilled') || moodLower.includes('pumped')) {
        selectedMood = 'excited';
      } else if (moodLower.includes('anxious') || moodLower.includes('worried') || moodLower.includes('nervous')) {
        selectedMood = 'anxious';
      }

      const quotes = quotesByMood[selectedMood];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      setQuote(randomQuote);
      setLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Mood Motivator</Text>
          <Text style={styles.subtitle}>Share your mood and get inspired with a personalized motivational quote</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>How are you feeling today?</Text>
            <TextInput
              style={styles.input}
              value={mood}
              onChangeText={setMood}
              placeholder="e.g., sad, happy, stressed, excited..."
              placeholderTextColor="#999"
              onSubmitEditing={getQuote}
            />
          </View>

          <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]} 
            onPress={getQuote}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Text style={styles.buttonText}>Get Motivated!</Text>
            )}
          </TouchableOpacity>

          {quote && (
            <View style={styles.quoteContainer}>
              <Text style={styles.quoteText}>"{quote.text}"</Text>
              <Text style={styles.quoteAuthor}>— {quote.author}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#667eea',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    borderWidth: 2,
    borderColor: '#e1e5e9',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#667eea',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  quoteContainer: {
    backgroundColor: '#f093fb',
    padding: 25,
    borderRadius: 16,
    marginTop: 20,
  },
  quoteText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    lineHeight: 26,
    marginBottom: 15,
    textAlign: 'center',
  },
  quoteAuthor: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.9,
  },
});
