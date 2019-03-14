



var app_container = document.getElementsByClassName("filter-app")[0]
//Dynamically creating a range input
function create_price_range(){
    var rangeWrapper = document.createElement("div"), rangeTitle = document.createElement("h2");
    rangeTitle.appendChild(document.createTextNode("Price"));
    
    var maxp_label = document.createElement("label");
    maxp_label.setAttribute("for", "max-price");
    maxp_label.innerHTML = "Maximum ";
    var max_price = document.createElement("input");
    max_price.setAttribute("type", "range");
    max_price.setAttribute("name", "maxPrice");
    max_price.setAttribute("min", 0);
    max_price.setAttribute("max", 2000);
    max_price.setAttribute("value", 2000);
    max_price.id = "max-price";
    
    
    var minp_label = document.createElement("label");
    minp_label.setAttribute("for", "min-price");
    minp_label.innerHTML = "Minimum ";
    var min_price = document.createElement("input");
    min_price.setAttribute("type", "range");
    min_price.setAttribute("name", "minPrice");
    min_price.setAttribute("min", 0);
    min_price.setAttribute("max", 2000);
    min_price.setAttribute("value", 0);
    min_price.id = "min-price";
    
    rangeWrapper.appendChild(rangeTitle);
    
    var lst = document.querySelectorAll(".product"), i;
    console.log(lst[0]);
    rangeWrapper.appendChild(maxp_label);
    maxp_label.appendChild(max_price);
    var currPrice = document.createElement("p");
    currPrice.innerHTML = max_price.value;
    maxp_label.appendChild(currPrice);
    max_price.onchange = function(){
        currPrice.innerHTML = max_price.value;
        for(i=0;i<lst.length;i++){
            if(parseInt(total[i].price) > this.value){
                lst[i].style.display = "none";
            }
            else{
                if(parseInt(total[i].price) > min_price.value){
                    lst[i].style.display = "block";
                }
            }
        }
    }
    
    
    rangeWrapper.appendChild(minp_label);
    minp_label.appendChild(min_price);
    var currPrice2 = document.createElement("p");
    currPrice2.innerHTML = min_price.value;
    minp_label.appendChild(currPrice2);
    min_price.onchange = function(){
        currPrice2.innerHTML = min_price.value;
        for(i=0;i<lst.length;i++){
            if(parseInt(total[i].price) < this.value){
                lst[i].style.display = "none";
            }
            else{
                if(parseInt(total[i].price) < max_price.value){
                    lst[i].style.display = "block";
                }
            }
        }
    }
    
    app_container.appendChild(rangeWrapper);
    
}







