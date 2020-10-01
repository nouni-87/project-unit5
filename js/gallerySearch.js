
const searchBar = document.getElementById('search');
let gallery = document.getElementsByClassName('gallery-pic');


document.getElementById('search').addEventListener('keyup', function(e) {
    let searchBar = document.getElementById('search');
    searchBar.value = searchBar.value.toUpperCase();
    let searchInput = e.target.value.toUpperCase();

    for (i = 0; i < gallery.length; i++) {
        const searchField = gallery[i].getAttribute('data-caption').toUpperCase()
        if (searchField.includes(searchInput)) {
            gallery[i].style.display = '';
        } else {
            gallery[i].style.display = 'none';
        }
    }
   
})

