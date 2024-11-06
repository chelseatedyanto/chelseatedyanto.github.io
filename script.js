document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    const offset = 80; // Adjust this value as needed

    // Smooth scroll function
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    }

    // Attach smooth scroll event listeners to all relevant links
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    // Carousel functionality
    //////////////////////////////////////////this is cleanairto carousel
    const imageUrls = [
        './images/cleanairto.png',
        './images/cleanairto2.JPG',
        './images/cleanairto3.JPG'
        // Add more image URLs as needed
    ];

    let currentImageIndex = 0;

    // Function to display current image
    function showCurrentImage() {
        const imageUrl = imageUrls[currentImageIndex];
        document.getElementById('carousel-image').src = imageUrl;
        updateArrows();
    }

    // Function to update arrow visibility
    function updateArrows() {
        const prevArrow = document.getElementById('prev-arrow');
        const nextArrow = document.getElementById('next-arrow');

        if (currentImageIndex === 0) {
            prevArrow.classList.add('disabled');
        } else {
            prevArrow.classList.remove('disabled');
        }

        if (currentImageIndex === imageUrls.length - 1) {
            nextArrow.classList.add('disabled');
        } else {
            nextArrow.classList.remove('disabled');
        }
    }

    // Show initial image
    showCurrentImage();

    // Function to show next image
    function showNextImage() {
        if (currentImageIndex < imageUrls.length - 1) {
            currentImageIndex++;
            showCurrentImage();
        }
    }

    // Function to show previous image
    function showPreviousImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showCurrentImage();
        }
    }

    // Event listener for next arrow
    document.getElementById('next-arrow').addEventListener('click', showNextImage);

    // Event listener for previous arrow
    document.getElementById('prev-arrow').addEventListener('click', showPreviousImage);


    //////////////////////////////////////////////////////////////////////////// this is my personal website project carousel

    // Carousel functionality for another section
const imageUrls1 = [
    './images/website.png',
    './images/website2.png',
    './images/website3.png',
    './images/website4.png'
    // Add more image URLs as needed
];

let currentImageIndex1 = 0;

// Function to display current image in section 1
function showCurrentImage1() {
    const imageUrl = imageUrls1[currentImageIndex1];
    document.getElementById('carousel-image1').src = imageUrl;
    updateArrows1();
}

// Function to update arrow visibility in section 1
function updateArrows1() {
    const prevArrow = document.getElementById('prev-arrow1');
    const nextArrow = document.getElementById('next-arrow1');

    if (currentImageIndex1 === 0) {
        prevArrow.classList.add('disabled');
    } else {
        prevArrow.classList.remove('disabled');
    }

    if (currentImageIndex1 === imageUrls1.length - 1) {
        nextArrow.classList.add('disabled');
    } else {
        nextArrow.classList.remove('disabled');
    }
}

// Show initial image in section 1
showCurrentImage1();

// Function to show next image in section 1
function showNextImage1() {
    if (currentImageIndex1 < imageUrls1.length - 1) {
        currentImageIndex1++;
        showCurrentImage1();
    }
}

// Function to show previous image in section 1
function showPreviousImage1() {
    if (currentImageIndex1 > 0) {
        currentImageIndex1--;
        showCurrentImage1();
    }
}

// Event listener for next arrow in section 1
document.getElementById('next-arrow1').addEventListener('click', showNextImage1);

// Event listener for previous arrow in section 1
document.getElementById('prev-arrow1').addEventListener('click', showPreviousImage1);


 //////////////////////////////////////////////////////////////////////////// this is my recipe app carousel

   // Carousel functionality for another section
const imageUrls2 = [
    './images/recipe1.png',
    './images/recipe2.png',
    './images/recipe3.png',
    './images/recipe4.png'
    // Add more image URLs as needed
];

let currentImageIndex2 = 0;

// Function to display current image in section 2
function showCurrentImage2() {
    const imageUrl = imageUrls2[currentImageIndex2];
    document.getElementById('carousel-image2').src = imageUrl;
    updateArrows2();
}

// Function to update arrow visibility in section 2
function updateArrows2() {
    const prevArrow = document.getElementById('prev-arrow2');
    const nextArrow = document.getElementById('next-arrow2');

    if (currentImageIndex2 === 0) {
        prevArrow.classList.add('disabled');
    } else {
        prevArrow.classList.remove('disabled');
    }

    if (currentImageIndex2 === imageUrls2.length - 1) {
        nextArrow.classList.add('disabled');
    } else {
        nextArrow.classList.remove('disabled');
    }
}

// Show initial image in section 2
showCurrentImage2();

// Function to show next image in section 2
function showNextImage2() {
    if (currentImageIndex2 < imageUrls2.length - 1) {
        currentImageIndex2++;
        showCurrentImage2();
    }
}

// Function to show previous image in section 2
function showPreviousImage2() {
    if (currentImageIndex2 > 0) {
        currentImageIndex2--;
        showCurrentImage2();
    }
}

// Event listener for next arrow in section 2
document.getElementById('next-arrow2').addEventListener('click', showNextImage2);

// Event listener for previous arrow in section 2
document.getElementById('prev-arrow2').addEventListener('click', showPreviousImage2);

    
});

