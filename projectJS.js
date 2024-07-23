function generateMealPlan() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const meals = {};

    days.forEach(day => {
        meals[day] = {
            breakfast: document.getElementById(`breakfast${day}`).value,
            snack1: document.getElementById(`snack1${day}`).value,
            lunch: document.getElementById(`lunch${day}`).value,
            snack2: document.getElementById(`snack2${day}`).value,
            dinner: document.getElementById(`dinner${day}`).value
        };
    });

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    let newPage = `
    <html>
        <head>
            <title>My Meal Plan</title>
            <style>
                body { font-family: monospace; }
                h1, h2, h3 { text-align: center; }
                .meal-plan { max-width: 800px; margin: auto; padding: 20px; }
                .day { margin-bottom: 20px; }
                .meal { margin-left: 20px; }
            </style>
        </head>
        <body>
            <h1>Meal Plan for ${name}</h1>
            <h2>Weekly Goal: ${goal}</h2>
            <h3>Email: ${email}</h3>
            <div class="meal-plan">
    `;

    days.forEach(day => {
        newPage += `<div class="day"><strong>${day}:</strong><br>`;
        newPage += `<div class="meal">Breakfast: ${meals[day].breakfast}</div>`;
        newPage += `<div class="meal">Snack 1: ${meals[day].snack1}</div>`;
        newPage += `<div class="meal">Lunch: ${meals[day].lunch}</div>`;
        newPage += `<div class="meal">Snack 2: ${meals[day].snack2}</div>`;
        newPage += `<div class="meal">Dinner: ${meals[day].dinner}</div>`;
        newPage += `</div>`;
    });

    newPage += `
            </div>
        </body>
    </html>`;

    const newWindow = window.open();
    newWindow.document.write(newPage);
    newWindow.document.close();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
