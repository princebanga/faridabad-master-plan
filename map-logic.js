function initMapLogic(map, allMarkers, layers) {
    L.control.layers(null, { 
        "🟢 Plots": layers["Plots"], 
        "🔵 High-Rise": layers["High-Rise"], 
        "🟡 Low-Rise": layers["Low-Rise"], 
        "🟠 Affordable": layers["Affordable"],
        "🔘 Future": layers["Future"] 
    }, { collapsed: false }).addTo(map);

    setTimeout(() => {
        const ctrl = document.querySelector('.leaflet-control-layers');
        if (ctrl) {
            ctrl.style.top = '150px'; ctrl.style.left = '10px';
            const box = document.createElement('div');
            box.innerHTML = `<div class="control-header" id="handle"><span>Project Filters</span><span id="min" style="cursor:pointer">−</span></div><div class="search-area"><input type="text" id="pSearch" placeholder="Search..." onkeyup="doSearch()"></div>`;
            ctrl.prepend(box);

            window.doSearch = function() {
                let val = document.getElementById('pSearch').value.toLowerCase();
                allMarkers.forEach(m => { if(val.length > 1 && m.projectName.includes(val)){ map.setView(m.getLatLng(), 1); m.openPopup(); } });
            };

            document.getElementById('min').onclick = function() {
                const list = ctrl.querySelector('.leaflet-control-layers-list'), sea = ctrl.querySelector('.search-area');
                const isH = list.style.display === 'none';
                list.style.display = sea.style.display = isH ? 'block' : 'none';
                this.innerText = isH ? '−' : '+';
            };

            let drag = false, off = [0, 0];
            const start = (e) => { if(e.target.id === 'pSearch' || e.target.id === 'min') return; drag = true; let ev = e.type.includes('touch') ? e.touches[0] : e; off = [ctrl.offsetLeft - ev.clientX, ctrl.offsetTop - ev.clientY]; };
            const move = (e) => { if(!drag) return; let ev = e.type.includes('touch') ? e.touches[0] : e; ctrl.style.left = (ev.clientX + off[0]) + 'px'; ctrl.style.top = (ev.clientY + off[1]) + 'px'; ctrl.style.right = 'auto'; };
            document.getElementById('handle').addEventListener('mousedown', start);
            document.getElementById('handle').addEventListener('touchstart', start);
            document.addEventListener('mousemove', move);
            document.addEventListener('touchmove', move);
            document.addEventListener('mouseup', () => drag = false);
            document.addEventListener('touchend', () => drag = false);
        }
    }, 1000);
}
