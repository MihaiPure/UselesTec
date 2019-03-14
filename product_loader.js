//Including the Product Class
function dynamicallyLoadScript(url){
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
    
}
dynamicallyLoadScript("product_class.js");

var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        helloWorld : function(i) {
            return _args[i];
        }
    };
}());


var total = [];
        
//Loading XML file
window.onload = function loadProducts(){
    
    getMovingSmurf();
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            LoadData (this);
        }

    };

    xhttp.open("GET", "products.xml", true);
    xhttp.send();

    
    //Loading the Product list into the webpage
    function LoadData(xml){
        var xmlDoc = xml.responseXML, container = document.createElement("div");
        //Creating the container
        container.id = ("products-wrapper");
        container.classList.add("container");
        document.body.insertBefore(container, document.getElementsByTagName("footer")[0]);
        
        
        var product_list = xmlDoc.getElementsByTagName("product"), i;

        for(i = 0; i < product_list.length; i++){
            //Creating a new product and its image wrapper
            var div = document.createElement("div"), wrapper = document.createElement("div");
            div.className += "product";
            wrapper.className += "img-wrapper";

            //Setting up the product's image
            var product_image = document.createElement("img");
            product_image.setAttribute("src", xmlDoc.getElementsByTagName("imageURL")[i].childNodes[0].nodeValue);
            wrapper.appendChild(product_image);

            //Setting up the product's displayed name and price
            var text = document.createElement("section"), header = document.createElement("h2"), price = document.createElement("p");
            header.innerHTML = xmlDoc.getElementsByTagName("manufacturer")[i].childNodes[0].nodeValue + " " + xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue + " " + xmlDoc.getElementsByTagName("color")[i].childNodes[0].nodeValue;
            price.innerHTML = "$" + xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue;
            text.appendChild(header);
            text.appendChild(price);
            div.classList.add(product_list[i].getAttribute("category"));
            
            
            ///Creating an array with all the products as objects
            total[i] = new Product(xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("manufacturer")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue, xmlDoc.getElementsByTagName("imageURL")[i].childNodes[0].nodeValue, product_list[i].getAttribute("category"), xmlDoc.getElementsByTagName("color")[i].childNodes[0].nodeValue);
            
            //Finally adding the product in the list
            div.appendChild(wrapper);
            div.appendChild(text);
            container.appendChild(div);
        }
        MYLIBRARY.init(total);
        load_cat();
        create_price_range();
        productSearchBar();
        selectManufacturer();
        sortProducts();
        createTextArea();
        alertComment();
        miscaRobotel();
    }
    
    
}



