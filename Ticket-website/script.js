    const modal = document.getElementById("bookingModal");

const closeModal = document.getElementById("closeModal");

const bookingForm = document.getElementById("bookingForm");

const selectedEventText = document.getElementById("selectedEvent");

const ticketCount = document.getElementById("ticketCount");

const totalPrice = document.getElementById("totalPrice");

const successMessage = document.getElementById("successMessage");

let currentEvent = "";
let currentPrice = 0;


// فتح نافذة الحجز

document.querySelectorAll(".book-button").forEach((button) => {

    button.addEventListener("click", () => {

        currentEvent = button.dataset.event;

        currentPrice = Number(button.dataset.price);

        selectedEventText.textContent =
            `الفعالية: ${currentEvent}`;

        bookingForm.hidden = false;

        successMessage.hidden = true;

        ticketCount.value = "1";

        updateTotal();

        modal.classList.add("show");

        modal.setAttribute("aria-hidden", "false");

        document.getElementById("customerName").focus();

    });

});


// حساب السعر

function updateTotal() {

    const count = Number(ticketCount.value);

    totalPrice.textContent =
        `${currentPrice * count} جنيه`;

}

ticketCount.addEventListener("change", updateTotal);


// إغلاق نافذة الحجز

function hideModal() {

    modal.classList.remove("show");

    modal.setAttribute("aria-hidden", "true");

}

closeModal.addEventListener("click", hideModal);

document.getElementById("doneButton")
    .addEventListener("click", hideModal);

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        hideModal();

    }

});


// تأكيد الحجز

bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document
        .getElementById("customerName")
        .value.trim();

    const email = document
        .getElementById("customerEmail")
        .value.trim();

    const count = Number(ticketCount.value);

    const total = currentPrice * count;

    document.getElementById("bookingSummary").textContent =

        `يا ${name}، حجزت ${count} تذكرة لفعالية "${currentEvent}" بإجمالي ${total} جنيه. تفاصيل الحجز التجريبية على: ${email}`;

    bookingForm.hidden = true;

    successMessage.hidden = false;

});


// البحث والفلترة

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const eventCards =
    [...document.querySelectorAll(".event-card")];

const emptyMessage =
    document.getElementById("emptyMessage");


function filterEvents() {

    const searchText =
        searchInput.value.trim().toLowerCase();

    const category = categoryFilter.value;

    let visibleCount = 0;

    eventCards.forEach((card) => {

        const name = card.dataset.name.toLowerCase();

        const matchesName =
            name.includes(searchText);

        const matchesCategory =
            category === "all" ||
            card.dataset.category === category;

        const visible =
            matchesName && matchesCategory;

        card.hidden = !visible;

        if (visible) {

            visibleCount++;

        }

    });

    emptyMessage.hidden = visibleCount !== 0;

}

searchInput.addEventListener("input", filterEvents);

categoryFilter.addEventListener("change", filterEvents);