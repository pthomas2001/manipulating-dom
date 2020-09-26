names = ["Thomas", "James", "Adam", "Martin"]

names.forEach((item) => {
    if (item === "Thomas") {
        $("ul").append(`<li><strong>${item}</strong></li>`)
    } else {
        $("ul").append(`<li>${item}</li>`)
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$("body").append(`<h1>${additionalBlock.title}</h1>`)
$("body").append(`<p>${additionalBlock.text}</p>`)