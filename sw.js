self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'SCHEDULE_NY_ALERT') {
        const delay = event.data.targetTime - Date.now();
        if (delay > 0) {
            setTimeout(() => {
                self.registration.showNotification("WELCOME TO 2026", {
                    body: `Happy New Year, ${event.data.name}! Open to see your greeting.`,
                    icon: 'https://cdn-icons-png.flaticon.com/512/3361/3361905.png',
                    vibrate: [500, 100, 500],
                    tag: 'ny-2026-alert'
                });
            }, delay);
        }
    }
});
