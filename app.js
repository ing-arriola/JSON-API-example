const button=document.getElementById('cargar')

button.addEventListener('click',getDataFromAPI)

function getDataFromAPI(){
    let xhr = new XMLHttpRequest()

    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true)
    //When the server sends a response, do the anonymous function
    xhr.onload=function(){
        //Check if everthing was ok (ans=200)
        if(this.status === 200 ){
            //store data on answer... the data is 100 posts
            let answer=JSON.parse(this.responseText)
            //get the container for the data from the DOM
            const container=document.getElementById('listado')
            //Foreach to display each post on the HTML
            answer.forEach(element => {
                //define a variable for each title
                let title=document.createElement('h3')
                //insert data in the title
                title.innerHTML=element.title
                //Define a paragraph for each  post body
                let body=document.createElement('p')
                body.innerHTML=element.body
                //insert each title on the HTML
                container.appendChild(title)
                //insert each body on the HTML
                container.appendChild(body)
            });
        }
    }
    xhr.send()

}