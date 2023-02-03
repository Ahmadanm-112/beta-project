if (localStorage.getItem("color") !== null) {
    document.documentElement.style.setProperty(
        "--second-color",
        localStorage.getItem("color")
    );
    document.querySelectorAll(".list-colors li").forEach((ele) => {
        ele.classList.remove("active");
        if (ele.dataset.color === localStorage.color) {
            ele.classList.add("active");
        }
    });
    document.querySelectorAll(".links li a").forEach((a) => {
        a.classList.remove("active");
        if (a.dataset.link === localStorage.Link) {
            a.classList.add("active");
        }
    });
    document.querySelectorAll(".spans span").forEach((span) => {
        span.classList.remove("active");
        if (span.dataset.mode === localStorage.Activity) {
            span.classList.add("active");
            document.body.style.background = span.dataset.mode;
        }
    });
}
// Start Gear Icon Code
function gearIcon() {
    let settingBox = document.querySelector(".settings");
    let gearIcon = document.querySelector(".option-box i");
    gearIcon.onclick = () => {
        settingBox.classList.toggle("open");
        gearIcon.classList.toggle("fa-spin");
    };
}
gearIcon();
// End Gear Icon Code

// Start Add Class To List-Colors li Code
function addClassToCurrentListColors() {
    let listcolors = document.querySelectorAll(".list-colors li ");
    listcolors.forEach((li) => {
        li.addEventListener("click", removeClass2);
        li.addEventListener("click", addClass2);
        li.addEventListener("click", addLocalStorage2);
    });

    function removeClass2() {
        listcolors.forEach((li) => li.classList.remove("active"));
    }

    function addClass2() {
        listcolors.forEach(() => this.classList.add("active"));
    }

    function addLocalStorage2(e) {
        listcolors.forEach(() => {
            document.documentElement.style.setProperty(
                "--second-color",
                e.target.dataset.color
            );
            localStorage.setItem("color", this.dataset.color);
        });
    }
}
// Start Night Mode
function nightMode(event) {
    let spans = document.querySelectorAll(".spans span");
    spans.forEach((span) => {
        span.addEventListener("click", removeClass);
        span.addEventListener("click", addClass);
        span.addEventListener("click", setLocalStorage);

        function removeClass() {
            spans.forEach((span) => {
                span.classList.remove("active");
            });
        }

        function addClass(e) {
            spans.forEach(() => {
                e.target.classList.add("active");
            });
        }
    });

    function setLocalStorage(event) {
        localStorage.setItem("Activity", event.target.dataset.mode);
        spans.forEach((span) => {
            document.body.style.background = event.target.dataset.mode;
        });
    }
}
nightMode();
// End Night Mode
addClassToCurrentListColors();
// End Add Class To List-Colors li Code

// Start Links lis Code
function startLinks() {
    let anchors = document.querySelectorAll(".links li a");
    console.log(anchors);
    anchors.forEach((a) => {
        a.addEventListener("click", removeClass);
        a.addEventListener("click", addClass);
        a.addEventListener("click", addLocalStorage);
    });

    function removeClass() {
        anchors.forEach((a) => {
            a.classList.remove("active");
        });
    }

    function addClass(e) {
        anchors.forEach(() => {
            e.target.classList.add("active");
        });
    }

    function addLocalStorage(e) {
        anchors.forEach(() => localStorage.setItem("Link", e.target.dataset.link));
    }
}

startLinks();

// End Links lis Code

let up = document.querySelector(".up");
window.onscroll = function() {
    if (window.scrollY >= 700) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
};
up.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};