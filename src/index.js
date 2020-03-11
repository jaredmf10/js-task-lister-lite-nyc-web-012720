
const form = document.getElementById('create-task-form')
document.addEventListener("DOMContentLoaded", () => {
  //find target (the button)
  //add event listener (click) to target (the button)
  //create post request on click
  // add to tasks somehow
  form.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log(event.target["new-task-description"].value)
    var taskDescription = document.getElementById("new-task-description").value
    var node = document.createElement("LI");
    var textnode = document.createTextNode(taskDescription);
    node.appendChild(textnode);
    document.getElementById("tasks").appendChild(node);
  })
});