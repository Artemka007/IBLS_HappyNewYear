class Slider {
    constructor(imgs, urls) {
        this.imgs = imgs
        this.urls = urls
        this.url = null
        this.id = -1
        this.el = document.getElementById("slider")
    }

    startSlider(url) {
        this.el.style.display = "flex"
        this.url = url
        this.id = this.urls.indexOf(url)
        this.el.appendChild(document.createElement("img"))
        this.setUrl()
    }

    stopSlider() {
        this.url = null
        this.el.removeChild(this.el.getElementsByTagName("img")[0])
        this.el.style.display = "none"
    }

    next() {
        if (this.id + 1 === this.urls.length) this.id = 0
        else this.id += 1
        this.el.removeChild(this.el.getElementsByTagName("img")[0])
        this.el.appendChild(document.createElement("img"))
        this.setUrl()
    }

    previous() {
        if (this.id === 0) this.id = this.urls.length - 1
        else this.id -= 1
        this.el.removeChild(this.el.getElementsByTagName("img")[0])
        this.el.appendChild(document.createElement("img"))
        this.setUrl()
    }

    setUrl() {
        let img = this.el.getElementsByTagName("img")[0]
        this.url = this.urls[this.id]
        img.src = `/media/${this.url}`
        this.checkImgSize(img)
    }

    checkImgSize(img) {
        let ww = window.innerWidth,
            wh = window.innerHeight
        let w = img.offsetWidth,
            h = img.offsetHeight
        if (w > h) {
            img.style.width = ww <= 1024 ? `${ww}px` : "1024px"
            img.style.height = "auto"
            if (img.offsetWidth > wh) {
                img.style.height = "100%"
                img.style.width = "auto"
            }
        } else {
            img.style.height = wh <= 1024 ? `${wh}px` : "1024px"
            img.style.width = "auto"
            if (img.offsetWidth > ww) {
                img.style.height = "auto"
                img.style.width = "100%"
            }
        }
    }
}