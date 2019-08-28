document.write(
  "<ul id='nav'>\
    <img id='nav_logo' src='res/logo.svg'/>\
    <div class='nav_title'>\
      <p id='nav_name'><b>CWRUbotix</b></p>\
      <p id='nav_desc'>Case Western Reserve University's Robotics Team</p>\
    </div>\
    <li><a href='index.html#main'>Home</a></li>\
    <li><a href='index.html#team'>Members</a></li>\
	  <li><a href='index.html#projects'>Projects</a></li>\
    <li><a href='blog/index.html'>Blog</a></li>\
	  <li><a href='index.html#sponsorship'>Sponsorship</a></li>\
    <li><a href='index.html#contact'>Contact</a></li>\
  </ul>"
);

window.onscroll = function() {f_scroll()};

function f_scroll() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav_logo").style.maxWidth = "80px";
		document.getElementById("nav_name").style.fontSize = "26px";
		document.getElementById("nav_desc").style.fontSize = "0px";
    } else {
        document.getElementById("nav_logo").style.maxWidth = "120px";
		document.getElementById("nav_name").style.fontSize = "30px";
		document.getElementById("nav_desc").style.fontSize = "16px";
    }
}
