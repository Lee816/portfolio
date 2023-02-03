$(window).on('scroll', function () { 
    var pos2 = $(window).scrollTop()+50;
    var target = document.getElementById("nav");
    // Link Highlighting
    if (pos2 >= $('#home').offset().top) { 
        highlightLink('home'); 
        target.style.color = "#f8f9fa";
        target.style.backgroundColor = "black";  
    }
    if (pos2 >= $('#about').offset().top) { 
        highlightLink('about'); 
        target.style.color = "inherit"; 
        target.style.backgroundColor = "white"; 
    }
    if (pos2 >= $('#skills').offset().top)  { 
        highlightLink('skills'); 
    }
    if (pos2 >= $('#project').offset().top) { 
        highlightLink('project'); 
    }
});
 
function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $("nav").find('[href="#' + anchor + '"]').addClass('active');
}

const content = "안녕하세요. \n 신입 백엔드 개발자 이근한입니다.\n 성장하는 개발자가 되겠습니다.\n - back-end developer -";
const text = document.querySelector("#home_text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 150)