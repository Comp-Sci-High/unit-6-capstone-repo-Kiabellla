// GlowBlue Esthetics Appointment System

const appointments = [];
const servicePrices = {
    "Custom Facial": 85,
    "Microdermabrasion": 110,
    "Lash Lift & Tint": 95,
    "Eyebrow Wax + Shape": 35,
    "Back Facial": 120
};

function bookAppointment() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !email || !service || !date || !time) {
        alert("Please fill out all fields 💙");
        return;
    }

    const appointment = {
        name,
        email,
        service,
        date,
        time,
        price: servicePrices[service] || 0
    };

    appointments.push(appointment);
    displayAppointments();
    document.getElementById("bookingForm").reset();
}

function displayAppointments() {
    const appointmentList = document.getElementById("appointmentList");
    appointmentList.innerHTML = "";

    if (appointments.length === 0) {
        appointmentList.innerHTML = '<p class="empty">No appointments booked yet.</p>';
        return;
    }

    appointments.forEach((appt, index) => {
        const card = document.createElement("div");
        card.classList.add("appointment-card");

        card.innerHTML = `
            <h3>${appt.name}</h3>
            <p><strong>Service:</strong> ${appt.service}</p>
            <p><strong>Price:</strong> $${appt.price}</p>
            <p><strong>Date:</strong> ${appt.date}</p>
            <p><strong>Time:</strong> ${appt.time}</p>
            <button onclick="deleteAppointment(${index})">Cancel Appointment</button>
        `;

        appointmentList.appendChild(card);
    });
}

function deleteAppointment(index) {
    appointments.splice(index, 1);
    displayAppointments();
}
