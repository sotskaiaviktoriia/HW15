"use strict";

//Task
const list = document.getElementById("albums");

fetch("http://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("album_title");
      li.innerHTML = item.title;
      list.append(li);
    });
  })
  .catch((error) => console.error(error));
