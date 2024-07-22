// Array of font family options
const fontFamilies = ['font1', 'font2', 'font3','font4','font5', 'font6', 'font7'];

// Array of color options
const colors = ['red', 'blue', 'lawngreen', 'orange', 'purple','violet','mediumslateblue', 'burlywood', 'hotpink', 'indianred', 'yellowgreen', 'teal', 'lightcyan', 'pink', 'yellow'];

// Get the span element by its id
const spanElement = document.getElementById('randomText');

function changeFontAndColor() {
    // Randomly select a font family and color
    const randomFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Apply the selected font family and color to the span element
    spanElement.className = randomFontFamily;
    spanElement.style.color = randomColor;
}

// Change font and color every 3 seconds (3000 milliseconds)
setInterval(changeFontAndColor, 2000);

// Call it once to set initial font and color
changeFontAndColor();

window.addEventListener('scroll', () => {
    const trigger = document.querySelector('.trigger');
    const container = document.querySelector('.container-1');
    const triggerPosition = trigger.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (triggerPosition < windowHeight) {
        container.style.opacity = 1;
        container.style.transform = 'translateY(0)';
    }
});


    let sliders=document.querySelectorAll(".main-carousel");
    sliders.forEach(function(slider){
        slider.style.opacity='0';
    })
    


    
    window.onload = function() {
        let loadingAnimations = document.querySelectorAll(".animated-background");
        loadingAnimations.forEach(function(loadingAnimation){
          loadingAnimation.style.display = 'none';
        })
        sliders.forEach(function(slider){
            slider.style.opacity='1';
        })
        //document.body.appendChild(sliders);
        let bgs=document.querySelectorAll(".sli");
        bgs.forEach(function(bg){
        bg.style.height='100%';
        })
        let contains=document.querySelectorAll(".contain");
        contains.forEach(function(contain){
            contain.style.opacity='1';
        })
       
      };
      