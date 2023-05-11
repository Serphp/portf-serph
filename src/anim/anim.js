function blinkImage() {
    const image = document.getElementById('myImage');
    setInterval(() => {
      image.style.opacity = image.style.opacity === '0' ? '1' : '0';
    }, 500);
  }
  const image = document.getElementById('myImage');
image.addEventListener('mouseover', blinkImage);
