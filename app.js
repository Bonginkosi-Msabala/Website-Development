
const icons = [
    {
        id:1,
        picture:"images/client-databiz.svg", 

    },

    {
        id:2,
        picture:"images/client-audiophile.svg",

    },

    {
        id:3,
        picture:"images/client-meet.svg",

    },

    {
        id:4,
        picture:"images/client-maker.svg",

    },

]

const bottomIcons = document.querySelector(".bottomIcons")

window.addEventListener("DOMContentLoaded", function(){

    const showInhtlml = icons.map((icons,index) =>{
        return `
        <div class="bottomIcons">
        <img class="bottompics" src=${icons.picture}> 
     
        
        </div>
    
    `
    
    })

    bottomIcons.innerHTML = showInhtlml


} )





