document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");
    const leftArrow = document.querySelector(".lightbox .left-arrow");
    const rightArrow = document.querySelector(".lightbox .right-arrow");
    const filterButtons = document.querySelectorAll('.filters button');
    const galleryItems2 = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            galleryItems2.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Update active button styling (optional)
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    let currentIndex = 0;

    function openLightbox(index) {
        lightboxImg.src = galleryItems[index].src;
        lightbox.style.display = "block";
        currentIndex = index;
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        openLightbox(currentIndex);
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openLightbox(currentIndex);
    }

    galleryItems.forEach(function(item, index) {
        item.addEventListener("click", function() {
            openLightbox(index);
        });
    });

    closeBtn.addEventListener("click", closeLightbox);
    leftArrow.addEventListener("click", showPreviousImage);
    rightArrow.addEventListener("click", showNextImage);

    lightbox.addEventListener("click", function(event) {
        if (event.target !== lightboxImg && event.target !== leftArrow && event.target !== rightArrow) {
            closeLightbox();
        }
    });
});
