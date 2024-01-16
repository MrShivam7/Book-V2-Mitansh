var i = 0;
var txt1 =
  "Mana hamari manzile alag thi, Par tumhara itni jaldi mujhse alag hona zaroori tha kya? < Tumse milke har pal mai sukoon milta tha, Par iss sukoon ka itni jaldi chhin jana zaroori tha kya? < Mana humne kuch hi pal sath mai bitaaye, Par unn pal ka itni jaldi beet jana zaroori tha kya? < Agar tumhe jana hi tha, Toh humara milna zaroori tha kya? < Mana mai tumhari kahani ka vo kirdaar hu jise bhul jana aasan hai, Par tumhara zikr meri kitaab ke har panne pe zaroori tha kya? < Palak jhapakte hi hum alag ho gaye, Magar palak jhapkana zaroori tha kya?";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if ((page = currentPage - 1)) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}