const api= "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/weather%20Api%20key?unitGroup=metric&key=YOUR_API_KEY&contentType=json"
const search = document.querySelector('#search');
const btn = document.querySelector('.btn');
btn.addEventListener('click',getInput);

function getInput(event) {
    EventSource.preventDefault();
    if(EventSource.type=="click"){
getData(search.value)
console.log(search.value);
    }

}
// function getData(){
//     fetch($(api.key)weather?q=${search.value}&units=metric&appid=${})
// }