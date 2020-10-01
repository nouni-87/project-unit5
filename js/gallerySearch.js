
// const searchBar = document.getElementById('search');
// let gallery = document.getElementsByClassName('gallery-pic');


// document.getElementById('search').addEventListener('keyup', function(e) {
//     const searchBar = document.getElementById('search');
//     let searchInput = e.target.value.toUpperCase();

//     for (i = 0; i < gallery.length; i++) {
//         const searchField = gallery[i].getAttribute('alt').toUpperCase()
//         if (searchField.includes(searchInput)) {
//             gallery[i].style.display = '';
//         } else {
//             gallery[i].style.display = 'none';
//         }
//     }
// })

// function gallerySearch() {
//     var searchbar = document.getElementById('search');
//     searchBar.value = searchBar.value.toUpperCase();
//     let searchImg = document.getElementsByClassName('gallery-pic');
//     for (i = 0; i < searchImg.length; i++) {
//         if (searchImg[i].getAttribute('alt').toUpperCase()) {
//             searchImg[i].style.display = "";

//         } else {
//             searchImg.style.display = "none";
//         }
//     }
// }


document.getElementById("fname").addEventListener("keyup", gallerySearch);

function gallerySearch() {
  let searchBar = document.getElementById("search");
  searchBar.value = searchBar.value.toUpperCase();
  let searchImg = document.getElementsByClassName('gallery-pic');
    for (i = 0; i < searchImg.length; i++) {
        if (searchImg[i].getAttribute('alt')) {
            searchImg[i].style.display = "";

        } else {
            searchImg.style.display = "none";
        }
    }

   
}