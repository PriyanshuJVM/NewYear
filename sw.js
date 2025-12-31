// sw.js - The Background Process
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log("2026 Broadcast Service Active");
});

// This listens for a message from your main site to schedule the alert
self.addEventListener('message', (event) => {
    if (event.data.type === 'SCHEDULE_NY_NOTIFICATION') {
        const delay = event.data.targetTime - Date.now();
        
        if (delay > 0) {
            setTimeout(() => {
                self.registration.showNotification("2026 HAS ARRIVED", {
                    body: `Happy New Year, ${event.data.name}! Tap to enter the future.`,
                    icon: 'https://cdn-icons-png.flaticon.com/512/3361/3361905.png',
                    vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40],
                    tag: 'ny-broadcast'
                });
            }, delay);
        }
    }
});
