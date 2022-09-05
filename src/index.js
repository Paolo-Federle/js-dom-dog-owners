console.log(data);

// WRITE YOUR CODE BELOW!


function createDogHeaderItem(dog) {
  const myDogItem = document.createElement('li')
  myDogItem.innerHTML = dog.name
  myDogItem.setAttribute('class', 'dogs-list__button')
  myDogItem.addEventListener('click', () => {
    createDogCard(dog)
  })
  return myDogItem
}

function initDogHeader() {
  const headerDogList = document.querySelector('.dogs-list')
  addEventListenerToAdd()
  for (const thisDog of data) {
    const myDogItem = createDogHeaderItem(thisDog)
    headerDogList.append(myDogItem)
  }
}

function addEventListenerToAdd() {
  const addButtonGreen = document.getElementsByClassName("dogs-list__button--add")[0]
  addButtonGreen.addEventListener("click", createFormSection)
}

function createAndClearMain() {
  const mainSection = document.querySelector('.main')
  mainSection.innerHTML = ""
  mainSection.setAttribute('class', 'main')
  return mainSection
}

const createDogCard = (thisDog) => {
  const mainSection = createAndClearMain()
  const section = createSection(mainSection)
  const header = createSectionHeader(thisDog)
  const image = createSectionImage(thisDog)
  const desc = createDogCardDesc(thisDog)

  section.append(header, image, desc)
  return section
}

function createSection(mainSection) {
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

function createTextDesc(dogDescriptionCard, thisDog) {
  const dogDescriptionText = document.createElement("p")
  dogDescriptionText.innerText = thisDog.bio
  dogDescriptionCard.append(dogDescriptionText)
  return dogDescriptionText
}

function dogIsNaughty(dogDescriptionCard, thisDog) {
  const dogIsNaughtyDiv = document.createElement("div")
  const dogIsNaughtyText = document.createElement("p")
  const dogIsNaughtyButton = document.createElement("button")
  dogIsNaughtyDiv.setAttribute("class", "main__dog-section__btn")
  dogIsNaughtyText.innerText = "Is naughty? " + dogBehaviour(thisDog), dogBehaviourButton(thisDog, dogIsNaughtyButton)
  dogDescriptionCard.append(dogIsNaughtyDiv)
  dogIsNaughtyDiv.append(dogIsNaughtyText, dogIsNaughtyButton)
}

function dogBehaviour(thisDog) {
  if (thisDog.isGoodDog) {
    return "No"
  } else {
    return "Yes"
  }
}

function dogBehaviourButton(thisDog, dogIsNaughtyButton) {
  if (thisDog.isGoodDog) {
    return (dogIsNaughtyButton.innerHTML = "Good dog!")
  } else {
    return (dogIsNaughtyButton.innerHTML = "Bad dog!")
  }
}

function createFormSection() {
  const mainSection = createAndClearMain()
  const formSection = document.createElement("section")
  formSection.setAttribute("class", "main__dog-section")
  const formElement = document.createElement("form")
  formElement.setAttribute("class", "form")
  formElement.setAttribute("id", "form")
  mainSectionWithElements = createFormElements(mainSection, formSection, formElement)
  return mainSectionWithElements
}

function createFormElements(mainSection, formSection, formElement) {
  const formHeader = createFormHeader()
  const formLabelName = createFormLabel("Dog's name")
  const formInputName = createFormElement("text", "dogName")
  const formLabelImg = createFormLabel("Dog's picture")
  const formImg = createFormElement("img", "dogImage")
  const formLabelThree = createFormLabel("Dog's bio")
  const formTextArea = createFormTextArea()
  const formButton = createButtonInputForm()
  formElement.append(formHeader, formLabelName, formInputName, formLabelImg, formImg, formLabelThree, formTextArea, formButton)
  formSection.append(formElement)
  mainSection.append(formSection)
  addEventListenerButtonForm(formButton)
  return mainSection
}

function createFormHeader() {
  const formHeader = document.createElement("h2")
  formHeader.innerText = "Add a new Dog"
  return formHeader
}

function createFormLabel(text) {
  const formLabel = document.createElement("label")
  formLabel.innerText = text
  return formLabel
}

function createFormElement(element, id) {
  const formInput = document.createElement("input")
  formInput.setAttribute("type", element)
  formInput.setAttribute("id", id)
  return formInput
}

function createFormTextArea() {
  const FormTextArea = document.createElement("textarea")
  FormTextArea.setAttribute("rows", "5")
  FormTextArea.setAttribute("id", "dogBio")
  return FormTextArea
}

function createButtonInputForm() {
  const buttonForm = document.createElement("input")
  buttonForm.setAttribute('type', 'submit')
  buttonForm.setAttribute('value', "Let's add a dog!")
  buttonForm.setAttribute('class', 'form__button')
  return buttonForm
}

function addEventListenerButtonForm(formButton) {
  const formElement = document.getElementById("form")
  formButton.addEventListener("click", addCustomDogInfo)
}

function addCustomDogInfo(event) {
  event.preventDefault()
  const dogNameValue = document.getElementById('dogName').value
  const dogImgValue = document.getElementById('dogImage').value
  const dogBioValue = document.getElementById('dogBio').value
  const customDogObject = createCustomDogObject(dogNameValue, dogImgValue, dogBioValue)
  data.unshift(customDogObject)
  addedCustomDog()
}

function createCustomDogObject(dogNameValue, dogImgValue, dogBioValue) {
  const customDogObject = {
    id: (data.length++),
    name: dogNameValue,
    bio: dogBioValue,
    isGoodDog: true,
    image: dogImgValue
  }
  return customDogObject
}

function clearDogHeader() {
  // const headerDogList = document.querySelector(`.dogs-list li:nth-child(1)`)
  // headerDogList.remove()
  const headerDogList = document.querySelector(`ul`)
  headerDogList.innerHTML = ""
}

function createAddLi() {
  const addButton = document.createElement('li')
  addButton.innerText = "+"
  const headerDogList = document.querySelector('.dogs-list')
  addButton.classList.add('dogs-list__button', 'dogs-list__button--add')
  headerDogList.append(addButton)

  addEventListenerToAdd()
  

}

function addedCustomDog() {
  clearDogHeader()
  createAddLi()
  initDogHeader()
  createAndClearMain()
}































initDogHeader()