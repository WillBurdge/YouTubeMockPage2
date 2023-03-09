const commentInput = document.getElementById("comment-input");
const commentSection = document.querySelector(".comment-section");

document.querySelector("button").addEventListener("click", function() {
  const commentDiv = document.createElement("div");
  commentDiv.innerHTML = "<p>You:</p><p>" + commentInput.value + "</p>";
  commentDiv.classList.add("comment");
  
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function() {
    commentSection.removeChild(commentDiv);
  });
  commentDiv.appendChild(deleteButton);
  
  commentSection.appendChild(commentDiv);
  
  commentInput.value = "";
});



