console.log(data);

// WRITE YOUR CODE BELOW!

const headerDogList = document.querySelector('.dogs-list')
const mainSection = document.querySelector('.main')

function createDogHeaderItem(dog) {
  // dogItem lista nomi alta dei cani
  const dogItem = document.createElement('li')

  // aggiunta classe alla lista nomi in alto
  dogItem.className = "dogs-list__button";

  // nomi alla lista cani in alto
  dogItem.innerText = dog.name

  return dogItem
}


for (const thisDog of data) {
  const myDogItem = document.createElement('li')
  myDogItem.innerHTML = thisDog.name
  myDogItem.setAttribute('class', 'dogs-list__button')
  myDogItem.addEventListener('click', () => {
    createDogCard(thisDog)
 })
  headerDogList.append(myDogItem)
}

// data.forEach(thisDog => {
//       const myDogItem = createDogHeaderItem(thisDog)
//       headerDogList.append(myDogItem)
// })


const createDogCard = (thisDog) => {
  mainSection.innerHTML = ""
  const section = createSection()
  const header = createSectionHeader(thisDog)
  const image = createSectionImage(thisDog)
  const desc = createDogCardDesc(thisDog)
    
  section.append(header, image, desc)
  return section
}

function createSection() {
  const dogSection = document.createElement("section")
  dogSection.setAttribute("class", "main__dog-section")
  mainSection.append(dogSection)
  return dogSection
}

function createSectionHeader(chosenDog) {
  const sectionHeader = document.createElement("h2")
  sectionHeader.innerText = chosenDog.name
  return sectionHeader
}

function createSectionImage(chosenDog) {
  const dogImg = document.createElement("img")
  dogImg.setAttribute("src", chosenDog.image)
  return dogImg
}

function createDogCardDesc(thisDog) {
  const dogDescriptionCard = document.createElement("div")
  dogDescriptionCard.setAttribute("class", "main__dog-section__desc")
  createBioInDesc(dogDescriptionCard)
  createTextDesc(dogDescriptionCard, thisDog)
  dogIsNaughty(dogDescriptionCard, thisDog)
  return dogDescriptionCard
}

function createBioInDesc(dogDescriptionCard) {
  const bio = document.createElement("h3")
  bio.innerText = "Bio"
  dogDescriptionCard.append(bio)
  return bio
}

function createTextDesc(dogDescriptionCard, thisDog){
  const dogDescriptionText = document.createElement("p")
  dogDescriptionText.innerText = thisDog.bio
  dogDescriptionCard.append(dogDescriptionText)
  return dogDescriptionText
}

function dogIsNaughty(dogDescriptionCard, thisDog) {
  const dogIsNaughtyDiv = document.createElement("div")
  dogIsNaughtyDiv.setAttribute("class", "main__dog-section__btn")
  const dogIsNaughtyText = document.createElement("p")
  const dogIsNaughtyButton = document.createElement("button")
  dogIsNaughtyText.innerText = "Is naughty? " + dogBehaviour(thisDog), dogBehaviourButton(thisDog, dogIsNaughtyButton)
  dogDescriptionCard.append(dogIsNaughtyDiv)
  dogIsNaughtyDiv.append(dogIsNaughtyText, dogIsNaughtyButton)
}

function dogBehaviour(thisDog) {
  if (thisDog.isGoodDog) {
    return "Yes"
  } else {
    return "No"
  }
}

function dogBehaviourButton(thisDog, dogIsNaughtyButton) {
  if (thisDog.isGoodDog) {
    return (dogIsNaughtyButton.innerHTML = "Good dog!")
  } else {
    return (dogIsNaughtyButton.innerHTML = "Bad dog!")
  }
}

// for (dog of data) {
//   const li = document.createElement('li')
//   li.innerHTML = dog.name
//   li.setAttribute('class', 'dogs-list__button')
//   li.addEventListener('click', createDogCard) // Change the function to display dog card
//   headerDogList.append(li)
// }