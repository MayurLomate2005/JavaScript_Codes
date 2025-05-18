// accessing attributes -(id,class)
document.getElementById()
document.getElementsByClassName()
// can store in a variable
const ID = document.getElementById()
const CLASS  =document.getElementsByClassName()
// getElementbyID() : -
      //getAttribute
      ID.getAttribute("here we have to specify which attribute we have to retrive it ") // when we console log it , it will return the value inside it 
      ID.setAttribute("set an element","give the value of element") // but when we try to console.log then it will show undefined , if we want to 
      // see the result if the value is changed or not we need to use getattribute again to see the updated code .

      // to do manipulation on the operator we can store it in a variable and manipulate it 
      const change = ID.getAttribute("here we have to specify which attribute we have to retrive it ") 
      const updated =  ID.setAttribute("set an element","give the value of element")


      //to get content inside any tag:
             //.textContent - it gives complete content
             // if we try to access the HTML Collection then to access the it we need to use the array system like we need to do indexing
             ID[0].textContent
             //.innerHTML - it gives complete HTML of the attribute
             ID[0].innerHTML
             //.innerText - if any style is added , if you want only visual chnages then u can use innertext
             ID[0].innerText


// getElementbyClassName() : - This Same as getElementbyID

// In querySelctors to access class you need to use (.) and for id u need to use (#)
//querySelector() - it gives 1st element you trying to access.
//querySelectorall() - it gives List of all elements you tyring to access.
       // While Using the QuerySelectorall we got an NODELIST Check its prototype which functions we can use on it 
       // getElement by ID , CLASSNAME AND OTHER TAG GIVES THE HTMLCOLLECTION
       // QuerySelectorall gives nodelist 
       // we cant use foreach loop on htmlcollection we need to convert it .  
// Convert HTML Collection into Array :_ Array.from(HTML Collection Stored in a variable)
