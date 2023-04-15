// Get the chapter-sidebar element
const chapterSidebar = document.querySelector('.chapter-sidebar');
const blogContent = document.querySelector('.blog-content');
const formPosition = window.scrollY + document.querySelector('.contact_section').getBoundingClientRect().top;

// Function to check if window scroll is below the top offset
function checkScroll() {
  if (window.pageYOffset >= 400 && window.pageYOffset <= formPosition - 400) {
    chapterSidebar.classList.add('sidebar-sticky');
  } else {
    chapterSidebar.classList.remove('sidebar-sticky');
  }
}


// Attach the checkScroll function to the window scroll event
window.addEventListener('scroll', checkScroll);