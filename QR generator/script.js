let url = document.getElementById("url")
let textarea = document.getElementById("textarea")
let qrcodeforurl = document.getElementById("qrcodeforurl")
let qrcodefortextmore = document.getElementById("qrcodefortextmore")



function generateurl(){
    const baseurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url.value}`
    qrcodeforurl.src = baseurl
    url.value = ""
}

function textareafun(){
    const baseurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textarea.value}`
    qrcodefortextmore.src = baseurl
    textarea.value = ""
}