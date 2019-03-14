
function getMovingSmurf(){
    var smurfCont = document.createElement("div");
    smurfCont.id = "smurfy";
    var smurf = document.createElement("img");
    smurf.setAttribute("src", "./images/smurf.png");
    smurf.setAttribute("alt", "Smurfy");
    smurfCont.appendChild(smurf);
    var poezie = "My menu is here to help you!", once = true;
    var poeziep = document.createElement("p");
    poeziep = document.createTextNode(poezie);
    poeziep.id = "textSmurf";
    smurfCont.appendChild(poeziep);
    if(window.innerWidth > 420)
    var handler;
    window.addEventListener("mousemove",handler = function(event){
        smurfCont.style.position = "absolute";
        smurfCont.style.top = event.clientY-100 + "px";
        smurfCont.style.left = event.clientX-170 + "px";
        smurf.style.height = 200 + "px";
        smurf.style.width  = "auto";
        smurfCont.style.zIndex = 99000;
        
        smurfCont.style.fontSize = 20 + "px";
        var appContainer = document.getElementsByClassName("filter-app")[0];
        appContainer.appendChild(smurfCont);
        var once = true;
        window.setTimeout(function(e){
            window.removeEventListener("mousemove", handler);
            
            if(smurfCont.childNodes[1]){
                smurfCont.removeChild(smurfCont.childNodes[1]);
                smurfCont.style.position = "static";
                
                
            }
        },3000)
    })
    window.setTimeout(makeSmurfTickle, 3001);
}

function productSearchBar() {
    var input, filter_app;
    filter_app = document.getElementsByClassName("filter-app")[0];
    input = document.createElement("input");
    input.setAttribute("type", "text");
    input.id = "mySearchbar";
    input.setAttribute("onkeyup", "searchFunction()");
    input.setAttribute("placeholder", "Search for products...");
    input.setAttribute("title", "Type a product's partial or full name to search for it");
    filter_app.parentNode.insertBefore(input, filter_app);
}

function searchFunction(){
    var input, filter,container, products, a, i, txtValue;
    input = document.getElementById("mySearchbar");
    filter = input.value.toUpperCase();
    
    container = document.getElementById("products-wrapper");
    products = container.getElementsByClassName("product");
    for (i = 0; i < products.length; i++) {
        a = products[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}

function selectManufacturer(){
    var filter_app, container, products, div, i, titlu;
    filter_app = document.getElementsByClassName("filter-app")[0];
    container = document.getElementById("products-wrapper");
    products = container.getElementsByClassName("product");
    
    div = document.createElement("div");
    filter_app.appendChild(div);
    titlu = document.createElement("h2");
    titlu.innerHTML = "Manufacturer";
    div.appendChild(titlu);
    
    
    var select = document.createElement("select");
    var option = [];
    option[0] = document.createElement("option");
    option[1] = document.createElement("option");
    option[2] = document.createElement("option");
    option[3] = document.createElement("option");
    option[4] = document.createElement("option");
    option[5] = document.createElement("option");
    
    option[0].setAttribute("value", "any");
    option[1].setAttribute("value", "Tango");
    option[2].setAttribute("value", "Beets");
    option[3].setAttribute("value", "SoundScape");
    option[4].setAttribute("value", "Mango");
    option[5].setAttribute("value", "Ceva");
    
    option[0].appendChild(document.createTextNode("any"));
    option[1].appendChild(document.createTextNode("Tango"));
    option[2].appendChild(document.createTextNode("Beets"));
    option[3].appendChild(document.createTextNode("SoundScape"));
    option[4].appendChild(document.createTextNode("Mango"));
    option[5].appendChild(document.createTextNode("Ceva"));
    
    for(i=0 ;i < option.length; i++){
        select.appendChild(option[i]);
    }
    div.appendChild(select);
    
    select.onchange = function(){
        if(this.value === 'any'){
            for(i = 0; i < products.length; i++){
                products[i].style.boxShadow = "";
            }
        }
        else{
            for(i=0; i<products.length; i++){
                if(total[i].manufacturer === this.value){
                    products[i].style.boxShadow = "0 0 20px #fbffc4";
                }
                else{
                    products[i].style.boxShadow = "";
                }
            }
        }
    }
    
    
    
    
    
}

function sortProducts(){
    var labels = [], inputs = [], filter_app, container, products, div, i, titlu;
    
    filter_app = document.getElementsByClassName("filter-app")[0];
    container = document.getElementById("products-wrapper");
    products = container.getElementsByClassName("product");
    
    div = document.createElement("div");
    filter_app.appendChild(div);
    titlu = document.createElement("h2");
    titlu.innerHTML = "Sort";
    div.appendChild(titlu);
    
    inputs[0] = document.createElement("input");
    inputs[1] = document.createElement("input");
    inputs[2] = document.createElement("input");
    inputs[0].setAttribute("type", "radio");
    inputs[1].setAttribute("type", "radio");
    inputs[2].setAttribute("type", "radio");
    
    inputs[0].setAttribute("name", "criteria");
    inputs[1].setAttribute("name", "criteria");
    inputs[2].setAttribute("name", "criteria");
    
    inputs[0].setAttribute("value", "alphabetically");
    inputs[1].setAttribute("value", "price");
    inputs[2].setAttribute("value", "color");
    
    inputs[0].id = "alphabetically";
    inputs[1].id = "price";
    inputs[2].id = "color";
    
    labels[0] = document.createElement("label");
    labels[1] = document.createElement("label");
    labels[2] = document.createElement("label");
    
    for(i = 0; i<3;i++){
        div.appendChild(inputs[i]);
        div.appendChild(labels[i]);
    }
    
    labels[0].setAttribute("for", "alphabetically");
    labels[1].setAttribute("for", "price");
    labels[2].setAttribute("for", "color");
    
    labels[0].innerHTML = "Alphabetically";
    labels[1].innerHTML = "by Price";
    labels[2].innerHTML = "by Color";
    
    labels[0].parentElement.insertBefore(document.createElement("br"), labels[0].nextSibling);
    labels[1].parentElement.insertBefore(document.createElement("br"), labels[1].nextSibling);
    labels[2].parentElement.insertBefore(document.createElement("br"), labels[2].nextSibling);
    
    
    filter_app.appendChild(div);
    
    for(i = 0; i<3; i++){
        inputs[i].addEventListener("click", function(event){
            var toSort = products, by = this.value;
            toSort = Array.prototype.slice.call(toSort, 0);
            toSort.sort(function(a,b){
                if(by === 'alphabetically'){
                    var aord = a.getElementsByTagName("h2")[0];
                    var bord = b.getElementsByTagName("h2")[0];
                    if(aord.innerHTML.toLowerCase() < bord.innerHTML.toLowerCase()){
                        return -1;
                    }
                    if(aord.innerHTML.toLowerCase() > bord.innerHTML.toLowerCase()){
                        return 1;
                    }
                    return 0;
                }
                else if(by === 'price'){
                    var aord = parseInt(a.getElementsByTagName("p")[0].innerHTML.substring(1));
                    var bord = parseInt(b.getElementsByTagName("p")[0].innerHTML.substring(1));
                    return aord - bord;
                }
                else if(by === 'color'){
                    var aord = a.getElementsByTagName("h2")[0].innerHTML;
                    var bord = b.getElementsByTagName("h2")[0].innerHTML;
                    var aordsecond = aord.split(" ");
                    var bordsecond = bord.split(" ");
                    if(aordsecond[aordsecond.length-1] < bordsecond[bordsecond.length-1]){
                        return -1;
                    }
                    if(aordsecond[aordsecond.length-1] > bordsecond[bordsecond.length-1]){
                        return 1;
                    }
                    return 0;
                }
            })
            
            var totalcpy = total;
            
            totalcpy = Array.prototype.slice.call(totalcpy, 0);
            totalcpy.sort(function(a,b){
                if(by === 'alphabetically'){
                    var aord = a.manufacturer+a.name+a.color;
                    var bord = b.manufacturer+b.name+b.color;
                    if(aord.toLowerCase() < bord.toLowerCase()){
                        return -1;
                    }
                    if(aord.toLowerCase() > bord.toLowerCase()){
                        return 1;
                    }
                    return 0;
                }
                 else if(by === 'price'){
                    var aord = parseInt(a.price);
                    var bord = parseInt(b.price);
                    return aord-bord; 
                 }
                else if(by === 'color'){
                    var aord = a.color;
                    var bord = b.color;
                    if(aord.toLowerCase() < bord.toLowerCase()){
                        return -1;
                    }
                    if(aord.toLowerCase() > bord.toLowerCase()){
                        return 1;
                    }
                    return 0;
                }
            })
            total = totalcpy;
            container.innerHTML = "";
            for(i = 0; i<toSort.length; i++){
                container.appendChild(toSort[i]);
            }
        })
    }
    
    
    
}

function makeSmurfTickle(){
    var smurf = document.getElementById("smurfy");
    window.addEventListener("keyup", function(event){
        if(event.keyCode === 39){
            smurf.style.position = "absolute";
            var moveSmurf = setInterval(function(){
                
                var pos_left = Math.floor(Math.random()*(window.innerWidth -smurf.offsetWidth - 10));
                var pos_top = Math.floor(Math.random()*(window.innerHeight -smurf.offsetHeight));
                
                smurf.style.top = pos_top + "px";
                smurf.style.left = pos_left + "px";
                
                
            }, 200);
            window.addEventListener("keyup", function(ev){
                if(ev.keyCode === 37){
                    
                    clearInterval(moveSmurf);
                    smurf.style.position = "";
                }
            })
        }

        
        
        
    })
}

function createTextArea(){
    
    var title = document.createElement("h2");
    title.innerHTML = "What do you think about the utility of this website?";
    var wrapper = document.createElement("div");
    var textarea = document.createElement("textarea");
    var product_wrapper = document.getElementById("products-wrapper");
    product_wrapper.parentElement.insertBefore(wrapper, product_wrapper);
    var form = document.createElement("form");
    form.id = "userComment";
    form.appendChild(document.createTextNode("Your name: "));
    var nume = document.createElement("input");
    nume.setAttribute("type", "text");
    nume.setAttribute("name", "username");
    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    wrapper.appendChild(title);
    form.appendChild(nume);
    form.appendChild(submit);
    wrapper.appendChild(form);
    wrapper.appendChild(textarea);
    wrapper.id = "textarea-wrapper";
    textarea.id = "myTextarea";
    textarea.setAttribute("form", "userComment");
    
    submit.onclick = function(){
        var d = new Date();
        localStorage.setItem("name", nume.value);
        localStorage.setItem("comment", textarea.value);
        localStorage.setItem("date", d);
    }
    
}

function alertComment(){
    if(localStorage.getItem("name") != null && localStorage.getItem("comment") != null){
        alert(localStorage.getItem("name") + " said: '" + localStorage.getItem("comment") + "' on " + localStorage.getItem("date"));    
    }
}


function miscaRobotel(){
    var wrapper = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", "./images/walle.png");
    wrapper.appendChild(img);
    wrapper.style.position = "absolute";
    wrapper.style.height = 100 + "px";
    wrapper.style.bottom = 0;
    wrapper.style.left = 200;
    img.style.height = 100 + "%";
    img.style.width = "auto";
    document.body.appendChild(wrapper);
    console.log("misc")
    var pos = 0;
    var id  = setInterval(frame, 5);
    function frame(){
        
        if(pos == window.innerWidth - 120){
            wrapper.parentElement.removeChild(wrapper);
            
            clearInterval(id);
        }
        else{
            pos++;
            wrapper.style.left = pos + "px";
        }
    }
    
}



/*
    animatie independenta de utilizator
*/








