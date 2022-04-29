// controlling the design image gallery
let items = document.querySelectorAll('.design .bottom .items li');
items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.design .bottom img').setAttribute('src', item.getAttribute('data-src'));

  })
})

