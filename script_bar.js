const slider = document.querySelector(".progress-bar");

function updateProgress() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--value', value + '%');
}

// run once initially
updateProgress();

// update on drag
slider.addEventListener("input", updateProgress);