var nameInput = document.getElementById("nameInput");
var urlInput = document.getElementById("urlInput");
var websitesList = [];

if (localStorage.getItem("websites") != null) {
  websitesList = JSON.parse(localStorage.getItem("websites"));
  displayWebsites();
  console.log(websitesList);
}




function create() {
  var website = {
    name: nameInput.value,
    url: urlInput.value,
  };
   
  if (checks(true)) {
    return;
  } else {
    
    websitesList.push(website);
    localStorage.setItem("websites", JSON.stringify(websitesList));
    displayWebsites();
    console.log(websitesList);
    clear();
  }
}


function displayWebsites() {
  var websitesData = "";
  for (var i = 0; i < websitesList.length; i++) {
    websitesData += `
    <div id="website">  
    <p class="wbname">${websitesList[i].name}</p>
    <div class="btns">
    <a href="${websitesList[i].url}" target="_blank">
    <button class="btn btnGo">Go</button>
    </a>
    <button onclick="deleteWebsite(${i})" class="btn btnDel">Delete</button>
    <div>
    </div>
  </div>
</div>   
      `;
  }
  document.getElementById("all-websites").innerHTML = websitesData;
  return;
}

function deleteWebsite(index) {
  if (websitesList.length == 1) {
    websitesList.length = 0;
    displayWebsites();
  }
  websitesList.splice(1, 1);
  console.log(websitesList);
  displayWebsites();
  localStorage.setItem("websites", JSON.stringify(websitesList));
}

function clear() {
  nameInput.value = "";
  urlInput.value = "";
}



function checks(Boolean)
 {
  if (nameInput.value === "" || urlInput.value === "")
  {
    alert("Enter valid name or valid URL");
    return true;
  }
   else if (urlInput.value.includes(".com") != true && urlInput.value.includes(".net") != true  && urlInput.value.includes(".org") != true   ) 
   {
    alert('Website must contain ".com" or ".org" etc.. ')
    return true 
   }
    
    else {
      return false;
    }
  } 


  function writeDomain(){ 
    urlInput.value = 'https://'
  }
  