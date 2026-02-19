/*** You will not need this file until Unit 5 ***/

/*** Dark Mode ***
 */
/*** Dark Mode ***/


/*
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
// Step 1: Select the theme button
const themeButton = document.getElementById('theme-button');

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');
}

// Step 3: Register a 'click' event listener for the theme button
themeButton.addEventListener('click', toggleDarkMode);


// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***/
document.addEventListener('DOMContentLoaded', function() {
  const rsvpForm = document.getElementById('rsvp-form');
  let rsvpCount = 3;
  
  if (rsvpForm) {
      rsvpForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const state = document.getElementById('state').value;
          
          // Basic validation
          if (name.length < 2 || state.length < 2 || !email.includes('@')) {
              alert('Please fill out all fields correctly.');
              return;
          }
          
          // Create person object
          const person = {
              name: name,
              email: email,
              state: state
          };
          
          // Create new participant element
          const participantElement = document.createElement('p');
          participantElement.textContent = `⚽ ${name} from ${state} has RSVP'd.`;
          
          // Add to participants list
          document.querySelector('.rsvp-participants').appendChild(participantElement);
          
          // Update count
          rsvpCount++;
          document.getElementById('rsvp-count').textContent = 
              `⭐ ${rsvpCount} soccer fans have RSVP'd to this event!`;
          
          // Show success modal
          toggleModal(person);
          
          // Reset form
          rsvpForm.reset();
      });
  }
});

  /*** Form Validation ***/
/*const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  // Clear any previous error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(msg => msg.remove());

  // Get all form inputs
  const rsvpInputs = document.getElementById("rsvp-form").elements;
  
  // Validate each input
  for (let i = 0; i < rsvpInputs.length; i++) {
      const input = rsvpInputs[i];
      
      // Skip the submit button
      if (input.type === "submit") continue;

      // Basic validation - minimum length
      if (input.value.length < 2) {
          containsErrors = true;
          input.classList.add('error');
          
          // Add error message
          const errorMsg = document.createElement('div');
          errorMsg.className = 'error-message';
          errorMsg.textContent = `${input.name} must be at least 2 characters`;
          input.after(errorMsg);
      } else {
          input.classList.remove('error');
      }

      // Special validation for email
      if (input.id === "email" && !input.value.includes('@')) {
          containsErrors = true;
          input.classList.add('error');
          
          // Add error message if not already there
          if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
              const errorMsg = document.createElement('div');
              errorMsg.className = 'error-message';
              errorMsg.textContent = 'Email must contain @ symbol';
              input.after(errorMsg);
          }
      }
  }

  // If no errors, submit the form
  if (!containsErrors) {
      addParticipant(event);
      
      // Clear form fields
      for (let i = 0; i < rsvpInputs.length; i++) {
          if (rsvpInputs[i].type !== "submit") {
              rsvpInputs[i].value = "";
          }
      }
  }

  const addParticipant = (event) => {
    const name = document.getElementById('name').value;
    const state = document.getElementById('state').value;
    
    const participantElement = document.createElement('p');
    participantElement.textContent = `⚽ ${name} from ${state} has RSVP'd.`;
    
    document.querySelector('.rsvp-participants').appendChild(participantElement);
    
    rsvpCount++;
    document.getElementById('rsvp-count').textContent = 
        `⭐ ${rsvpCount} soccer fans have RSVP'd to this event!`;
}
}*/function validateForm() {
    // Create person object
    const person = {
        name: document.getElementById('name').value,
        hometown: document.getElementById('hometown').value,
        email: document.getElementById('email').value
    };

    // Validation checks using the person object
    if (person.name.length < 2) {
        alert('Name must be at least 2 characters long.');
        return false;
    }
    if (person.hometown.length < 2) {
        alert('Hometown must be at least 2 characters long.');
        return false;
    }
    if (!person.email.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }

    addParticipant(person);
    toggleModal(person); 
    return false; 
}
/* */
const submitButton = document.getElementById('submit-button');
function addParticipant(person) {
    const newParticipant = document.createElement('li');
    newParticipant.textContent = `🎟️ ${person.name} (${person.hometown}) will be there!`;
    document.getElementById('participants').appendChild(newParticipant);
}

// Replace the old event listener with the new validation one
document.getElementById('rsvp-form').addEventListener('submit', validateForm);


// Modal variables
// Modal variables
const modal = document.getElementById('success-modal');
const modalText = document.getElementById('modal-text');
const modalImage = document.getElementById('modal-image');
let rotateFactor = 0;
let animationInterval;

// Toggle modal function
const toggleModal = (person) => {
    // Set personalized message
    if (person && person.name) {
        modalText.textContent = `Thanks for RSVPing, ${person.name}! We'll see you there!`;
    } else {
        modalText.textContent = "Thank you for RSVPing!";
    }
    
    // Show modal
    modal.style.display = 'flex';
    
    // Start animation
    animationInterval = setInterval(animateImage, 500);
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
        clearInterval(animationInterval);
        resetImage();
    }, 5000);
};

// Image animation
const animateImage = () => {
    rotateFactor = rotateFactor === 0 ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

// Reset image position
const resetImage = () => {
    modalImage.style.transform = 'rotate(0deg)';
};

// Close modal manually if there's a close button
const closeButton = document.getElementById('close-modal');
if (closeButton) {
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        clearInterval(animationInterval);
        resetImage();
    });
}

// Stretch feature: Reduce motion toggle
const reduceMotionButton = document.getElementById('reduce-motion');
reduceMotionButton.addEventListener('click', () => {
  document.body.classList.toggle('reduce-motion');
  reduceMotionButton.textContent = document.body.classList.contains('reduce-motion') 
    ? 'Enable Motion' 
    : 'Reduce Motion';
});
/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
