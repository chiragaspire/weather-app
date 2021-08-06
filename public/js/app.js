console.log('Client side javascript file is loaded!')



const formHandler = document.querySelector('form');
console.log(formHandler)
const search = document.querySelector('input');

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


formHandler.addEventListener('submit',(e) => {
    e.preventDefault();
    
    messageOne.textContent='Loading...'
    messageTwo.textContent = '';
    const location = search.value;
    
    fetch(`http://localhost:4000/weather?address=${location}`).then((res) => {
        res.json().then((data) => {
            
                if (data.error) {
                    console.log(data.error);
                    
                    messageOne.textContent=data.error
    
                }
                else {
                    console.log(data.forecast);
                    console.log(data.location);
                    console.log(data.address);
                    messageOne.textContent = data.forecast;
                    messageTwo.textContent = data.location;
                }
                
                
            })
        })
    
    
})