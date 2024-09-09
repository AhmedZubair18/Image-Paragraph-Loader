const images = [
  "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwVd07rcBUxKVqf17F_Li5fy-a_zni7JuEQ&s",
];
const paragraphs = [
  "This is paragraph 1",
  "This is paragraph 2",
  "This is paragraph 3",
];

let currentIndex = 0;

function loadNext() {
 
  document.getElementById("image").src = images[currentIndex];
  document.getElementById("paragraph").textContent = paragraphs[currentIndex];

  const loader = document.getElementById("loader");
  loader.style.width = "0"; 

  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      currentIndex = (currentIndex + 1) % images.length;
      loadNext();
    } else {
      width++;
      loader.style.width = width + "%";
    }
  }, 50); 
}
loadNext();



