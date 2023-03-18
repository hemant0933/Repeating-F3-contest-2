let btn = document.getElementById('fetchBtn');
btn.addEventListener('click', getData);

async function getData(){

    console.log('getData button click');

    const url1 = 'https://dummyjson.com/posts'
    const url2 = 'https://dummyjson.com/products'
    const url3 = 'https://dummyjson.com/todos'
  
  
    const response1 = await fetch(url1)
    const data1 = await response1.json()
    const posts = data1.posts;
    // use a function to wait 
     await waitFor(1000);
    console.log(data1.posts)
    displaytable1(posts);
    

    const response2 = await fetch(url2)
    const data2 = await response2.json()
    const products = data2.products;
    // use a function to wait 
    await waitFor(2000);
    console.log(data2.products)
    displaytable2(products);
    
   
    const response3 = await fetch(url3)
    const data3 = await response3.json()
    const todos = data3.todos;
    // use a function to wait 
    await waitFor(3000);
    console.log(data3.todos)
    displaytable3(todos);
    // do what you want with data1 , data2 and data3 here 
}

let table1 = document.getElementById('tableoneBody')
let table2 = document.getElementById('tableTwoBody');
let table3 = document.getElementById('tableThreeBody');

    function displaytable1(posts){
        posts.map((val) => {
                table1.innerHTML += `
                <tr>
                <td> ${val.id}</td>
                <td>${val.title}</td>
                <td>${val.reactions}</td>
                <td>
                    <ul>
                    <li>${val.tags[0]}</li>
                    <li>${val.tags[1]}</li>
                    <li>${val.tags[2]}</li>
                    </ul>
                </td>
                <td>${val.body}</td>
                </tr>`
        })
    }

    function displaytable2(products){
        products.map((item) => {
            table2.innerHTML += `<tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td> <img src = ${item.images[0]} width='50%' alt = 'img'/>  </td>
            <td>${item.brand}</td>
            <td>${item.category}</td>
            <td>${item.description}</td>
            <td>${item.price}</td>
            </tr>`
        })
    }

    function displaytable3(todos){
        todos.map((val) => {
            table3.innerHTML += `
            <tr>
                <td>${val.id}</td>
                <td>${val.todo}</td>
                <td>${val.userId}</td>
                <td>${val.completed}</td>
            </tr>
            
            `
        })
    }

    function waitFor(time){
        return new Promise((resolve) => {
            setTimeout(resolve , time);
        })
    }