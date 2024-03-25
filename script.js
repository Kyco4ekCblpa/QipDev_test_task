document.addEventListener("DOMContentLoaded", () => {

    // ------ TABS ------
    const tabItems = document.querySelectorAll(".tabheader_item");
    const tabContent = document.querySelectorAll(".tabcontent");

    tabContent.forEach(item => {
        item.style.display = "none";
    })

    if (tabItems.length > 0 && tabContent.length > 0) {
        tabItems[0].classList.add("active");
        tabContent[0].style.display = "block";
    }

    tabItems.forEach((item, i) => {
        item.addEventListener("click", (e) => {
            changeActiveTab(e);
            showTabContent(i);
        });
    })

    const changeActiveTab = (e) => {
        tabItems.forEach((item) => {
            item.classList.remove("active");
        });

        e.target.classList.add("active");
    }

    const showTabContent = (i) => {
        tabContent.forEach(item => {
            item.style.display = "none";
        })

        tabContent[i].style.display = "block";
    }


    // ------ ACCORDION ------
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");

            const panel = this.parentNode.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});