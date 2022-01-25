// 1: Get the node with the  main title

// ... your code here

console.log(document.querySelector("h1"))

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

// ... your code here

console.log(document.querySelector("h1").innerText)


// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the collection with the fruit items

// ... your code here
console.log(document.getElementsByClassName("fruit-item"))

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

console.log(document.querySelector(".veggies").innerText)

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

// ... your code here
console.log(document.querySelector(".list-veggies h2").innerText)

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

// ... your code here

const fruitTitle = document.querySelector(".list-fruits h2")
fruitTitle.id = "fruit-title"

console.log(fruitTitle)


// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

// ... your code here

const fruitClass = Array.from(document.getElementsByClassName("fruit-item "))

//Different way, but not sure
//fruitClass[0].class = "best-fruit"
//fruitClass[2].class = "best-fruit"

fruitClass[0].classList.add ("best-fruit")
fruitClass[2].classList.add ("best-fruit")

console.log(fruitClass)


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const removedVeggies = document.querySelector(".veggies")

removedVeggies.classList.remove("veggies")

console.log(removedVeggies)

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

// ... your code here

const veggieAddClass = Array.from(document.querySelectorAll(".list-veggies ul li"))

veggieAddClass.forEach((element) => element.classList.add("veggie-love"))

console.log(veggieAddClass)



// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

// ... your code here
/*
const removeVeggieItem = Array.from(document.querySelectorAll(".list-veggies ul li"))

removeVeggieItem[3].classList.remove("veggie-item")*/

const removeVeggieItem = Array.from(document.querySelectorAll(".list-veggies"))

removeVeggieItem.forEach((element) => {
    if (element.innerText === "Spinach") return removedVeggiesItem1.classList.remove("veggie-item")})

console.log(removeVeggieItem)

// => ... <li class="veggie-love">Spinach</li>