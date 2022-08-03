window.addEventListener('load', function(){
    let  sliders = new Glider(document.querySelector('.gliders'), {
         slidesToShow:1,
         slidesToScroll: 1,
         draggable: true,
         dots: '.dots',
         arrows: {
             prev: '.glider-prev',
             next: '.glider-next'
         },
         responsive: [
             {
               // screens greater than >= 775px
               breakpoint: 800,
               settings: {
                 // Set to `auto` and provide item width to adjust to viewport
                 slidesToShow: 'auto',
                 slidesToScroll: 'auto',
                 
               }
             },{
               // screens greater than >= 1024px
               breakpoint: 1024,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 itemWidth: 150,
                 duration: 0.25
               }
             }
           ]
     })
     
     
   
     slideAutoPaly(sliders, '.gliders');
 
     function slideAutoPaly(glider, selector, delay = 3000, repeat = true) {
     let autoplay = null;
     const slidesCount = glider.track.childElementCount;
     let nextIndex = 1;
     let pause = true;
 
     function slide() {
         autoplay = setInterval(() => {
             if (nextIndex >= slidesCount) {
                 if (!repeat) {
                     clearInterval(autoplay);
                 } else {
                     nextIndex = 0;
                 }
             }
             glider.scrollItem(nextIndex++);
         }, delay);
     }
 
     slide();
 
     var element = document.querySelector(selector);
     element.addEventListener('mouseover', (event) => {
         if (pause) {
             clearInterval(autoplay);
             pause = false;
         }
     }, 300);
 
     element.addEventListener('mouseout', (event) => {
         if (!pause) {
             slide();
             pause = true;
         }
     }, 300);
 }
  
   })
   

 
 