// const heading = document.querySelectorA('heading');

// heading.addEventListener('mouseenter',function(){
//     heading.style.fontWeight = 'bold';
//     // heading.style.color = 'gray'
// })

// heading.addEventListener('mouseleave',function(){
//     heading.style.fontWeight = 'lighter';
//     // heading.style.color = 'black'
// })


const headings = document.querySelectorAll('h2'); // Select all h2 elements

headings.forEach((heading) => {
  heading.addEventListener('mouseenter', function() {
    heading.style.fontWeight = 'bold';
    heading.style.color = 'gray'; // optional
  });

  heading.addEventListener('mouseleave', function() {
    heading.style.fontWeight = 'lighter';
    heading.style.color = 'black'; // optional
  });
});
