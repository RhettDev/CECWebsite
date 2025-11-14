let firstIndex = 0;
let lastIndex = 10;

function updateEvents() {
    fetch('data/eventData.json')
        .then(res => res.json())
        .then(events => {
            const container = document.getElementById('pastEventsContainer');
            container.innerHTML = '';
            events.slice(upStart, upLast).forEach(event => {
            });
        });
}

function paginateEvents() {

}

function updatePagination() {

}

function updateIndexes() {
    const hash = location.hash.slice(1);
    const pageNum = parseInt(hash) || 1;
    console.log(pageNum);

    fetch('data/pastEvents.json')
    .then(res => res.json())
    .then(events => {
        const pages = Math.ceil(events.length / 10);
        for (let i = 1; i <= pages; i++){
            document.getElementById("pageNumber" + i).classList.remove("active");
        }
    });

    var currentPage = document.getElementById("pageNumber" + pageNum);
    console.log("pageNumber" + pageNum);
    currentPage.classList.add("active");
    
}
