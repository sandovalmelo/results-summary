const summaryList = document.querySelector(".summary-list");
const score = document.querySelector(".score");

async function getItems() {
	const res = await fetch("./data.json");
	const data = await res.json();
	console.log(data);
	data.forEach((data_2) => {
		console.log(data_2.score);
		const summaryElement = document.createElement("li");
		summaryElement.className = `summary-element ${data_2.category.toLowerCase()}`;
		summaryList.appendChild(summaryElement);

		const summaryItem = document.createElement("span");
		summaryItem.className = "summary-item";
		summaryElement.appendChild(summaryItem);

		const img = document.createElement("img");
		img.className = "summary-icon";
		img.src = data_2.icon;
		img.setAttribute("alt", `${data_2.category} icon`);
		summaryItem.appendChild(img);

		const summaryInfo = document.createElement("p");
		summaryInfo.innerText = data_2.category;
		summaryInfo.className = "summary-info";
		summaryItem.appendChild(summaryInfo);

		const summaryRatings = document.createElement("span");
		summaryRatings.className = "summary-ratings";
		summaryRatings.innerHTML = `<span>${data_2.score}</span> / 100`;
		summaryElement.appendChild(summaryRatings);
	});
	const total = parseInt(
		data.reduce((acc, cur) => acc + cur.score, 0) / data.length
	);
	score.innerText = total;
}

getItems();
