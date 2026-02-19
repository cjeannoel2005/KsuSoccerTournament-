// Step 1: Save the like button element in a variable
let likeButton = document.querySelector('#like-btn');
// Step 2: Create function to add likes. This function makes it so that the "0" goes up when you press the button. We'll talk more about functions in a later class!
const  addLikes =() =>{
    /*const likeCount = document.querySelector('#like-count');
    likeCount.textContent = parseInt(likeCount.textContent);
    likeCount.textContent = Number(likeCount.textContent) +1;*/
    const likeCount = document.getElementById('like-count');
    let currentCount = parseInt(likeCount.textContent);
    likeCount.textContent = currentCount + 1;
 
}
// Step 3: Create an evet
// let nt listener that increases the likes when the user presses the like button

likeButton.addEventListener( 'click' ,addLikes);
// Step 4 (If time): Can you make it so that the number of likes increases when the user double taps the image? Hint: you will have to use a different kind of event!
let doubleClick = likeButton
// 1: Save the image in a variable
// 2: Add an event listener (addEventListener)
// Modal variables
const modal = document.getElementById('success-modal');
const modalText = document.getElementById('modal-text');
const modalImage = document.getElementById('modal-image');
let rotateFactor = 0;
let intervalId;

// Toggle modal function
const toggleModal = (person) => {
    // Show modal with personalized message
    modal.style.display = 'flex';
    modalText.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!`;
    
    // Start animation
    intervalId = setInterval(animateImage, 500);
    
    // Hide modal after 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
        clearInterval(intervalId);
    }, 5000);
};

// Animation function
function animateImage() {
    rotateFactor = rotateFactor === 0 ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}
