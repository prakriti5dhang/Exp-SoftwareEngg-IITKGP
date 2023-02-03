/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Use Case Diagrams and Capturing Use Case Scenarios
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("exercise2").style.display="none";    
        document.getElementById("ex2").style.display="none";    
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result").style.display="block";
        document.getElementById("dispviewbtn").disabled=false;
        document.getElementById("viewsol").disabled=true;
       
    }
    if(ex.options[ex.selectedIndex].value==2){
      document.getElementById("exercise2").style.display="block";
      document.getElementById("ex1").style.display="none";
      document.getElementById("exercise1").style.display="none";
      document.getElementById("ex2").style.display="block"; 
      document.getElementById("dispres").style.display="block";
      document.getElementById("show_result").style.display="block";
      document.getElementById("dispviewbtn").disabled=false;
      document.getElementById("viewsol").disabled=true;
     
  }
    
    if(ex.options[ex.selectedIndex].value==0){
        document.getElementById("exercise1").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("exercise2").style.display="none";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result").style.display="none";
        document.getElementById("dispviewbtn").disabled=true;
        document.getElementById("viewsol").disabled=true;
        
    }
}
/* Submit button to directly view the solution*/

function viewsolutionb(){
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
}

function solview(){


    
    document.getElementById("viewsol").disabled=true;
}
 
/*********************************************Function for Table 1 ****************************************/

/*let newCheckLabel = document.createElement('LABEL');
newCheckLabel.setAttribute('for', newCheckBoxID);
let labelTextNode = document.createTextNode(inpt1);
newCheckLabel.appendChild(labelTextNode);
newLi.appendChild(newCheckLabel);*/
let  inpt1;
function addbtnt1(){
let  newLi, newdiv;
inpt1=document.getElementById("inp1").value;

//var rbtn=document.createElement("button");
  //rbtn.setAttribute("id", "removebtnact");
  //rbtn.setAttribute("type", "button");
  //rbtn.setAttribute("class", "btn btn-danger");
  //rbtn.setAttribute("style","width:10px; height:10px;");
  
  //rbtn.setAttribute("onclick", "removerowuc(this)");

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  //rbtn.appendChild(newIconbtn);   

newLi = document.createElement("li");
newdiv = document.createElement("div");
newdiv.setAttribute("class", "form-check");
newLi.appendChild(newdiv);

let liTextNodeact = document.createTextNode(inpt1);
newdiv.appendChild(liTextNodeact);
newdiv.appendChild(newIconbtn);
        // this just makes sure a user cant enter in a blank value
  
  if (inpt1 == "") {
    alert("Please Enter Noun/Noun Phrase Before Click Add Button");
  } else {

  document.getElementById('actord').appendChild(newLi);
  document.getElementById("inp1").value="";

/* Actor = Select option from the dropdown */
let newOptionID;
newOptionID = 'newOption_' + inpt1;
  
let newOption = document.createElement('option');
let optionText = document.createTextNode(inpt1);
// set option text
newOption.appendChild(optionText);
// and option value

newOption.setAttribute("id", newOptionID);
newOption.setAttribute('value',inpt1);
let select1 = document.getElementById('selectactuc1'); 
select1.appendChild(newOption);

/* Use Case = Select option from the dropdown */
let newOptionID2;
newOptionID2 = 'newOption_' + inpt1;
  
let newOption2 = document.createElement('option');
let optionText2 = document.createTextNode(inpt1);
// set option text
newOption2.appendChild(optionText2);
// and option value

newOption2.setAttribute("id", newOptionID2);
newOption2.setAttribute('value',inpt1);
let select2 = document.getElementById('selectactuc2'); 
select2.appendChild(newOption2);


}

}
 /*************************************Function for Table 2***********************************************/  
let  inpt2;
 
 function addbtnt2() {
    

  let   newLi, newdiv;
  inpt2=document.getElementById("inp2").value;

  /* var rbtn=document.createElement("button");
  rbtn.setAttribute("id", "removebtnuc");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerowuc(this)"); */

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  newLi = document.createElement("li");
  newdiv = document.createElement("div");
  newdiv.setAttribute("class", "form-check");
  newLi.appendChild(newdiv);
  
  let liTextNodeuc = document.createTextNode(inpt2);
  newdiv.appendChild(liTextNodeuc);
  newdiv.appendChild(newIconbtn); 
          // this just makes sure a user cant enter in a blank value
    
    if (inpt2 == "") {
      alert("Please Enter Noun/Noun Phrase Before Click Add Button");
    } 
    
   
      else {
  
    document.getElementById('usecased').appendChild(newLi);
    document.getElementById("inp2").value="";
   
   
    /* Use Case=Select option from the dropdown  */
  let newOptionID;
  newOptionID = 'newOption_' + inpt2;
    
  let newOption = document.createElement('option');
  let optionText = document.createTextNode(inpt2);
  // set option text
  newOption.appendChild(optionText);
  // and option value
  
  newOption.setAttribute("id", newOptionID);
  newOption.setAttribute('value',inpt2);
  let select2 = document.getElementById('selectactuc2'); 
  select2.appendChild(newOption);

  /* Actor = Select option from the dropdown */
  let newOptionID1;
  newOptionID1 = 'newOption_' + inpt2;
    
  let newOption1 = document.createElement('option');
  let optionText1 = document.createTextNode(inpt2);
  // set option text
  newOption1.appendChild(optionText1);
  // and option value
  
  newOption1.setAttribute("id", newOptionID1);
  newOption1.setAttribute('value',inpt2);
  let select1 = document.getElementById('selectactuc1'); 
select1.appendChild(newOption1);
  
  
  }









    /*var category= document.getElementById("selectcat");
   var checkedvalue= document.querySelector('input[type=checkbox][name=categoryselect]:checked').value
    alert(checkedvalue);

    /*********************************************** Category-People*************************************************/ 
    /*if(((checkedvalue=="Mr Roy") || (checkedvalue=="boss")|| (checkedvalue=="son") || (checkedvalue=="Mr Bose") || (checkedvalue=="drives") || (checkedvalue=="passenger") || (checkedvalue=="persons") || (checkedvalue=="neighbour"))&& (category.options[category.selectedIndex].value==3) ){
        let pnewLi = document.createElement("li");
        let liTextNodep = document.createTextNode(checkedvalue);
        pnewLi.appendChild(liTextNodep);
        // this just makes sure a user cant enter in a blank value
       
        document.getElementById('peoplet3').appendChild(pnewLi);*/
          
      
        
        
    }

   
     /*************************************Function for Table 3***********************************************/  

     function addbtnt3(){
      var objsel1= document.getElementById("selectactuc1");
      var dobj1 =objsel1.options[objsel1.selectedIndex].value;
       //alert(dobj1);
       var objsel2= document.getElementById("selectactuc2");
       var dobj2 =objsel2.options[objsel2.selectedIndex].value;
        //alert(dobj2);
        var objselrel= document.getElementById("selectrel");
        var dobjrel =objselrel.options[objselrel.selectedIndex].value;
         //alert(dobjrel);
  var inpt3=document.getElementById("labelt3i").value;
  //alert(inpt3);
  var rbtn=document.createElement("button");
  rbtn.setAttribute("id", "removebtn");
  rbtn.setAttribute("type", "button");
  rbtn.setAttribute("class", "btn btn-danger");
  rbtn.setAttribute("onclick", "removerow(this)");

  var newIconbtn = document.createElement("i");
  newIconbtn.setAttribute("class", "bi bi-dash-circle");
       rbtn.appendChild(newIconbtn);   

if(((dobj1 == "user")|| (dobj1 == "User")|| (dobj1 == "student") ||((dobj1 == "member"))) && (dobjrel == "Association") && ((dobj2 == "issue")) ){
  var tr = document.createElement('tr');
  tr.setAttribute("id","t5uc");
  document.getElementById('tbodytbl5').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");
  var tdval1=document.createTextNode(dobj1);
  var tdval2=document.createTextNode(dobjrel);
  var tdval3=document.createTextNode(dobj2);
  var tdval4=document.createTextNode(inpt3);
  //var tdval5=document.appendChild(newIconbtn);
 // tbody.appendChild(tr);
 
  
  
  
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  td4.appendChild(tdval4);
  td5.appendChild(rbtn);
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  document.getElementById('tbodytbl5').appendChild(tr);

}

if(((dobj1 == "user")|| (dobj1 == "User")|| (dobj1 == "student") ||((dobj1 == "member"))) && (dobjrel == "Association") && ((dobj2 == "return")) ){
  var tr = document.createElement('tr');
  tr.setAttribute("id","t5uc");
  document.getElementById('tbodytbl5').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");
  var tdval1=document.createTextNode(dobj1);
  var tdval2=document.createTextNode(dobjrel);
  var tdval3=document.createTextNode(dobj2);
  var tdval4=document.createTextNode(inpt3);
  //var tdval5=document.appendChild(newIconbtn);
 // tbody.appendChild(tr);
 
  
  
  
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  td4.appendChild(tdval4);
  td5.appendChild(rbtn);
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  document.getElementById('tbodytbl5').appendChild(tr);

}

if(((dobj1 == "user")|| (dobj1 == "User")|| (dobj1 == "student") ||((dobj1 == "member"))) && (dobjrel !== "Association") && ((dobj2 == "issue")|| (dobj2 == "return")) ){
  alert(dobjrel +" is not possible between" +dobj1 +"and" +dobj2 );
}

if(((dobj1 == "librarian")) && (dobjrel == "Association") && ((dobj2 == "issue")) ){
  var tr = document.createElement('tr');
  tr.setAttribute("id","t5uc2");
  document.getElementById('tbodytbl5').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");

  var tdval1=document.createTextNode(dobj1);
  var tdval2=document.createTextNode(dobjrel);
  var tdval3=document.createTextNode(dobj2);
  var tdval4=document.createTextNode(inpt3);
 
 // tbody.appendChild(tr);
  
  
  
  
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  td4.appendChild(tdval4);
  td5.appendChild(rbtn);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  
  document.getElementById('tbodytbl5').appendChild(tr);

}

if(((dobj1 == "librarian")) && (dobjrel == "Association") && ((dobj2 == "return")) ){
  var tr = document.createElement('tr');
  tr.setAttribute("id","t5uc2");
  document.getElementById('tbodytbl5').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");

  var tdval1=document.createTextNode(dobj1);
  var tdval2=document.createTextNode(dobjrel);
  var tdval3=document.createTextNode(dobj2);
  var tdval4=document.createTextNode(inpt3);
 
 // tbody.appendChild(tr);
  
  
  
  
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  td4.appendChild(tdval4);
  td5.appendChild(rbtn);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  
  document.getElementById('tbodytbl5').appendChild(tr);

}

if(((dobj1 == "librarian")) && (dobjrel !== "Association") && ((dobj2 == "issue")|| (dobj2 == "return")) ){
  alert(dobjrel +" is not possible between" +dobj1 +"and" +dobj2 );

}


 if(((dobj1 == "issue")|| (dobj1 == "verify")) && (dobjrel == "Include") && ((dobj2 == "verify")|| (dobj2 == "issue")) ){
  var tr = document.createElement('tr');
  tr.setAttribute("id","t5uc3");
  document.getElementById('tbodytbl5').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");
  var tdval1=document.createTextNode(dobj1);
  var tdval2=document.createTextNode(dobjrel);
  var tdval3=document.createTextNode(dobj2);
  var tdval4=document.createTextNode(inpt3);
 // tbody.appendChild(tr);
  
  
  
  
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  td4.appendChild(tdval4);
  td5.appendChild(rbtn);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  document.getElementById('tbodytbl5').appendChild(tr);

}

if(((dobj1 == "issue")|| (dobj1 == "verify")) && (dobjrel !== "Include") && ((dobj2 == "verify") || (dobj2 == "issue")) ){
  alert(dobjrel +" is not possible between two use cases");
}
      
     }
          
      
       
        
     function removerow(btndel) {
      if (typeof(btndel) == "object") {
          $(btndel).closest("tr").remove();
      } else {
          return false;
      }
  }

  function removerowuc(btndel) {
    if (typeof(btndel) == "object") {
        $(btndel).closest("li").remove();
    } else {
        return false;
    }
}







/********************************************************** Function for Table 7*****************************************************************/

var inpt3;
function addbtnt7(){
     inpt3 =document.getElementById("inp3").value;
     alert(inpt3);
     var checkedvaluet7= document.querySelector('input[type=checkbox][name=attricheck]:checked').value;
     alert(checkedvaluet7);
 if((inpt3=="person") && ((checkedvaluet7 == "Name") ||(checkedvaluet7 == "Address")||(checkedvaluet7 == "Height")||(checkedvaluet7 == "Weight"))){
  var tr = document.createElement('tr');
  tr.setAttribute("id","t8class1");
  document.getElementById('tbodytbl8').appendChild(tr);
  var td = document.createElement('td');
  var td2=document.createElement("td");
  var tdval=document.createTextNode(inpt3);
  var tdval2=document.createTextNode(checkedvaluet7);
 // tbody.appendChild(tr);
  
  var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
  
  tr.appendChild(td);
  tr.appendChild(td2);
  td.appendChild(tdval);
  
  td2.appendChild(ult8);
  ult8.appendChild(lit8);
  lit8.appendChild(tdval2);
 
  
  document.getElementById('t8class1').appendChild(tr);

 }
 else if((inpt3=="Employee") && ((checkedvaluet7 == "Name") ||(checkedvaluet7 == "Address"))){
  var tr2 = document.createElement('tr');
  tr2.setAttribute("id","t8class2");
  document.getElementById('tbodytbl8').appendChild(tr);
  var td2 = document.createElement('td');
  var td12=document.createElement("td");
  var tdval2=document.createTextNode(inpt3);
  var tdval12=document.createTextNode(checkedvaluet7);
 // tbody.appendChild(tr);
  
  var ult8=document.createElement("ul");
 var lit8= document.createElement("li");
  
  tr2.appendChild(td2);
  tr2.appendChild(td12);
  td2.appendChild(tdval2);
  
  td12.appendChild(ult8);
  ult8.appendChild(lit8);
  lit8.appendChild(tdval12);
 
  
  document.getElementById('t8class2').appendChild(tr);
 }
 else{

 }


     


     
}






/********************************************************** Function for Top Level Classes*****************************************************************/

function btntlc(){
    document.getElementById("t10class").innerHTML=inpt3;
    document.getElementById("t10obj").innerHTML=inpt1;
}



 /*var tabrowindex=0;
    arr[0] =inpt1;
    adtbl2= document.getElementById('tbl2');
    tabrowindex + 1;
   

   var row = adtbl2.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q <1; ++q) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }*/

// //document.getElementById("tbl2").rows[1].cells[0].innerHTML = inpt1;