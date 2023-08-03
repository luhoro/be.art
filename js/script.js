const paintList = [
  {
    local: 'West Hartfod - EUA',
    data: '2018',
    src: './img/g_2.jpg',
  },
  {
    local: 'New York - EUA',
    data: '2017',
    src: './img/g_a.jpg',
  },
  {
    local: 'São Paulo - BRA',
    data: '2021',
    src: './img/g_3.jpg',
  },
  {
    local: 'São Paulo - BRA',
    data: '2019',
    src: './img/g_b.jpg',
  },
  {
    local: 'Barcelona - ESP',
    data: '2018',
    src: './img/g_4.jpg',
  },
  {
    local: 'New York - EUA',
    data: '2015',
    src: './img/g_c.jpg',
  },
  {
    local: 'São Paulo - BRA',
    data: '2015',
    src: './img/g_5.jpg',
  },
  {
    local: 'Boston - EUA',
    data: '2012',
    src: './img/g_d.jpg',
  },
  {
    local: 'Melbourne - AUS',
    data: '2012',
    src: './img/g_6.jpg',
  },
  {
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
      <a href="#" class="btn">Detalhes</a>
    </div>
  `
}

paintList.forEach(paint => {
  getCardGallery(paint)
  console.log(paint)
})

const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => button.addEventListener('click', event => event.preventDefault()))
