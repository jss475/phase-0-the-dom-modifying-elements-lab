// Write your code here!

const main = document.getElementById('main')
main.remove()

const h1Element = document.createElement('h1')


// document.querySelector('h1').id = 'victory'
// document.getElementById('victory').innerHTML = 'Joe is the champion'
// const newHeader = document.getElementById('victory')

const newHeader = document.createElement('h1')

debugger
newHeader.textContent  = 'Joe is the champion'
newHeader.id = "victory"
document.body.append(newHeader)