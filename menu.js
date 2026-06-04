// menu.js - Global Navigation Component for Faridabad Portal
const globalMenuHTML = `
    <style>
        .top-navbar { 
            display: flex; justify-content: space-between; align-items: center; 
            background-color: #0f172a; padding: 15px 5%; color: white; 
            border-bottom: 2px solid #0d9488; position: sticky; top: 0; z-index: 9999;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }
        .nav-logo { font-size: 20px; font-weight: 800; letter-spacing: 0.5px; color: #0d9488; text-decoration: none; }
        .nav-links { list-style: none; display: flex; margin: 0; padding: 0; }
        .nav-links li { margin-left: 24px; position: relative; }
        .nav-links a { color: #f8fafc; text-decoration: none; font-size: 14px; font-weight: 600; text-transform: uppercase; transition: color 0.3s; }
        .nav-links a:hover { color: #0d9488; }
        
        /* Dropdown Styling */
        .dropdown-content { 
            display: none; position: absolute; background-color: #ffffff; 
            min-width: 220px; box-shadow: 0px 10px 25px rgba(0,0,0,0.15); 
            z-index: 1000; border-radius: 8px; top: 100%; left: 0; 
            overflow: hidden; margin-top: 10px; 
        }
        .dropdown-content a { 
            color: #334155; padding: 14px 18px; display: block; 
            border-bottom: 1px solid #f1f5f9; text-transform: none; 
            font-size: 15px; font-weight: 500;
        }
        .dropdown-content a:hover { background-color: #f8fafc; color: #0d9488; padding-left: 22px; }
        .dropdown:hover .dropdown-content { display: block; }
        
        @media (max-width: 968px) { 
            .nav-links { display: none; } /* Mobile menu can be added later */
        }
    </style>

    <nav class="top-navbar">
        <a href="index.html" class="nav-logo">FARIDABAD PORTAL</a>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Plots ▾</a>
                <div class="dropdown-content">
                    <a href="ongoing-plots.html">Ongoing Projects</a>
                    <a href="upcoming-plots.html">Upcoming Projects</a>
                </div>
            </li>
            
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Group Housing ▾</a>
                <div class="dropdown-content">
                    <a href="runningprojects.html">Ongoing Projects</a>
                    <a href="upcoming.html">Upcoming Projects</a>
                    <a href="affordable-housing.html">Affordable Projects</a>
                </div>
            </li>
            
            <li><a href="video.html">Video</a></li>
            <li><a href="compare.html">Compare</a></li>
            <li><a href="about.html">About Us</a></li>
        </ul>
    </nav>
`;

// Injects the menu into the placeholder on page load
document.addEventListener("DOMContentLoaded", function() {
    let menuPlaceholder = document.getElementById("global-menu-placeholder");
    if (menuPlaceholder) {
        menuPlaceholder.innerHTML = globalMenuHTML;
    }
});
