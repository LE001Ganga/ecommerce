fetch("../data/data.json").then(response=>{
return response.json()
}).then(data=>{
console.log(data)
displayData(data)
})

function displayData(info) {
	var bodyElement=document.querySelector("body");
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center")
	bodyElement.append(row)
	info.Laptops.map(value=>{
		var column=document.createElement("article")
		column.classList.add("col-sm-10","col-md-6","col-lg-3")
		row.append(column)

		var card=document.createElement("div");
		card.classList.add("card","mt-3")

		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body")

		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive")
		imageElement.setAttribute("alt","Laptops Images")

		var nameElement=document.createElement("h5");
		nameElement.classList.add("text-center","text-primary")
		nameElement.textContent=value.name;

		var op=document.createElement("span");
		op.innerHTML="<s>₹"+value.op+"/-</s>";
		op.classList.add("text-secondary")

		var price=document.createElement("span");
		price.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;₹"+value.price+"/-"
		price.classList.add("text-secondary")

		var b=document.createElement("button");
		b.innerHTML='Add to Cart &nbsp;&nbsp;<i class = "fa fa-shopping-cart"></i>';
		b.classList.add("btn","btn-primary")

		var buttonparent=document.createElement("div");
		buttonparent.classList.add("d-grid","gap-2");
		buttonparent.append(b);

		cardBody.append(imageElement);
		cardBody.append(nameElement);
		cardBody.append(op,price);
		cardBody.append(buttonparent);
		card.append(cardBody);
		column.append(card);
	})
}
// fetch("../data/data.json").then(response=>{
// return response.json()
// }).then(data=>{
// console.log(data)
// displayData(data)
// })
// function displayData(info)
// {
// var sampleElement=document.createElement("img")
// sampleElement.src="img/1.jpg";
// var bodyElement=document.querySelector("body");
// }
// var sampleElement=document.createElement("img")
// sampleElement.src="images/Hp.jpg";
// sampleElement.setAttribute("alt","Hp Laptops")

// var bodyElement=document.querySelector("body");
// var newElement=document.createElement("h2")
// newElement.textContent="Ganga"
// console.log(newElement)
// bodyElement.append(newElement)
// var e=document.querySelectorAll(".div")
// console.log(e[1])
// var e=document.getElementsByClassName('div');
// console.log(e[0])
// console.log(e[1].innerHTML)
// var div=document.getElementById("div");
// console.log(div)
// console.log(info.Laptops[info.Laptops.length-1])
// }