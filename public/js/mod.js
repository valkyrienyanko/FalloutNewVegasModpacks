var parameters = location.search.substring(1).split("&")
var modId = parameters[0].split('=')[1]

let myRequest = new Request('mods/' + modId)
fetch(myRequest).then(function(response) {
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status)
    }
    return response.json()
}).then(function(response) {
    const paragraph = document.createElement('p')
    const summary = document.createTextNode(response.summary)
    paragraph.appendChild(summary)
    
    document.body.appendChild(paragraph)
})

function redirectHome() {
  window.location.href = '/'
}