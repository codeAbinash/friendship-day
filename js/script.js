const sNameInput = document.getElementById('sName')
const fNameInput = document.getElementById('fName')


let url = new URL(document.location)
let urlString = url.toString().replace('$','&')
url = new URL(urlString)


const params = url.searchParams
const selfName = params.get('n') || 'Your Friend'
const friendName = params.get('f') || ' '


const selfNameDom = document.querySelectorAll('.selfName')
const fNameDom = document.querySelectorAll('.fName')

selfNameDom.forEach(elem => {
    elem.innerText = selfName;
})

fNameDom.forEach(elem => {
    elem.innerText = friendName;
})



sNameInput.onkeyup = () => {
    createLink()
}
fNameInput.onkeyup = () => {
    createLink()
}



const myUrl = new URL(document.location)
const myParams = new URLSearchParams(myUrl)

const addressDOM = document.querySelector('.main .wish input[type=url]')




function createLink() {
    const fName = document.getElementById('fName').value || " "
    const sName = document.getElementById('sName').value || "Your Friend"
    myParams.set('n', sName)
    myParams.set('f', fName)
    myUrl.search = myParams.toString()
    addressDOM.value = myUrl
}

function copy() {
    addressDOM.disabled = false;
    addressDOM.select();
    document.execCommand("copy")
    addressDOM.disabled = true;
    alert("Copied link, now send it to your friend.")
}



function sendLink() {
    const link = ('whatsapp://send?text=' + myUrl).replace('&', '$')
    window.open(link)
}