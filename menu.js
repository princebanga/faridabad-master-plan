// menu.js - Global Navigation Component with Dropdowns, News Ticker & Smart PWA Installer
const globalMenuHTML = `
    <style>
        .top-navbar { 
            display: flex; justify-content: space-between; align-items: center; 
            background-color: #0f172a; padding: 15px 5%; color: white; 
            border-bottom: 2px solid #0d9488; position: sticky; top: 0; z-index: 9999;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }
        .nav-logo { font-size: 20px; font-weight: 800; letter-spacing: 0.5px; color: #0d9488; text-decoration: none; }
        
        .nav-container { display: flex; align-items: center; gap: 14px; min-width: 0; }
        
        .nav-links { list-style: none; display: flex; margin: 0; padding: 0; align-items: center; }
        .nav-links li { margin-left: 14px; position: relative; padding: 10px 0; } 
        .nav-links a { color: #f8fafc; text-decoration: none; font-size: 13px; font-weight: 600; text-transform: uppercase; transition: color 0.3s; white-space: nowrap; }
        .nav-links a:hover { color: #0d9488; }

        /* Dropdown Container */
        .dropdown-content { 
            display: none; 
            position: absolute; 
            background-color: #ffffff; 
            min-width: 240px; 
            box-shadow: 0px 10px 25px rgba(0,0,0,0.2); 
            z-index: 10000; 
            border-radius: 8px; 
            top: 100%; 
            left: 0; 
            border-top: 3px solid #0d9488;
        }

        /* Show dropdown on hover */
        .dropdown:hover .dropdown-content { 
            display: block; 
        }

        /* Sub-menu Links */
        .dropdown-content a { 
            color: #1e293b !important; 
            padding: 12px 18px; 
            display: block; 
            border-bottom: 1px solid #f1f5f9; 
            text-transform: none; 
            font-size: 14px; 
            font-weight: 500;
            transition: all 0.2s ease;
            position: relative;
        }

        .dropdown-content a:hover { 
            background-color: #f8fafc; 
            color: #0d9488 !important; 
            padding-left: 25px; 
        }

        /* --- Nested Sub-Dropdown CSS --- */
        .sub-dropdown { position: relative; }
        
        .sub-dropdown-content {
            display: none; position: absolute; background-color: #ffffff;
            min-width: 200px; box-shadow: 0px 10px 25px rgba(0,0,0,0.2);
            z-index: 10001; border-radius: 8px; top: 0; 
            left: 100%; border-left: 3px solid #0d9488;
        }

        .sub-dropdown:hover .sub-dropdown-content { display: block; }
        .sub-arrow { float: right; font-size: 12px; margin-top: 2px; }

        /* News Ticker Styling */
        .news-ticker {
            background-color: #1e293b;
            color: #f8fafc;
            padding: 8px 5%;
            font-size: 13px;
            font-weight: 600;
            border-bottom: 1px solid #334155;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }
        .news-ticker marquee {
            display: block;
            line-height: 1;
        }

        /* PWA Install Button Styling */
        #pwa-install-btn {
            display: none; /* Hidden by default */
            align-items: center;
            gap: 6px;
            background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 0 12px rgba(13, 148, 136, 0.4);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            animation: pulseGlow 2s infinite;
        }
        #pwa-install-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 0 18px rgba(13, 148, 136, 0.6);
        }
        @keyframes pulseGlow {
            0% { box-shadow: 0 0 12px rgba(13, 148, 136, 0.4); }
            50% { box-shadow: 0 0 20px rgba(13, 148, 136, 0.8); }
            100% { box-shadow: 0 0 12px rgba(13, 148, 136, 0.4); }
        }

        .mobile-menu-btn { display:none; background:transparent; border:1px solid #334155; color:#fff; border-radius:7px; padding:8px 11px; font-size:18px; cursor:pointer; }
        .mobile-menu-panel { display:none; background:#0f172a; border-top:1px solid #334155; padding:8px 16px 14px; }
        .mobile-menu-panel a { display:block; color:#f8fafc; text-decoration:none; padding:11px 8px; border-bottom:1px solid #1e293b; font-size:14px; font-weight:600; }
        .mobile-menu-panel a:hover { color:#5eead4; }
        @media (max-width: 968px) {
            .nav-links { display: none; }
            .mobile-menu-btn { display:block; }
            .mobile-menu-panel.open { display:block; }
            .nav-container { gap:8px; }
            .top-navbar { padding:12px 16px; }
            .nav-logo { font-size:17px; }
        }
    </style>

    <nav class="top-navbar">
        <a href="index.html" class="nav-logo">FARIDABAD PORTAL</a>
        
        <div class="nav-container">
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Plots ▾</a>
                    <div class="dropdown-content">
                        <div class="sub-dropdown">
                            <a href="javascript:void(0)">Ongoing Plot Projects <span class="sub-arrow">▸</span></a>
                            <div class="sub-dropdown-content">
                                <a href="dameera.html">DaMeera City</a>
                                <a href="gulmohar-maple.html">GulMohar by Emerald</a>
                                <a href="townfit-project.html">TownFit70</a>
                                <a href="silicon-valley-project.html">Silicon Valley</a>
                            </div>
                        </div>
                    </div>
                </li>
                
             <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Group Housing (Affordable) ▾</a>

    <div class="dropdown-content">
        <a href="runningprojects.html">Ongoing Projects</a>
        <a href="true-habitat.html">Affordable Flats True Habitat</a>
        <a href="sohaolivehomes.html">Soha Olive Homes</a>
        <a href="soha-olivehomes-draw-result.html">Soha Olive Homes Draw Result</a>
        <a href="compare.html">Advitya / Olive Homes Compare</a>

        <div class="sub-dropdown">
            <a href="javascript:void(0)">
                Upcoming Projects <span class="sub-arrow">▸</span>
            </a>

            <div class="sub-dropdown-content">
                <a href="emerald-sector-87-faridabad.html">Emerald Low-Rise Sector 87</a>
                <a href="upcoming-emerald-high-rise-2bhk-3bhk.html">Emerald 2BHK/3bhk 97 sector</a>
                                                                <a href="true-habitat.html">Affordable Flats True Habitat</a>
            </div>
        </div>
    </div>
</li>
                
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Buyer Guide ▾</a>
                    <div class="dropdown-content">
                        <a href="rera-guide-faridabad.html">RERA Guide</a>
                        <a href="freehold-vs-leasehold-property.html">Freehold vs Leasehold</a>
                        <a href="faridabad-vs-noida-greater-noida-property-investment.html">Faridabad vs Noida vs Greater Noida</a>
                        <a href="plot-buying-checklist-haryana.html">Plot Buying Checklist</a>
                        <a href="oc-vs-cc-property.html">OC vs CC</a>
                        <a href="property-documents-guide-haryana.html">Property Documents Guide</a>
                        <a href="ddjay-plots-haryana-guide.html">DDJAY Plot Guide</a>
                        <a href="affordable-vs-regular-housing-haryana.html">Affordable vs Regular Housing</a>
                    </div>
                </li>
                <li class="dropdown">
<a href="javascript:void(0)" class="dropbtn">Locations ▾</a>
<div class="dropdown-content">
<a href="sector-80-faridabad-property.html">Sector 80 – Ground View</a>
<a href="sector-81-faridabad-property.html">Sector 81 – Ground View</a>
<a href="property-in-sector-97-faridabad.html">Sector 97 – Ground View</a>
</div>
</li>
<li><a href="https://youtube.com/@apkaapnapropertyadvisor" target="_blank" rel="noopener noreferrer">YouTube</a></li>

                                <li><a href="about.html">About Us</a></li>
            </ul>

            <button id="pwa-install-btn">
                <span>📥</span> Install App
            </button>
            <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open navigation menu" aria-expanded="false">☰</button>
        </div>
    </nav>
    <div class="mobile-menu-panel" id="mobile-menu-panel" aria-label="Mobile navigation">
        <a href="index.html">🏠 Home</a>
        <a href="runningprojects.html">🏗️ Ongoing Group Housing Projects</a>
        <a href="upcoming.html">🚀 Upcoming Projects</a>
        <a href="dameera.html">🌳 DaMeera City</a>
        <a href="gulmohar-maple.html">🏘️ GulMohar / Maple</a>
        <a href="upcoming-emerald-high-rise-2bhk-3bhk.html">🏙️ Emerald Sector 97</a>
        <a href="bptp-skynest-sector-80-faridabad.html">☁️ BPTP Skynest Sector 80</a>
        <a href="property-in-sector-97-faridabad.html">📍 Sector 97 Ground View</a>
        <a href="sector-80-faridabad-property.html">📍 Sector 80 Ground View</a>
        <a href="sector-81-faridabad-property.html">📍 Sector 81 Ground View</a>
        <a href="rera-guide-faridabad.html">📘 RERA Guide</a>
        <a href="freehold-vs-leasehold-property.html">🏷️ Freehold vs Leasehold</a>
        <a href="faridabad-vs-noida-greater-noida-property-investment.html">⚖️ Faridabad vs Noida vs Greater Noida</a>
        <a href="plot-buying-checklist-haryana.html">✅ Plot Buying Checklist</a>
        <a href="oc-vs-cc-property.html">📄 OC vs CC</a>
        <a href="property-documents-guide-haryana.html">📚 Property Documents Guide</a>
        <a href="ddjay-plots-haryana-guide.html">🏘️ DDJAY Plot Guide</a>
        <a href="affordable-vs-regular-housing-haryana.html">🏠 Affordable vs Regular Housing</a>
                <a href="https://youtube.com/@apkaapnapropertyadvisor" target="_blank" rel="noopener noreferrer">▶️ YouTube Channel</a>
        <a href="about.html">ℹ️ About Us</a>
    </div>

    <div class="news-ticker">
        <marquee scrollamount="5">🆕 EMERALD SECTOR 97: Upcoming Sector 97! Luxury 2 BHK 1100 sq ft & 3 BHK 1500 sq ft Floors. 📞 98188 11971</marquee>
    </div>
`;

// Inject HTML into DOM
document.addEventListener("DOMContentLoaded", function() {
    let menuPlaceholder = document.getElementById("global-menu-placeholder");
    if (menuPlaceholder) {
        menuPlaceholder.innerHTML = globalMenuHTML;
        
        // Initialize PWA Installation Logic after HTML is injected
        initPWA();
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobilePanel = document.getElementById('mobile-menu-panel');
        if (mobileBtn && mobilePanel) {
            mobileBtn.addEventListener('click', function() {
                const open = mobilePanel.classList.toggle('open');
                mobileBtn.setAttribute('aria-expanded', String(open));
                mobileBtn.textContent = open ? '✕' : '☰';
            });
            mobilePanel.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    mobilePanel.classList.remove('open');
                    mobileBtn.setAttribute('aria-expanded', 'false');
                    mobileBtn.textContent = '☰';
                });
            });
        }
    }
});

// --- PWA Installation Logic Engine ---
function initPWA() {
    let deferredPrompt;
    const installBtn = document.getElementById('pwa-install-btn');

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent default browser banner
        e.preventDefault();
        // Store the event so it can be triggered later
        deferredPrompt = e;
        // Show the install button in the navbar
        if (installBtn) {
            installBtn.style.display = 'flex';
        }
    });

    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (!deferredPrompt) return;
            
            // Show the prompt
            deferredPrompt.prompt();
            
            // Wait for user response
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to install prompt: ${outcome}`);
            
            // Clear the prompt (can only be used once)
            deferredPrompt = null;
            
            // Hide the button
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
}
