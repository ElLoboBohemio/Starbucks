new Glider(document.querySelector('.carousel__lista'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: '.carousel__indicador',
  arrows: {
    prev: '.carousel__prev',
    next: '.carousel__next'
  },

  responsive:[
    {
      breakpoint:450,
      setting: {
        slidesToShow: 2,
				slidesToScroll: 2
      }
    },

    {
      breakpoint:800,
      setting: {
				slidesToShow: 4,
				slidesToScroll: 4
      }
    }
  ]

})