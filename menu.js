// menu.js - Global Navigation Component
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
        .nav-links li { margin-left: 24px; position: relative; padding: 10px 0; } 
        .nav-links a { color: #f8fafc; text-decoration: none; font-size: 14px; font-weight: 600; text-transform: uppercase; transition: color 0.3s; }
        .nav-links a:hover { color: #0d9488; }

        /* Dropdown Container */
        .dropdown-content { 
            display: none; 
            position: absolute; 
            background-color: #ffffff; 
            min-width: 220px; 
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
        .sub-dropdown {
            position: relative;
        }
        
        .sub-dropdown-content {
            display: none;
            position: absolute;
            background-color: #ffffff;
            min-width: 200px;
            box-shadow: 0px 10px 25px rgba(0,0,0,0.2);
            z-index: 10001;
            border-radius: 8px;
            top: 0; 
            left: 100%; /* Pushes the nested menu to the right */
            border-left: 3px solid #0d9488;
        }

        /* Show nested dropdown on hover */
        .sub-dropdown:hover .sub-dropdown-content {
            display: block;
        }
        
        .sub-arrow {
            float: right;
            font-size: 12px;
            margin-top: 2px;
        }

        @media (max-width: 968px) { .nav-links { display: none; } }
    </style>

    <nav class="top-navbar">
        <a href="index.html" class="nav-logo">FARIDABAD PORTAL</a>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Plots ▾</a>
                <div class="dropdown-content">
                    
                    <div class="sub-dropdown">
                        <a href="ongoing-plots.html">Ongoing Projects <span class="sub-arrow">▸</span></a>
                        <div class="sub-dropdown-content">
                            <a href="dameera.html">DaMeera City</a>
                        </div>
                    </div>
                    
                    <a href="upcoming-plots.html">Upcoming Projects</a>
                </div>
            </li>
            
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Group Housing ▾</a>
                <div class="dropdown-content">
                    <a href="runningprojects.html">Ongoing Projects</a>
                    
                    <div class="sub-dropdown">
                        <a href="upcoming.html">Upcoming Projects <span class="sub-arrow">▸</span></a>
                        <div class="sub-dropdown-content">
                            <a href="emerald-sector-87-faridabad.html">Emerald low rise sector 87 Luxury Leaving</a>
                        </div>
                    </div>
                </div>
            </li>
            
            <li><a href="video.html">Video</a></li>
            <li><a href="compare.html">Compare</a></li>
            <li><a href="about.html">About Us</a></li>
        </ul>
    </nav>
`;

document.addEventListener("DOMContentLoaded", function() {
    let menuPlaceholder = document.getElementById("global-menu-placeholder");
    if (menuPlaceholder) {
        menuPlaceholder.innerHTML = globalMenuHTML;
    }
});
