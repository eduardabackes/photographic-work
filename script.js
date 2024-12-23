function showDetails(photoId, caption, location) {
    // Get the photo detail popup and elements for caption and location
    const photoDetail = document.getElementById('photo-detail');
    const captionElement = document.getElementById('photo-caption');
    const locationElement = document.getElementById('photo-location');

    // Set the content for the photo details
    captionElement.textContent = caption;  // Set the caption text
    locationElement.textContent = location;  // Set the location text

    // Show the photo detail popup
    photoDetail.style.display = 'flex';
function hideDetails() {
    // Close the photo detail popup when clicked outside
   const photoDetail = document.getElementById('photo-detail');
   photoDetail.style.display = 'none';
}