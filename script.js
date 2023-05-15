const body = document.body;

const div = document.createElement("div");

const img = document.createElement("img");

img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZMbDzNduSAy4JkImzx0miVwNUeeHvsjjGw&usqp=CAU")

div.classList.add("container")

div.append(img)
body.append(div)

