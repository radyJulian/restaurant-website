function bookTable() {
    alert("Thank you for choosing Delicious Restaurant! Table booking will be available soon.");
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const guests = document.getElementById("guests").value;

    if (name.length < 3) {
        alert("Please enter a valid name.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (guests < 1) {
        alert("Number of guests must be at least 1.");
        return;
    }

    alert("✅ Reservation successful!");

    this.reset();
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.getElementById("newsletterForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
    this.reset();
});

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function searchFood() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".food-card");

    cards.forEach(function(card) {
        let name = card.querySelector("h3").textContent.toLowerCase();

        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
function updateStatus() {
    const hour = new Date().getHours();
    const status = document.getElementById("status");

    if (hour >= 8 && hour < 22) {
        status.textContent = "🟢 We are OPEN";
    } else {
        status.textContent = "🔴 We are CLOSED";
    }
}

updateStatus();
window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString();

    document.getElementById("clock").textContent = "🕒 " + time;
}

setInterval(updateClock, 1000);
updateClock();