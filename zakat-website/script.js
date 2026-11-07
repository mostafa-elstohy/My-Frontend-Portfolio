 
        function calculateZakat() {

            let money = Number(document.getElementById("money").value);

            if (money <= 0) {
                document.getElementById("result").innerHTML =
                    "من فضلك أدخل مبلغ صحيح";
                return;
            }

            let zakat = money * 0.025;

            document.getElementById("result").innerHTML =
                "قيمة الزكاة: " + zakat.toLocaleString() + " جنيه";
        }