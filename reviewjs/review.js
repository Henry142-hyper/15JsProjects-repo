const infos = [
    {
        id : "1",
        name: "Susan Smith",
        job: "Web Developer",
        image: "images/person1.jpg",
        review: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id : "2",
        name: "Anna Johnson",
        job: "WEB DESIGNER",
        image: "images/person2.jpg",
        review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
    },
    {
        id : "3",
        name: "Peter Jones",
        job: "intern",
        image: "images/person3.jpg",
        review: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id : "4",
        name: "Bill Anderson",
        job: "CEO",
        image: "images/person4.jpg",
        review: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    }
]

let currentIdx = 0;

const personName = document.getElementById('name');
const job = document.getElementById('job');
const review = document.getElementById('review');
const img = document.getElementById('personImg');

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

window.addEventListener('DOMContentLoaded', function () {
    show(currentIdx);
})

prevButton.addEventListener('click', function () {
    currentIdx--;
    if (currentIdx < 0) {
        currentIdx = infos.length - 1;
    }
    show(currentIdx);
})

nextButton.addEventListener('click', function () {
    currentIdx++;
    if (currentIdx > infos.length - 1) {
        currentIdx = 0;
    }
    show(currentIdx);
})


let show = (person) => {
    const information = infos[person];
    img.src = information.image;
    personName.textContent = information.name;
    job.textContent = information.job;
    review.textContent = information.review;
}