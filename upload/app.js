window.addEventListener("load", ()=>{
   const input = document.getElementById("upload");
   const filewrapper = document.getElementById(".filewrapper");
 
   input.addEventListener("change",(e)=>{
    let fileName = e.target.files[0].name;
    let fileSize = e.target.value.split("").pop();
    // console.log(fileName);
    fileshow(fileName, fileSize);
})
constfileshow = (fileName,filetype)=>{
    const showfileboxElem = document.createElement("div");
    showfileboxElem.classList.add("showfilebox");
    const leftElem = document.createElement("div");
    leftElem.classList.add("left");
const fileType = document.createElement("span");
  fileType.classList.add("filetype");
    fileTypeElem.innerHTML = filetype;
  leftElem.append(fileTypeElem);
showfileboxElem.append(leftElem);
    filewrapper.append(showfileboxElem);
}
    })