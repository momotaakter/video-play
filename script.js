// Blog Pagination Logic
const blogsPerPage = 1; // Number of blogs per page
let currentPage = 1;

const blogContainer = document.getElementById("blog-container");
const paginationButtons = document.querySelectorAll(".page-btn");

// Show blogs for the selected page
const showBlogs = (page) => {
  const blogs = document.querySelectorAll(".blog-card");
  blogs.forEach((blog, index) => {
    if (index >= (page - 1) * blogsPerPage && index < page * blogsPerPage) {
      blog.style.display = "block";
    } else {
      blog.style.display = "none";
    }
  });
};

// Pagination Button Click Event
paginationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentPage = Number(button.dataset.page);
    showBlogs(currentPage);
  });
});

// Initial Page Load
showBlogs(currentPage);

// Search Bar Logic
const searchBar = document.getElementById("search-bar");
const blogs = document.querySelectorAll(".blog-card");

searchBar.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();
  let matchFound = false;

  blogs.forEach((blog) => {
    const title = blog.querySelector(".blog-title").innerText.toLowerCase();
    if (title.includes(searchText)) {
      blog.style.display = "block";
      matchFound = true;
    } else {
      blog.style.display = "none";
    }
  });

  // Check if any match was found
  const noResultMessage = document.getElementById("no-result-message");
  if (!matchFound) {
    noResultMessage.style.display = "block";
  } else {
    noResultMessage.style.display = "none";
  }
});

// Read More Button Logic
const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const description = button.previousElementSibling; // The <p> element
    const extraText = description.querySelector(".extra-text");

    if (extraText.style.display === "none" || extraText.style.display === "") {
      // Show extra text
      extraText.style.display = "inline";
      button.innerText = "Read Less";
    } else {
      // Hide extra text
      extraText.style.display = "none";
      button.innerText = "Read More";
    }
  });
});
