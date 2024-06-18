document.getElementById('jokeButton').addEventListener('click', () => {
    fetch('https://carambar-jokes-79ge.onrender.com/api/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').textContent = data.content;
        })
        .catch(error => console.error('Error fetching joke:', error));
});
