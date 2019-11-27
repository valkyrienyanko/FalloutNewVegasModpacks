var parameters = location.search.substring(1).split("&")
var modId = parameters[0].split('=')[1]

let myRequest = new Request('mods/' + modId)
fetch(myRequest).then(function(response) {
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status)
    }
    return response.json()
}).then(function(response) {
    const name = response.name
    const summary = response.summary
    const description = response.description
    const author = response.author
    const picture_url = response.picture_url
    
    if (name != null) {
      const title = createElement('a', name)
      title.style.fontSize = "xx-large"
      title.href = 'https://www.nexusmods.com/newvegas/mods/' + modId + '?tab=files'
    }
    
    if (picture_url != null) {
      const img = document.createElement('img')
      img.src = picture_url
      img.width = '500'
      document.body.appendChild(img)
    }
    
    if (summary != null) {
      createElement('h3', 'Summary')
      createElement('p', summary)
    }
    
    if (description != null) {
      createElement('h3', 'Description')
      createElement('p', description)
    }
    
    if (author != null) {
      createElement('h3', 'Author')
      createElement('p', author)
    }
})

function createElement(type, content) {
    const theElement = document.createElement(type)
    const theElementText = document.createTextNode(content)
    theElement.appendChild(theElementText)
    document.body.appendChild(theElement)
    return theElement;
}

function redirectHome() {
  window.location.href = '/'
}