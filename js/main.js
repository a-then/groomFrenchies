/* Back to top button */
const topButton = document.getElementById("backTop");
// show only when user scrolls below fold of the page.
window.onscroll = function scrollFunction() {
 if (document.documentElement.scrollTop > 800) {
  topButton.style.display = "block";
 } else {
  topButton.style.display = "none";
 }
}//scroll to top
const topFunction = () =>
 document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
