
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
