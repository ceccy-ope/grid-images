const body = document.body;
const main = document.createElement("main");
const div = document.createElement("div");
const img = document.createElement("img");
const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
const img4 = document.createElement("img");
const img5 = document.createElement("img");
const img6 = document.createElement("img");
const img7 = document.createElement("img");
const img8 = document.createElement("img");

img.setAttribute("src", "assets/h1.jpg");
img1.setAttribute("src", "assets/h2.jpg");
img2.setAttribute("src", "assets/h3.jpg");
img3.setAttribute("src", "assets/house.jpg");
img4.setAttribute("src", "assets/h5.jpg");
img5.setAttribute("src", "assets/h6.jpg");
img6.setAttribute("src", "assets/h7.jpg");
img7.setAttribute("src", "assets/h8.jpg");
img8.setAttribute("src", "assets/h9.jpg");

main.classList.add("wrapper");
div.classList.add("container");

img.classList.add("img");
img1.classList.add("img");
img2.classList.add("img");
img3.classList.add("img");
img4.classList.add("img");
img5.classList.add("img");
img6.classList.add("img");
img7.classList.add("img");
img8.classList.add("img");

div.append(img);
div.append(img1);
div.append(img2);
div.append(img3);
div.append(img4);
div.append(img5);
div.append(img6);
div.append(img7);
div.append(img8);

body.append(main);
main.append(div);

