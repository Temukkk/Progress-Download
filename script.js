// Selecting the button and its content
const button = document.querySelector(".button");
const icon = document.querySelector("i");
const buttonText = document.querySelector(".button-text");

// Simulating download progress
let progressInterval;
let downloadProgress = 0;

// Function to simulate download and track progress
function startDownload() {
    button.classList.add("active");
    buttonText.innerText = "Downloading...";
    icon.classList.replace("bx-cloud-download", "bx-loader");
    icon.classList.add("bx-spin");

    // Progress logic
    progressInterval = setInterval(updateProgress, 500); // Update progress every 0.5 seconds
}

// Update progress function
function updateProgress() {
    downloadProgress += 10; // Increment progress by 10%

    if (downloadProgress >= 100) {
        clearInterval(progressInterval);
        completeDownload();
    } else {
        buttonText.innerText = `Downloading... ${downloadProgress}%`;
    }
}

// Complete download function
function completeDownload() {
    button.classList.remove("active");
    buttonText.innerText = "Completed";
    icon.classList.replace("bx-loader", "bx-check-circle");
    icon.classList.remove("bx-spin");

    setTimeout(resetButton, 3000); // Reset button after 2 seconds
}

// Reset button to its initial state
function resetButton() {
    downloadProgress = 0;
    buttonText.innerText = "Download";
    icon.classList.replace("bx-check-circle", "bx-cloud-download");

    // Optionally, remove the hover effect during download
    button.classList.remove("disabled");
}

// Add click event listener
button.addEventListener("click", () => {
    if (!button.classList.contains("disabled")) {
        button.classList.add("disabled"); // Prevent multiple clicks
        startDownload();
    }
});

// Add error handling (optional)
function simulateError() {
    clearInterval(progressInterval);
    buttonText.innerText = "Error!";
    icon.classList.replace("bx-loader", "bx-error");
    icon.classList.remove("bx-spin");

    setTimeout(resetButton, 3000); // Reset button after 3 seconds
}

// Simulate error after 5 seconds (for testing purposes)
// setTimeout(simulateError, 5000);
