function load(){
	var off = document.getElementById("nav").clientHeight;
	var off2 = off + 200;
	document.getElementById("home").style.paddingTop = off + "px";
	document.getElementById("motto").style.top = off2 + "px";
	document.getElementById("join_btn").style.top = (off2+document.getElementById("motto").clientHeight+50) + "px";
	var gif = document.getElementById('home').getElementsByTagName("img")[0];
	//gif.style.marginLeft = -((gif.clientWidth-screen.width)/2) + "px";

	// recent blog stuff
	var title_block = document.getElementsByClassName("rec_blog_title")[0];
	var date_block = document.getElementsByClassName("rec_blog_date")[0];
	var text_block = document.getElementsByClassName("rec_blog_text")[0];
	var blog_img 	= document.getElementsByClassName("rec_blog_img")[0];
	var blog_link 	= document.getElementsByClassName("rec_blog_link")[0];
	title_block.innerHTML = "Most Recent Post:<br />" + "Electronics Design With Altium";
	date_block.innerHTML = "August 28, 2019";
	text_block.innerHTML = "Recap of our custom electronics from the 2018-2019 season, our experience with Altium Designer, and plans for the future.";
	blog_img.setAttribute("src", "blog/blog_8-28-19_Altium/blog_img.png");
	blog_link.setAttribute("href", "blog/blog_8-28-19_Altium/blog.html");
}
