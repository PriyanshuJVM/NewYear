self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // This allows the SW to take control of the page immediately without a refresh
    event.waitUntil(clients.claim());
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'SCHEDULE_NY_ALERT') {
        const delay = event.data.time - Date.now();
        if (delay > 0) {
            setTimeout(() => {
                self.registration.showNotification("WELCOME TO 2026", {
                    body: `Happy New Year, ${event.data.name}! The broadcast has arrived.`,
                    icon: 'https://cdn-icons-png.flaticon.com/512/3361/3361905.png',
                    vibrate: [500, 100, 500]
                });
            }, delay);
        }
    }
});
