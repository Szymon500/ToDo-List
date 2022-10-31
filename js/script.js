const addButton = document.querySelector('.btn-add')
const taskList = document.querySelector('ul')
const popupEdit = document.querySelector('.popup')
const editAccept = document.querySelector('.accept')
const editCancel = document.querySelector('.cancel')
const popupText = document.querySelector('.popup-input')
const pError = document.querySelector('.error-info')
let id = 1
let scoreLi = 0
let currLi

const errorInfo =() =>{
	if(scoreLi != 0){
		pError.style.display = "none"
	}else{
		pError.style.display = "block"
	}
}

const doneTask = event => {
	const liParrent = event.target.parentElement.parentElement
	liParrent.style.textDecoration = 'line-through'
}

const deleteTask = event => {
	const liParrent = event.target.parentElement.parentElement
	liParrent.remove()
	scoreLi--
	errorInfo()
}

const cancelEdit = () => {
	popupEdit.style.display = 'none'
	popupText.style.border = '3px solid transparent'
}

const acceptEdit = () => {
	if (popupText.value != '') {
		const divChild = currLi.lastChild
		currLi.textContent = popupText.value
		currLi.append(divChild)
		popupEdit.style.display = 'none'
		popupText.value = ''
		popupText.style.border = '3px solid transparent'
	} else {
		popupText.style.border = '3px solid red'
	}
}

const editTask = event => {
	currLi = event.target.parentElement.parentElement
	popupEdit.style.display = 'block'
}

const addHandler = () => {
	const taskText = document.querySelector('.todo-input')
	if (taskText.value != '') {
		const listItem = document.createElement('li')
		const divTools = document.createElement('div')
		const btnComplete = document.createElement('button')
		const btnEdit = document.createElement('button')
		const btnDelete = document.createElement('button')
		const checkIcon = document.createElement('i')
		const timesIcon = document.createElement('i')

		listItem.setAttribute('data-id', `test${id}`)
		divTools.setAttribute('class', 'tools')
		btnComplete.setAttribute('class', 'complete')
		btnEdit.setAttribute('class', 'edit')
		btnDelete.setAttribute('class', 'delete')
		checkIcon.setAttribute('class', 'fas')
		checkIcon.classList.add('fa-check')
		timesIcon.setAttribute('class', 'fas')
		timesIcon.classList.add('fa-times')
		listItem.textContent = taskText.value
		btnComplete.appendChild(checkIcon)
		btnDelete.appendChild(timesIcon)
		btnEdit.textContent = 'EDIT'
		divTools.append(btnComplete, btnEdit, btnDelete)
		listItem.appendChild(divTools)
		id++
		scoreLi ++
		taskList.append(listItem)
		btnComplete.addEventListener('click', doneTask)
		btnDelete.addEventListener('click', deleteTask)
		btnEdit.addEventListener('click', editTask)
		taskText.value = ''
		errorInfo()
	}
}

const enterHandle = (event) =>{
	if(event.keyCode == 13){
		addHandler()
	}
}
addButton.addEventListener('click', addHandler)
window.addEventListener('keydown', enterHandle)
editCancel.addEventListener('click', cancelEdit)
editAccept.addEventListener('click', acceptEdit)




