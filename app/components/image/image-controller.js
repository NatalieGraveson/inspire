import ImageService from "./image-service.js";

const _is = new ImageService()




function draw() {
  let newImage = _is.images
  document.getElementById("bg-image").innerHTML += newImage.Template
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('images', draw)
    _is.getApiImage()
  }

}

