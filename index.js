// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(res => console.log(res.message));

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(data => data.json())
//     .then((res) => {
//     if (res.status !== 'success'){
//         return;
//     }

//         const imgSrc = res.message

//         document.querySelector('.js-img').innerHTML = `
//             <img 
//             src='${imgSrc}'
//             width='400'>
//         `;
//     });

document.addEventListener('DOMContentLoaded', function() {
    const activityTitle = document.getElementById('activityTitle');
    const containerActivity = document.getElementById('container__activity');
    const activityElement = document.getElementById('activity');
    const button = document.getElementById('new-activity-btn');

    async function fetchActivity() {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            activityElement.textContent = `${data.setup}`;
            containerActivity.className = 'container_activity';
            activityTitle.textContent = 'Ура, теперь не скучно 🔥';
        } catch (error) {
            activityElement.textContent = 'Не удалось найти чем заняться 🤔';
        }
    }

    button.addEventListener('click', fetchActivity);
});

