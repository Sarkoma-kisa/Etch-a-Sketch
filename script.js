
function createField () {
  const sizeField = prompt('Is size field?', 16)
  
  const container = document.getElementById('container');

  container.className = 'container'
  container.style.gridTemplateRows = `repeat(${sizeField}, 1fr)`
  container.style.gridTemplateColumns = `repeat(${sizeField}, 1fr)`
  
  for(i = 0; i < Math.pow(sizeField, 2); i++) {
    const div = document.createElement('div')

    div.className = 'partField'
    div.style.border = '1px solid grey'

    div.addEventListener('mouseover', function () {
      div.style.backgroundColor = 'black'
    }) 

    container.appendChild(div)
  }  
}