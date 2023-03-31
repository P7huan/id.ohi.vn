const userItem = document.querySelector('.user__item')
const dropdown = document.querySelector('.dropdown')

userItem.addEventListener('click', () => {
  dropdown.classList.toggle('open')
})

document.addEventListener('click', function handleClickOutsideBox(event) {
  const user = document.querySelector('.user')

  if (!user.contains(event.target)) {
    dropdown.classList.remove('open')
  }
})
// đóng mở dropdow user
