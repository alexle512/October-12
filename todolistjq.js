


function onCheckBoxChecked(cb){

    if(cb.checked) {
        completedTasksList.appendChild(cb.parentElement)
    } else {pendingTasksList.appendChild(cb.parentElement)
        // go back to the pending list 
    }

   
}

function removeTask(t){
    console.log(t)
    t.parentElement.parentElement.removeChild(t.parentElement);
   
}

$("#addButton").click(function() {


let taskTextBox = $("#taskName")
let completedTasksList = $("completedTasksList")



let titleText = taskTextBox.val()

let checkBoxTask = `<li>${titleText}</li>`

let taskItem =  `
  <li>
    <input type='checkbox' onchange = 'onCheckBoxChecked(this)' />
    <label>${titleText}</label>
    <button onclick='removeTask(this)'>Remove</button>
   
  </li>
                  `

pendingTasksList.innerHTML += taskItem

})
