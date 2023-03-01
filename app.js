const summaryList = document.querySelector(".summary-list");
const score = document.querySelector(".score");

fetch("./data.json")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);

		data.forEach((data) => {
			console.log(data.score);
			const summaryElement = document.createElement("li");
			summaryElement.className = `summary-element ${data.category.toLowerCase()}`;
			summaryList.appendChild(summaryElement);

			const summaryItem = document.createElement("span");
			summaryItem.className = "summary-item";
			summaryElement.appendChild(summaryItem);

			const img = document.createElement("img");
			img.className = "summary-icon";
			img.src = data.icon;
			img.setAttribute("alt", `${data.category} icon`);
			summaryItem.appendChild(img);

			const summaryInfo = document.createElement("p");
			summaryInfo.innerText = data.category;
			summaryInfo.className = "summary-info";
			summaryItem.appendChild(summaryInfo);

			const summaryRatings = document.createElement("span");
			summaryRatings.className = "summary-ratings";
			summaryRatings.innerHTML = `<span>${data.score}</span> / 100`;
			summaryElement.appendChild(summaryRatings);
		});

		const total = parseInt(
			data.reduce((acc, cur) => acc + cur.score, 0) / data.length
		);

		score.innerText = total;
	});
