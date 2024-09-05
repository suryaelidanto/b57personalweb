const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.npoint.io/325670a0ea8fb06fe0df", true)

xhr.onerror = () => {
  console.log("Network Error!")
}

xhr.onload = () => {
  console.log(xhr.response)
}

xhr.send()