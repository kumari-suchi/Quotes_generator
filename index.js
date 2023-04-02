const btnele=document.getElementById("btn");
const quoele=document.getElementById("quo");
const autele=document.getElementById("author");
const apikey="3vTKBmrkgSGr8S8g00ZluA==RkEV1kaMaCauGsMj"
const option={
    method: 'GET',
    headers: {
        'X-Api-Key':apikey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/quotes?category=inspirational"
async function getQuo()
{
    try {
        quoele.innerText="Updating...";
        autele.innerText="Updating...";
        btnele,disabled=true;
        btnele.innerText="Loading...";
        const response=await fetch(apiURL,option);
        const data=await response.json();
        btnele,disabled=false;
        btnele.innerText="Tell me a quote";
        quoele.innerText=data[0].quote;
        autele.innerText="~"+data[0].author;
        
        
    } catch (error) {
        quoele.innerText="An error happened,try again later!";
        autele.innerText="...."
        btnele,disabled=false;
        btnele.innerText="Tell me a quote";
        console.log(error);
        
    }
    
}
btnele.addEventListener("click",getQuo)