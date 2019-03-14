
var load_cat = function loadfilter_category(){
    var app_container = document.getElementsByClassName("filter-app")[0], i;

    var categories = document.createElement("form"), titlu = document.createElement("h2");
    titlu.appendChild(document.createTextNode("Category"));
    categories.appendChild(titlu);
    var cat_list = document.createElement("ul");
    cat_list.id = "catList";

    var cat = [], l = [];
    
    for(i = 0; i< 4; i++){
        cat[i] = document.createElement("input");
        cat[i].setAttribute("type", "checkbox");
        cat[i].setAttribute("checked", "true");
    }

    cat[0].setAttribute("value", "phones");
    cat[1].setAttribute("value", "headphones");
    cat[2].setAttribute("value", "tvs");
    cat[3].setAttribute("value", "vr");

    for(i = 0; i< 4; i++){
        var labelwrapper = document.createElement("li");
        l[i] = document.createElement("label");
        l[i].appendChild(cat[i]);
        l[i].appendChild(document.createTextNode(cat[i].getAttribute("value")));
        labelwrapper.appendChild(l[i]);
        cat_list.appendChild(labelwrapper); 
    }
    categories.appendChild(cat_list);
    var categoryContainer = document.createElement("div");
    categoryContainer.appendChild(categories);
    app_container.appendChild(categoryContainer);
    
    
    
    for(i = 0; i<4;i++){
        if(cat[i].type === 'checkbox'){
            cat[i].onclick = function select_wanted(){
                
                var lst = document.querySelectorAll("."+this.getAttribute("value"));
                if(this.checked){
                    for(var iterator = 0; iterator<lst.length; iterator++){
                        lst[iterator].style.display = "block";    
                    }
                    
                    
                }
                else{
                    for(var iterator = 0; iterator<lst.length; iterator++){
                        lst[iterator].style.display = "none";    
                    }
                }
            }
        }
    }
    
    
}























