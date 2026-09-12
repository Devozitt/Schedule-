# Daily Target

A local-first productivity PWA: **Plan today. Complete today. Improve tomorrow.**

## Run

For the most reliable PWA/offline behavior, serve the folder over HTTP:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

The application also avoids ES modules and remote dependencies, so the main interface can be opened directly from `index.html` in a local folder. Service-worker/PWA features require HTTP(S), as required by browsers.

## Features

- Real target CRUD with IndexedDB
- Daily dashboard, progress, history, statistics and calendar
- Local preferences with theme and language
- English, Hindi and Bengali UI
- JSON export/import
- Responsive desktop sidebar and mobile bottom navigation
- Offline service worker/PWA support when served over HTTP(S)
- Accessible forms, dialogs, labels and keyboard shortcuts
- No fake login, sync, statistics or contact sending

## Storage

Targets are stored in IndexedDB database `dailyTargetDB`. Preferences are stored in localStorage under `dailyTargetPreferences`.

## Browser support

Use a current Chrome, Edge, Firefox, Safari, Android Chrome or iOS Safari. For PWA installation and offline caching, use HTTPS or localhost.
