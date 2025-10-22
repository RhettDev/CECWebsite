// script file for sponsor.html

let _sponsorCache = null;

function fetchSponsors(){
    if(_sponsorCache) return Promise.resolve(_sponsorCache);
    return fetch('data/currentSponsors.json')
        .then(res => {
            if(!res.ok) throw new Error('failed to fetch sponsorData.json: ' + res.status);
            return res.json();
        })
        .then(data => {_sponsorCache = data; return data;})
        .catch(err => {console.error(err); throw err;})
}

function sponsorLevel(level){
    switch((level||'').toLowerCase()){
        case 'platinum': return 'sponsorHighlightPlat';
        case 'gold': return 'sponsorHighlightGold';
        case 'silver': return 'sponsorHighlightSilv';
        case 'other': return 'sponsorHighlightOthe';
        default: return '';
    }
}

function getSponsors(level, groupID){
    fetchSponsors().then(sponsor => {
        const container = document.getElementById(groupID);
        
        if(!Array.isArray(sponsor) || sponsor.length === 0){
            container.innerHTML = `<!-- no ${level} sponsors -->`;
            return;
        }

        const parent = container.parentElement;
        const heading = parent ? parent.querySelector('.txSubtitle') : null;

        const filtered = Array.isArray(sponsor) ? sponsor.filter(s => (s.level || '').toLowerCase() === (level || '').toLowerCase()) : [];

        if(!filtered.length){
            if (heading) heading.remove();
            container.innerHTML = `<!-- no ${level} sponsors -->`
            return;
        }

        const cssClass = sponsorLevel(level);
        const html = filtered.map(s => {
            const name = s.name ? String(s.name).replace(/"/g, '&quot;') : '';
            const logo = s.blueLogo ? String(s.blueLogo).replace(/"/g, '&quot;') : '';
            const color = Math.random() < 0.5 ? '#5271ff' : '#FFEB31';
            return `<img alt="${name}" src="${logo}" class="${cssClass}" style="border-color: ${color}">`;
        }).join('\n');
        container.innerHTML = html;
    })
}