self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('message', (event) => {
    if (event.data.type === 'SCHEDULE_NOTIFICATION') {
        const delay = event.data.time - Date.now();
        if (delay > 0) {
            setTimeout(() => {
                self.registration.showNotification("2026 BROADCAST", {
                    body: `Happy New Year, ${event.data.name}! The future has arrived.`,
                    icon: 'https://cdn-icons-png.flaticon.com/512/3361/3361905.png',
                    vibrate: [500, 100, 500],
                    tag: 'ny-2026'
                });
            }, delay);
        }
    }
});
