#!/bin/bash

echo "🚀 Building Mood Motivator PWA..."

# Create dist directory
mkdir -p dist

# Copy files to dist
cp -r www/* dist/

# Create a simple server for testing
echo "📦 Creating simple server for testing..."
cat > dist/server.py << 'EOF'
#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"🌐 Server running at http://localhost:{PORT}")
    print("📱 Open this URL on your Android device to install the PWA")
    print("💡 Or use Chrome DevTools to simulate mobile device")
    httpd.serve_forever()
EOF

chmod +x dist/server.py

echo "✅ PWA build completed!"
echo "📁 Files are in the 'dist' directory"
echo "🌐 To test the PWA:"
echo "   1. cd dist"
echo "   2. python3 server.py"
echo "   3. Open http://localhost:8000 on your Android device"
echo "   4. Tap 'Add to Home Screen' in Chrome menu"
echo ""
echo "📱 Installation Instructions:"
echo "   1. Open Chrome on your Android device"
echo "   2. Navigate to the app URL"
echo "   3. Tap the menu (3 dots) in Chrome"
echo "   4. Select 'Add to Home Screen'"
echo "   5. The app will now appear on your home screen"
echo ""
echo "🎉 Your Mood Motivator PWA is ready!"