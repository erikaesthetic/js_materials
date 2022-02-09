const html = document.documentElement;
const canvas = html.querySelector('.scrolling_section');
const context = canvas.getContext('2d');

const currentFrame = index => (
    `https://aesthetictest1.fra1.digitaloceanspaces.com/scene102${index.toString().padStart(3, '0')}-min.jpg`
)

const frameCount = 360;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const img = new Image();
img.src = currentFrame(0)
img.onload = function () {
    context.drawImage(img, 0, 0)
}

const updateImage = index => {
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0)
}

const preloadImage = () => {
    for (let i = 1; i < frameCount; i++){
        const img = new Image();
        img.src = currentFrame(i)
    }
}

let state = true ;
if(state == true) {
    preloadImage()
    state = false
}else {}

window.addEventListener("scroll", () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight-window.innerHeight
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.min(frameCount - 1, Math.floor(
        scrollFraction * frameCount
    ))
    console.log(frameIndex)
    requestAnimationFrame(() => updateImage(frameIndex + 1))
})