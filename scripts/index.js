
        document.querySelector('#week1').style.display = "block"

        
        
        function showSection() {
            const selectedSection = document.getElementById("weekSelect").value;
            const weeks = document.querySelectorAll(".week");
            const projects = document.getElementById("projects");

            weeks.forEach(week => week.style.display = "none");
            projects.style.display = "none";

            if (selectedSection === "projects") {
                projects.style.display = "block";
            } else {
                document.getElementById(`week${selectedSection}`).style.display = "block";
            }
        }

        const menuIcon = document.querySelector('.menu-icon');
        const nav = document.querySelector('nav');

        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('open');
        });



        const backToTopButton = document.getElementById("back-to-top");

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) { // Show after scrolling 100px
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scrolling
            });
        });

        function showSection(sectionId) {
            // Hide all sections
            document.getElementById('overview').style.display = 'none';
            document.getElementById('curriculum').style.display = 'none';

            // Show the selected section
            document.getElementById(sectionId).style.display = 'block';
        }
