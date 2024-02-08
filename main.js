document.addEventListener("DOMContentLoaded", function () {
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const weatherInfoElement = document.getElementById('weatherInfo');
    const showWeatherButton = document.getElementById('showWeatherButton');

    function showWeather() {
        // Show loading text initially
        temperatureElement.textContent = 'Loading...';
        descriptionElement.textContent = '';

        // Hide the weather info container initially
        weatherInfoElement.classList.add('hidden');

        // Delay for 5 seconds (5000 milliseconds) before displaying the weather information
        setTimeout(() => {
            // Display weather information
            temperatureElement.textContent = '23 degrees';
            descriptionElement.textContent = 'Partly Cloudy';

            // Show the weather info container
            weatherInfoElement.classList.remove('hidden');
        }, 5000);
    }

    // Attach the showWeather function to the button click event
    showWeatherButton.addEventListener('click', showWeather);
});
