document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.responsive-image');

    image.addEventListener('click', function () {
        // Change the image source when clicked
        this.src = 'new-image.jpg'; // Update with the path to your new image
    });
});
