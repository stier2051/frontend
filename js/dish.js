function dishList() {
    fetch('http://localhost:8001/api/v1/dish/list')
    .then(response => response.json())
    .then(data => console.log(data))
}

// const dishList = async () => {
//     // fetch("fdjkf").then(ksljf).catch((error) => sdf).finally()

//     try {
//         const response = await fetch('http://localhost:8001/api/v1/dish/list')
//         // {
//         //     headers: {
//         //         'Content-Type' : 'application/json',
//         //         'Access-Control-Allow-Origin' : 'http://localhost:8001'
//         //     }
//         // })
//         const data = await response.json()

//     console.log("data", data);
//     } catch(error) {

//     } finally {

//     }

    // const promise = new Promise.some([fetch])



// }