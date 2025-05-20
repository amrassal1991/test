// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg.scope))
      .catch(err => console.log('Service Worker registration failed:', err));
  });
}

// Simple notification on button click
document.getElementById('notifyBtn').addEventListener('click', () => {
  if (Notification.permission === 'granted') {
    new Notification('Hello from your PWA!');
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Hello from your PWA!');
      }
    });
  }
});
