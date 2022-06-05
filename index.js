import data from "./data.js";
import {social} from "./data.js";

let socialContainer = document.querySelector(".social-links");
function displayData(data = [], parent) {
  data.forEach((element) => {
      let cont = document.createElement("div");
      let btn= document.createElement("button");
      btn.textContent = element.heading;
      btn.classList.add("accordion");
      let panel = document.createElement("div");
      panel.classList.add("panel")
      if(element.link){
        panel.innerHTML=`<p>${element.description}</p>
        <a target="_blanck" href=${element.link}>
      <button type="button" class="btn btn-primary">Primary</button></a>`;
      }else{
        panel.innerHTML=`<p>${element.description}</p>`;
      }
      btn.addEventListener("click",() =>{
        btn.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      })
      cont.append(btn,panel);
      parent.append(cont);
  });
}

for(let key in data){
    let parent = document.querySelector("."+key+">div");
    if(key != "about"){
        console.log(key);
        displayData(data[key],parent);
    } 
}

for(let element of social){
    let anchor = document.createElement("a");
    anchor.href=element.link;
    anchor.target="_blank";
    if(element.name === "gmail"){
        anchor.innerHTML=`<i class="fa fa-envelope" aria-hidden="true"></i>`;
    }else if(element.name === "facebook"){
        anchor.innerHTML=`<i class="fab fa-facebook-f"></i>`;
    }else if(element.name === "twiter"){
        anchor.innerHTML= `<i class="fab fa-twitter"></i>`;
    }else if(element.name === "insta"){
        anchor.innerHTML= `<i class="fab fa-instagram"></i>`;
    }else if(element.name === "linkedin"){
        anchor.innerHTML= `<i class="fab fa-linkedin-in"></i>`;
    }
    socialContainer.append(anchor);
}

