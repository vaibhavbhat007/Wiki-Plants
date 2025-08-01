/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    // Initialize the app
    initializeApp();
}

function initializeApp() {
    const moodInput = document.getElementById('mood');
    const getQuoteBtn = document.getElementById('getQuoteBtn');
    const btnText = document.getElementById('btnText');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorDiv = document.getElementById('error');
    const quoteContainer = document.getElementById('quoteContainer');
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');

    // Add event listeners
    getQuoteBtn.addEventListener('click', getQuote);
    moodInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            getQuote();
        }
    });

    function getQuote() {
        const mood = moodInput.value.trim();
        
        if (!mood) {
            showError('Please enter your current mood');
            return;
        }

        // Hide previous error and quote
        hideError();
        hideQuote();
        
        // Show loading state
        setLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            const moodLower = mood.toLowerCase();
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
            
            // Hide loading and show quote
            setLoading(false);
            showQuote(randomQuote.text, randomQuote.author);
        }, 1000);
    }

    function setLoading(loading) {
        if (loading) {
            btnText.style.display = 'none';
            loadingSpinner.style.display = 'inline-block';
            getQuoteBtn.disabled = true;
        } else {
            btnText.style.display = 'inline';
            loadingSpinner.style.display = 'none';
            getQuoteBtn.disabled = false;
        }
    }

    function showError(message) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    function hideError() {
        errorDiv.style.display = 'none';
    }

    function showQuote(text, author) {
        quoteText.textContent = text;
        quoteAuthor.textContent = `— ${author}`;
        quoteContainer.style.display = 'block';
        
        // Add a subtle animation
        quoteContainer.style.opacity = '0';
        quoteContainer.style.transform = 'translateY(20px)';
        quoteContainer.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            quoteContainer.style.opacity = '1';
            quoteContainer.style.transform = 'translateY(0)';
        }, 10);
    }

    function hideQuote() {
        quoteContainer.style.display = 'none';
    }
}

// Fallback for when running in browser (not on device)
if (typeof cordova === 'undefined') {
    console.log('Running in browser mode');
    document.addEventListener('DOMContentLoaded', function() {
        // Simulate device ready for browser testing
        setTimeout(() => {
            onDeviceReady();
        }, 100);
    });
}

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
