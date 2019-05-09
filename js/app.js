document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const submitForm = document.querySelector('#new-item-form');
  submitForm.addEventListener('submit', handleSubmit)

  const body = document.querySelector('body');

  body.addEventListener('mouseover', function(){
    if (body.id === 'body'){
      body.id = 'body1'
    }else if (body.id === 'body1'){
      body.id = 'body2'
    }else{
      body.id = 'body'
    }

  })
})

const handleSubmit = function (event) {
  event.preventDefault()
  console.log(event)

  const resultListItem = document.querySelector('#reading-list')

  const li = document.createElement('li')
  resultListItem.appendChild(li)

  const title = document.createElement('h2')
  li.appendChild(title)
  title.textContent = `Title: ${event.target.title.value}`

  const author = document.createElement('h3')
  li.appendChild(author)
  author.textContent = `Author: ${event.target.author.value}`

  const category = document.createElement('p')
  li.appendChild(category)
  category.textContent = `Category: ${event.target.category.value}`



  // li.textContent = ${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`
}
