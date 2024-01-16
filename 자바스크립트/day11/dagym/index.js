import { centerList } from "./data.js";

const container = document.querySelector(".container");
const card = document.querySelector(".card");
const imgBox = document.querySelector(".imgBox");
const img = document.querySelector(".img");
const contentBox = document.querySelector(".contentBox");
const name = document.querySelector(".name");
const address = document.querySelector(".place");
const tagBox = document.querySelector(".tagBox");
const tag = document.querySelector(".tag");

centerList.map((v, i) => {
	container.insertAdjacentHTML(
		"beforeend",
		`<div class="card">
                <div class="imgBox">
                    <img class="img" src="${v.gymPhotoSmall}" alt="test" />
                </div>
                <div class="contentBox">
                    <h2 class="name">${v.gymName}</h2>
                    <h3 class="address">${v.address}</h3>
                    <ul class="tagBox">
                        <li class="tag">헬스</li>
                        <li class="tag">P.T</li>
                        <li class="tag">기구필라테스</li>
                    </ul>
                </div>
            </div>`
	);
});
