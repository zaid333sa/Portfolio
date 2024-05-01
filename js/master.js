//GSAP for smooth scroll animation
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


//code for blob effect to work in the background
document.addEventListener('mousemove', event => {
    const blob = document.getElementById('blob');
    blob.animate({
        left: `${event.pageX - 50}px`,
        top: `${event.pageY - 50}px`
    }, {duration: 3000, fill: 'forwards'}
)
});

// code for tilt effect on image in hero section
document.addEventListener('mousemove', (e) => {
    const card = document.getElementById('right');
    const rect = card.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const deltaX = mouseX - cardX;
    const deltaY = mouseY - cardY;
    const percentX = deltaX / window.innerWidth;
    const percentY = deltaY / window.innerHeight;
    const rotationDegrees = 20; // Max rotation in degrees

    const tiltX = percentY * rotationDegrees * 2;
    const tiltY = percentX * rotationDegrees * 2;

    card.style.transform = `translate(-50%, -50%) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });



  // glow effect when hover on languages cards
const handleOnMouseMove = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
  
  for (const card of document.querySelectorAll(".languages-container .box")) {
    card.onmousemove = handleOnMouseMove;
  }

  for (const pcard of document.querySelectorAll(".project-box")) {
    pcard.onmousemove = handleOnMouseMove;
  }



  // code for img appear when hover on experience box

  document.querySelectorAll('.exp-box').forEach((box) => {
    box.addEventListener('mousemove', (e) => {
      const img = box.querySelector('.follow-cursor-img');
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left - img.width / 2;
      const y = e.clientY - rect.top - img.height / 2;
  
      // Set the image position to the mouse position
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
  
      // Calculate the distance to the edges
      const distanceToLeftEdge = x;
      const distanceToRightEdge = rect.width - x - img.width;
      const distanceToTopEdge = y;
      const distanceToBottomEdge = rect.height - y - img.height;
  
      // Determine the closest edge
      const minDistanceToEdge = Math.min(
        distanceToLeftEdge,
        distanceToRightEdge,
        distanceToTopEdge,
        distanceToBottomEdge
      );
  
      // Fade out the image if it's within 5px of an edge
      if (minDistanceToEdge < 5) {
        img.style.opacity = 0;
      } else {
        img.style.opacity = 1;
      }
  
      // Rotate the image based on its position
      if (distanceToLeftEdge < 20) {
        img.style.transform = 'rotate(-10deg)';
      } else if (distanceToRightEdge < 20) {
        img.style.transform = 'rotate(10deg)';
      } else {
        img.style.transform = 'rotate(0deg)';
      }
    });
    // Add mouseleave event listener to fade out the image
  box.addEventListener('mouseleave', () => {
    const img = box.querySelector('.follow-cursor-img');
    if (img.style.opacity === '1') {
      setTimeout(() => {
        img.style.opacity = 0;
      }, 1000); // Fade out after 1 second
    }
  });
  });

  // remove blob when reachin the end of the page
  window.addEventListener('scroll', () => {
    const element = document.getElementById('blob');
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollPosition = window.pageYOffset;
  
    if (currentScrollPosition >= scrollableHeight) {
      // User is at the bottom of the page
      element.style.display = 'none';
    } else {
      // User is not at the bottom of the page
      element.style.display = 'block'; // Or any other display value that was initially set
    }
  });
  
  
  