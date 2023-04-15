const addNoteBtn = document.querySelector(".addbtn");

const addNoteBox = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
    <div class="operation">
             <button class="edit"><i class="fas fa-edit"></i></button>
             <button class="delete"><i class="fas fa-trash-alt"></i></button>
     </div>
             <div class="main ${text ? "" : "hidden"}"></div>
             <textarea class="${text ? "hidden" : ""}"></textarea> `;

  note.insertAdjacentHTML("afterbegin", htmlData);

  //taking refrence of edit and delete btn

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  deleteBtn.addEventListener("click", () => {
    note.remove();
  });

  editBtn.addEventListener("click", () => {
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden')
  })

  document.body.appendChild(note);
};

addNoteBtn.addEventListener("click", () => addNoteBox());
