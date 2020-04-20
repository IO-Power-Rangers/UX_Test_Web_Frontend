function embedWebsite() {
  document.getElementById("website-iframe").src = document.getElementById("website-url").value;
  document.getElementById("website-url").value = "";
}
