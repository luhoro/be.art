const paintList = [
  {
    id: 1,
    local: 'West Hartford - EUA',
    data: '2018',
    src: './img/g_2.jpg',
  },
  {
    id: 2,
    local: 'New York - EUA',
    data: '2017',
    src: './img/g_a.jpg',
  },
  {
    id: 3,
    local: 'São Paulo - BRA',
    data: '2021',
    src: './img/g_3.jpg',
  },
  {
    id: 4,
    local: 'São Paulo - BRA',
    data: '2019',
    src: './img/g_b.jpg',
  },
  {
    id: 5,
    local: 'Barcelona - ESP',
    data: '2018',
    src: './img/g_4.jpg',
  },
  {
    id: 6,
    local: 'New York - EUA',
    data: '2015',
    src: './img/g_c.jpg',
  },
  {
    id: 7,
    local: 'São Paulo - BRA',
    data: '2015',
    src: './img/g_5.jpg',
  },
  {
    id: 8,
    local: 'Boston - EUA',
    data: '2012',
    src: './img/g_d.jpg',
  },
  {
    id: 9,
    local: 'Melbourne - AUS',
    data: '2012',
    src: './img/g_6.jpg',
  },
  {
    id: 10,
    local: 'Recife - BRA',
    data: '2017',
    src: './img/g_e.jpg',
  }
]

const galerySection = document.querySelector('[data-gallery]')

function getCardGallery(paint) {
  galerySection.innerHTML += `
    <div class="gallery-card col-12 col-lg-6 col-xxl-4">
      <div class="small-image-container">
        <img src="${paint.src}" class="w-100 h-100 object-fit-cover small-image-container center-image" />
      </div>
      <h3>${paint.local}</h3>
      <p class="medium-color">Realizada em ${paint.data}</p>
      <button type="button" id="btn" data-id="${paint.id}" href="#" class="btn" data-bs-toggle="modal" data-bs-target="#modal">
        Detalhes
      </button>
    </div>
  `
}

paintList.map(paint => {
  getCardGallery(paint)
})


const modalSection = document.querySelector('#modal')

function getModalGallery(paint) {
  modalSection.innerHTML = `
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">${paint.local}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img class="w-100 h-100" src="${paint.src}" alt="${paint.local}">
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  `
}

const buttons = document.querySelectorAll('#btn')

buttons.forEach(button => button.addEventListener('click', event => {
  event.preventDefault()
  const cardId = event.target.dataset.id

  paintList.map(paint => {
    if (cardId == paint.id) {
      getModalGallery(paint)
      console.log(paint)
    } 
  })
}))