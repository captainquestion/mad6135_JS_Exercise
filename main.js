function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function startRain() {
    const square = document.getElementById('square');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  
    square.style.top = '0px';
    square.style.left = Math.random() * (vw - 50) + 'px'; // Random horizontal position within the viewport
    square.style.backgroundColor = getRandomColor();
  
    let dropInterval = setInterval(() => {
      square.style.backgroundColor = getRandomColor();
      square.style.top = (parseInt(square.style.top) + 100) + 'px';
  
      // If square reaches the bottom of the viewport, reset it
      if (parseInt(square.style.top) >= vh) {
        clearInterval(dropInterval);
        startRain();
      }
    }, 1000);
  }
  
  startRain();