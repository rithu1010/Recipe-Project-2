function showTab(event, tabId) {
    event.preventDefault();
    var tabContents = document.querySelectorAll(".tab-pane");
    tabContents.forEach(function (tabContent) {
        tabContent.classList.remove("show", "active");
    });

    var tabLinks = document.querySelectorAll(".nav-link");
    tabLinks.forEach(function (tabLink) {
        tabLink.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("show", "active");
    event.currentTarget.classList.add("active");
}




// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}


// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
    
 }