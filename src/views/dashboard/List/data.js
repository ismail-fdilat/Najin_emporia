const requestOptions = {
    method: 'GET',
    redirect: 'follow'
}
let data = {}
fetch("http://localhost:3033/domain_volumes", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        data = result
    })
    .catch(error => (data = error))

export default data