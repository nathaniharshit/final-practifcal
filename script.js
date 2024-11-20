// Get the hamburger menu and sidebar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const body = document.body;

// Function to toggle sidebar open and closed
function toggleSidebar() {
    sidebar.classList.toggle("open");
    // Toggle the 'active' class on the hamburger to change icon
    hamburger.classList.toggle("active");
    // Optionally, add or remove a class on the body to prevent scrolling when sidebar is open
    body.classList.toggle("no-scroll");
}

// Function to close the sidebar when clicking outside of it
function closeSidebarOnClickOutside(event) {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target) && sidebar.classList.contains("open")) {
        toggleSidebar();
    }
}

// Add click event listener to the hamburger icon
hamburger.addEventListener("click", toggleSidebar);

// Close sidebar if user clicks outside of it
document.addEventListener("click", closeSidebarOnClickOutside);

// Optional: Highlight the active sidebar menu item
const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

// Add click event listeners to sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Remove 'active' class from all links
        sidebarLinks.forEach(link => link.classList.remove("active"));
        // Add 'active' class to the clicked link
        this.classList.add("active");
    });
});
