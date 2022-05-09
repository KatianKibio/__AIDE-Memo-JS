

const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', function(){
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
    }
})

xhr.open('GET', 'https://reqres.in/api/users')
xhr.send()

