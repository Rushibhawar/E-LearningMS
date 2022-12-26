//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display(){
	
}
Display.prototype.add = function (book) {
    console.log("Adding to table");
    console.log("book name:"+book.name);
    var tableString = "<tr><td>"+book.name+"</td><td>"+book.author+"</td><td>"+book.type+"</td></tr>";
    document.getElementById("tableBody").innerHTML += tableString;
    alert("Book added successfully");
}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}

var form = document.getElementById("myform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
function submitForm(){
	
	console.log("inside function ")
	var name = document.getElementById("inputBookname");
	var author = document.getElementById("inputBookAuthor");
	var programming = document.getElementById("programming");
	var stockMarket = document.getElementById("stockmarket");
	var type;
	
	if (programming != null && programming.checked) {
        type = programming.value;
    }
    else if (stockMarket != null && stockMarket.checked) {
        type = stockMarket.value;
    }
	
	var book = new Book(name.value, author.value, type);
	var display = new Display();
	
	if(name == null || author == null || type == null || name == "" || author == "" ) {
		alert("Please fill details properly");
	}
	else if (display.validate(book) ) {
        display.add(book);
	}
	else {
		alert("ERROR! Book was not added");
	}    
}

//&& (name != null && author != null && type != null && name != "" && author != "" )


/*Login form*/
function loginForm() {
	 var firstName = document.forms["myForm"]["firstName"].value;
	 var lastName = document.forms["myForm"]["lastName"].value;
	 var city = document.forms["myForm"]["inputCity"].value;
	 var phone = document.forms["myForm"]["inputPhone"].value;

	 //var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
	 
	 if(firstName == "" || lastName == "" || city == "" || city == "DEFAULT" || phone == "") {
		//document.getElementById("wrong-details-alert").style.display = "block";
		alert("Please enter the details properly");
	 }
	 else {
		 
		 window.location.href = "index2.html";
		 alert("Successfully loged In");
		 //document.getElementById("successfully-registered").style.display = "block";
	 }
	 
	/* else if(!regName.test(firstName) || !regName.test(lastName)){
		 //alert("Invalid name");
		 document.getElementById("invalid-name").style.display = "block";
		}*/
	 
	 
}


/*search box*/
function searchFunction() {
	  var input, filter, table, tr, td, i, txtValue;
	  input = document.getElementById("searchInput");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("table");
	  tr = table.getElementsByTagName("tr");
	  for (i = 0; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[0];
	    if (td) {
	      txtValue = td.innerText;
	      if (txtValue.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}









