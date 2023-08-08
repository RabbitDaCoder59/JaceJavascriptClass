const getImages = async () => {
  const options = {
    headers: {
      "Authorization": "jNo6APVMVV3d8tDMdDIlZcMQTrA8fPn6ugc1yvYxBWHSPbQZsus4v2bp"
    }
  }

  const request = await fetch("https://api.pexels.com/v1/search?query=nature&size=small&per_page=20", options)
  const data = await request.json()

  console.log("API RESPONSE -> ", data)
  populateSlider(data.photos)
}

const populateSlider = (photos = []) => {
  const sliderContainer = document.querySelector(".owl-carousel")
  sliderContainer.innerHTML = ""

  photos.forEach(photo => {
    sliderContainer.innerHTML += ` 
    <div class="slider"> 
      <img src="${photo.src.original}" class="slider-image" alt="${photo.alt}">
      <div class="details">
        <h3 class="image-title">${photo.alt}</h3>
        <h4 class="photographer">${photo.photographer}</h4>
      </div>
    </div>
    `
  })

  sliderInit()
}

const test = {
  alt: "Mountain Covered Snow Under Star",
  avg_color: "#5D5A63",
  height: 4463,
  id: 572897,
  liked: false,
  photographer: "eberhard grossgasteiger",
  photographer_id: 121938,
  photographer_url: "https://www.pexels.com/@eberhardgross",
  src: {
    landscape:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    large:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    large2x:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    medium:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=350",
    original:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
    portrait:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    small:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=130",
    tiny: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
  url: "https://www.pexels.com/photo/mountain-covered-snow-under-star-572897/"
};

const sliderInit = async () => {
  const owl = $('.owl-carousel').owlCarousel({
    items: 1,
    margin:15,
    loop: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 1000
  })

  // Prev
  // Vanilla JS
  // const prevBtn = document.querySelector("#prev")
  document.querySelector("#prev").addEventListener("click",  () => owl.trigger("prev.owl.carousel"))

  // Jquery
  $('#prev').click(() => owl.trigger("prev.owl.carousel"))

  // Next
  $('#next').click(() => {
    owl.trigger("next.owl.carousel")
  })
}

getImages()