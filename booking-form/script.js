document.getElementById('beautySalon-book').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        full_name: document.getElementById('fullname').value,
        phone_number: document.getElementById('phone').value,
        email_address: document.getElementById('email').value,
        select_service: document.getElementById('service').value,
        preferred_date: document.getElementById('date').value,
        preferred_time: document.getElementById('time').value,
        additional_notes: document.getElementById('notes').value,
    };

    try {
        const response = await fetch('http://localhost:5000/api/bookingforms/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (result.success) {
            document.getElementById('message').innerText = "✅ Registered Successfully!";
            setTimeout(() => window.location.href = "dashboard.html", 2000);
        } else {
            document.getElementById('message').innerText = "❌ " + result.message;
        }
    } catch (error) {
        document.getElementById('message').innerText = "❌ Registration failed. Try again.";
    }
});
