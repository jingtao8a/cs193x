/* The text to use when description is empty */
const NO_DESCRIPTION_TEXT = "(No description)";

export default class Card {
  constructor(title, color) {
    this.title = title;
    this.color = color;
    this.description = NO_DESCRIPTION_TEXT;
  }

  addToCol(colElem, mover) {
    let toDoSection = document.getElementById(colElem);
    let templateCard = document.querySelector(".template");
    let thisCard = templateCard.cloneNode(true);
    thisCard.classList.remove("template");
    thisCard.style.background = this.color;
    thisCard.querySelector(".title").textContent = this.title;
    let description = thisCard.querySelector(".description");
    let editDescription = thisCard.querySelector(".editDescription");
    description.textContent = this.description;
    toDoSection.append(thisCard);

    editDescription.addEventListener("blur", (event)=>{
      this.setDescription(editDescription.value);
      description.textContent = this.description;
      description.classList.remove("hidden");
      editDescription.classList.add("hidden");
    });

    thisCard.querySelector(".buttons .edit").addEventListener("click", (event)=>{
      event.preventDefault();
      description.classList.add("hidden");
      editDescription.classList.remove("hidden");
    });
    
    thisCard.querySelector(".buttons .delete").addEventListener("click", (event)=>{
      event.preventDefault();
      thisCard.remove();
    });
  }

  setDescription(text) {
    //TODO
    if (!text || text.length == 0) {
      return;
    }
    this.description = text;
  }

  //TODO
}
