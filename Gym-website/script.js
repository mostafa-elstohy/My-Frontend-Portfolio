 // الاشتراك
function subscribe(plan) {

    alert(
        "🔥 HERO GYM 🔥\n\n" +
        "أنت اخترت: " + plan + "\n\n" +
        "💪 شكراً لاختيارك HERO GYM"
    );

}


// زرار اشترك الآن في الصفحة الرئيسية
let heroButton = document.querySelector(".btn");

heroButton.addEventListener("click", function () {

    alert("🔥 أهلاً بيك في HERO GYM 💪");

});


// تأثير عند الضغط على كروت الاشتراك
let plans = document.querySelectorAll(".plan");

plans.forEach(function(plan) {

    plan.addEventListener("click", function() {

        plans.forEach(function(item) {
            item.style.transform = "scale(1)";
        });

        plan.style.transform = "scale(1.05)";

    });

});


// رسالة ترحيب عند فتح الموقع
window.addEventListener("load", function() {

    console.log("Welcome to HERO GYM 💪");

});
