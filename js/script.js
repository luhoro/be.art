const galerySection = document.querySelector('[data-gallery]')

const paintList = [
  {
    autor: 'Obra de Arthur',
    data: '26/01/2018',
    src: '../img/g_2.jpg'
  },
  {
    autor: 'Grafite da Av. Paulista',
    data: '14/06/2021',
    src: '../img/g_3.jpg'
  },
  {
    autor: 'Arte em conjunto do Metrô',
    data: '19/01/2018',
    src: '../img/g_4.jpg'
  },
  {
    autor: 'Obra de Paulo',
    data: '12/12/2015',
    src: '../img/g_5.jpg'
  },
  {
    autor: 'Grafite no centro da cidade',
    data: '13/02/2012',
    src: '../img/g_6.jpg'
  }
]

function getCardGallery(paint) {
  galerySection.innerHTML += `
    <div class="gallery-card col-12 col-lg-6 col-xxl-4">
      <div class="small-image-container" id="${paint.src}">
        <img src="${paint.src}" class="w-100 h-100 object-fit-cover small-image-container center-image" />
      </div>
      <h3>${paint.autor}</h3>
      <p class="medium-color">Realizada em: ${paint.data}</p>
      <a href="#" class="btn">Detalhes</a>
    </div>
  `
}

paintList.forEach(paint => {
  getCardGallery(paint)
  console.log(paint)
})



