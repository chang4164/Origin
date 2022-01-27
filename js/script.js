var section_art = document.querySelector("#frame section article");

var article_info = [
  ["1.jpg", "Make a Wish", "2019.08.19"],
  ["2.jpg", "Purple Haze", "2019.07.29"],
  ["3.jpg", "Masked Model", "2019.04.30"],
  ["4.jpg", "Birds of Beauty", "2019.05.04"],
  ["5.jpg", "Summer Wheat", "2019.06.14"],
  ["6.jpg", "Before the Storm", "2019.03.27"],
  ["7.jpg", "Young Woman", "2018.10.07"],
  ["8.jpg", "Before the Storm", "2018.12.24"],
  ["9.jpg", "A Loving Couple", "2019.02.21"],
  ["10.jpg", "Spiral Staircase", "2018.10.13"],
  ["11.jpg", "Lonely Ladybug", "2019.01.16"],
  ["12.jpg", "Emphasis Lafuta", "2019.07.07"],
  ["13.jpg", "Monk Walks", "2019.03.12"],
  ["14.jpg", "Arena Vivian", "2019.04.05"],
];
  
var article = "";

for(v of article_info){
  article += `
    <div style="background-image: url(./img/${v[0]})">
      <div class="bgc">
        <div class="inner_wrap">
          <div class="txt_box">
            <h3>${v[1]}</h3>
            <p>${v[2]}</p>
            <div class="line"></div>
          </div>
          <a><img src="./img/zoom.png" alt=""></a>
        </div>
      </div>
    </div>
  `;
}

section_art.innerHTML = article;

