// pwa-core.js - Standalone PWA Installation Logic Engine
document.addEventListener("DOMContentLoaded", function() {
    let deferredPrompt;
    const installBtn = document.getElementById('pwa-install-btn');

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent default browser banner
        e.preventDefault();
        // Store the event
        deferredPrompt = e;
        // Show the install button
        if (installBtn) {
            installBtn.style.display = 'flex';
        }
    });

    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (!deferredPrompt) return;
            
            // Show prompt
            deferredPrompt.prompt();
            
            // Wait for user choice
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to install prompt: ${outcome}`);
            
            // Clear prompt
            deferredPrompt = null;
            
            // Hide button
            installBtn.style.display = 'none';
        });
    }

    // Hide button if successfully installed
    window.addEventListener('appinstalled', (evt) => {
        console.log('PWA was successfully installed.');
        if (installBtn) {
            installBtn.style.display = 'none';
        }
    });
});
