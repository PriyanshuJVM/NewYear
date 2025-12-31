self.addEventListener('install', (event) => {
    self.skipWaiting(); // Force the SW to become active immediately
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // Take control of all open tabs immediately
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'SCHEDULE_NY_ALERT') {
        const delay = event.data.targetTime - Date.now();
        if (delay > 0) {
            setTimeout(() => {
                self.registration.showNotification("2026 BROADCAST", {
                    body: `Happy New Year, ${event.data.name}! The future has arrived.`,
                    icon: 'https://cdn-icons-png.flaticon.com/512/3361/3361905.png',
                    vibrate: [500, 100, 500],
                    badge: 'https://cdn-icons-png.flaticon.com/512/3361/3361905.png'
                });
            }, delay);
        }
    }
});
