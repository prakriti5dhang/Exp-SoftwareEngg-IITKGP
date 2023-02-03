/*Redeveloped
Lab: Software Engineering
Exp:Identifying Domain Classes from the Problem Statements
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result").style.display="block";
        document.getElementById("dispviewbtn").disabled=false;
        document.getElementById("viewsol").disabled=true;
       
    }
    
    if(ex.options[ex.selectedIndex].value==0){
        document.getElementById("exercise1").style.display="none";
        document.getElementById("ex1").style.display="none";
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
 
/********************************************* Table 1 ****************************************/
let newCheckBoxID, inpt1, newLi, newdiv;
/*let newCheckLabel = document.createElement('LABEL');
newCheckLabel.setAttribute('for', newCheckBoxID);
let labelTextNode = document.createTextNode(inpt1);
newCheckLabel.appendChild(labelTextNode);
newLi.appendChild(newCheckLabel);*/

function addbtnt1(){
inpt1=document.getElementById("inp1").value;

newLi = document.createElement("li");
newdiv = document.createElement("div");
newdiv.setAttribute("class", "form-check");
newCheckBoxID = 'checkbox_' + inpt1;
newLi.appendChild(newdiv);

let newCheckBox = document.createElement("INPUT");
  newCheckBox.setAttribute("type", "checkbox");
  newCheckBox.setAttribute("id", newCheckBoxID);
  newCheckBox.setAttribute("class", "form-check-input");
  newCheckBox.setAttribute("name", "categoryselect");
  newCheckBox.setAttribute("value", inpt1);
  newdiv.appendChild(newCheckBox);
  
  let newCheckLabel = document.createElement('LABEL');
  newCheckLabel.setAttribute('for', newCheckBoxID);
  newCheckLabel.setAttribute("class", "form-check-label");
  let labelTextNode = document.createTextNode(inpt1);
  newCheckLabel.appendChild(labelTextNode);
  newdiv.appendChild(newCheckLabel);

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowobj(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  newdiv.appendChild(newIconbtn);
  if (inpt1 == "") {
    alert("Please Enter Noun/Noun Phrase Before Click Add Button");
  } else {

  document.getElementById('potobjlist').appendChild(newLi);
  document.getElementById("inp1").value="";


let newOptionID;
newOptionID = 'newOption_' + inpt1;
  
let newOption = document.createElement('option');
let optionText = document.createTextNode(inpt1);
// set option text
newOption.appendChild(optionText);
// and option value

newOption.setAttribute("id", newOptionID);
newOption.setAttribute('value',inpt1);
let select = document.getElementById('selectobj'); 
select.appendChild(newOption);


}

}

  /* Function for Table 2 */
 function addbtnt2() {
    
    var category= document.getElementById("selectcat");
   var checkedvalue= document.querySelector('input[type=checkbox][name=categoryselect]:checked').value
    alert(checkedvalue);

    /*********************************************** Category-People*************************************************/ 
    if(((checkedvalue=="Mr Roy") || (checkedvalue=="boss")|| (checkedvalue=="son") || (checkedvalue=="Mr Bose") || (checkedvalue=="drives") || (checkedvalue=="passenger") || (checkedvalue=="persons") || (checkedvalue=="neighbour"))&& (category.options[category.selectedIndex].value==3) ){
        let pnewLi = document.createElement("li");
        let liTextNodep = document.createTextNode(checkedvalue);
        pnewLi.appendChild(liTextNodep);
        // this just makes sure a user cant enter in a blank value
        var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        pnewLi.appendChild(newIconbtn);
          document.getElementById('peoplet3').appendChild(pnewLi);
          
      
        
        
    }

   

    /*********************************************** Category-Place*************************************************/ 

else if(((checkedvalue=="Kolkata") || (checkedvalue=="home")|| (checkedvalue=="office") || (checkedvalue=="place") || (checkedvalue=="landmark") || (checkedvalue=="branch")|| (checkedvalue=="locality") )&& (category.options[category.selectedIndex].value==4) ){
        let plnewLi = document.createElement("li");
        let plliTextNode = document.createTextNode(checkedvalue);
        plnewLi.appendChild(plliTextNode);
        // this just makes sure a user cant enter in a blank value
        var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        plnewLi.appendChild(newIconbtn);
          document.getElementById('placet3').appendChild(plnewLi);
          
      
      
        
    }
    
/*********************************************** Category-Things*************************************************/ 
else if(((checkedvalue=="Cabs") || (checkedvalue=="AC")|| (checkedvalue=="booking receipt") || (checkedvalue=="cheque")  )&& (category.options[category.selectedIndex].value==6) ){
        let tnewLi = document.createElement("li");
        let tliTextNode = document.createTextNode(checkedvalue);
        tnewLi.appendChild(tliTextNode);
        // this just makes sure a user cant enter in a blank value
        var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        tnewLi.appendChild(newIconbtn);
          document.getElementById('thingst3').appendChild(tnewLi);
          
      
       
        
    }
   
/*********************************************** Category-Organization*************************************************/ 
else if(((checkedvalue=="agency") || (checkedvalue=="At your risk bank ")|| (checkedvalue=="bank") || (checkedvalue=="school")  )&& (category.options[category.selectedIndex].value==2) ){
    let onewLi = document.createElement("li");
    let oliTextNode = document.createTextNode(checkedvalue);
    onewLi.appendChild(oliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        onewLi.appendChild(newIconbtn);
      document.getElementById('orgt3').appendChild(onewLi);
      
  
    
    
}


/*********************************************** Category-Concept*************************************************/ 
else if(((checkedvalue=="service") || (checkedvalue=="payments")|| (checkedvalue=="finances") || (checkedvalue=="business") || (checkedvalue=="plan")  )&& (category.options[category.selectedIndex].value==0) ){
    let cnewLi = document.createElement("li");
    let cliTextNode = document.createTextNode(checkedvalue);
    cnewLi.appendChild(cliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        cnewLi.appendChild(newIconbtn);
      document.getElementById('conceptt3').appendChild(cnewLi);
      
  
    
    
}


/*********************************************** Category-Event*************************************************/ 
else if(((checkedvalue=="morning") || (checkedvalue=="everyday")|| (checkedvalue=="drop to school")  )&& (category.options[category.selectedIndex].value==1) ){
    let enewLi = document.createElement("li");
    let eliTextNode = document.createTextNode(checkedvalue);
    enewLi.appendChild(eliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        enewLi.appendChild(newIconbtn);
      document.getElementById('eventt3').appendChild(enewLi);
      
  
    
}
else{
    alert("Wrong Category! Please select correct category for " +checkedvalue);
}

/*********************************************** Category-Redundant*************************************************/ 


}



/********************************************************** Function for Table 4 *****************************************************************/

function addbtnt4(){
    var objsel= document.getElementById("selectobj");
    var dobj =objsel.options[objsel.selectedIndex].value;
    var checkedvaluet4= document.querySelector('input[type=checkbox][name=attriselect]:checked').value
     alert(checkedvaluet4);
     alert(dobj);


}




/********************************************************** Function for Table 5 *****************************************************************/




function addbtnt5(){
    let t4newCheckBoxID, inpt2, t4newLi, t4newdiv;
    let t7newCheckBoxID,  t7newLi, t7newdiv;
    /*let attrinewCheckLabel = document.createElement('LABEL');
    attrinewCheckLabel.setAttribute('for', newCheckBoxID);
    let attrilabelTextNode = document.createTextNode(inpt2);
    attrinewCheckLabel.appendChild(attrilabelTextNode);*/
   // newLi.appendChild(attrinewCheckLabel);

inpt2=document.getElementById("inp2").value;

t4newLi = document.createElement("li");
t4newdiv = document.createElement("div");
t4newdiv.setAttribute("class", "form-check");
t4newCheckBoxID = 'checkbox_' + inpt2;
t4newLi.appendChild(t4newdiv);
let t4newCheckBox = document.createElement("INPUT");
  t4newCheckBox.setAttribute("type", "checkbox");
  t4newCheckBox.setAttribute("id", t4newCheckBoxID);
  t4newCheckBox.setAttribute("class", "form-check-input");
  t4newCheckBox.setAttribute("name", "attriselect");
  t4newCheckBox.setAttribute("value", inpt2);
  t4newdiv.appendChild(t4newCheckBox);

       
  
  let t4newCheckLabel = document.createElement('LABEL');
  t4newCheckLabel.setAttribute('for', t4newCheckBoxID);
  t4newCheckLabel.setAttribute("class", "form-check-label");
  let t4labelTextNode = document.createTextNode(inpt2);
  t4newCheckLabel.appendChild(t4labelTextNode);
  t4newdiv.appendChild(t4newCheckLabel);

  var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        t4newdiv.appendChild(newIconbtn);

/**** Print  attributes in table 7*****/

  t7newLi = document.createElement("li");
t7newdiv = document.createElement("div");
t7newdiv.setAttribute("class", "form-check");
t7newCheckBoxID = 'checkbox_' + inpt2;
t7newLi.appendChild(t7newdiv);
let t7newCheckBox = document.createElement("INPUT");
  t7newCheckBox.setAttribute("type", "checkbox");
  t7newCheckBox.setAttribute("id", t7newCheckBoxID);
  t7newCheckBox.setAttribute("class", "form-check-input");
  t7newCheckBox.setAttribute("name", "attriselect");
  t7newCheckBox.setAttribute("value", inpt2);
  t7newdiv.appendChild(t7newCheckBox);
  
  let t7newCheckLabel = document.createElement('LABEL');
  t7newCheckLabel.setAttribute('for', t7newCheckBoxID);
  t7newCheckLabel.setAttribute("class", "form-check-label");
  let t7labelTextNode = document.createTextNode(inpt2);
  t7newCheckLabel.appendChild(t7labelTextNode);
  t7newdiv.appendChild(t7newCheckLabel);

  var newIconbtn = document.createElement("img");
        newIconbtn.setAttribute("src","./images/remove.png");
        newIconbtn.setAttribute("onclick", "removerowobj(this)");
        newIconbtn.setAttribute("style","cursor:pointer;");
        t7newdiv.appendChild(newIconbtn);

  if (inpt2 == "") {
    alert("Please Enter Noun/Noun Phrase Before Click Add Button");
  } else {

    document.getElementById('addattrit4').appendChild(t4newLi);
    document.getElementById('t7attri').appendChild(t7newLi);
    
    document.getElementById("inp2").value="";
  }
}

/********************************************************** Function for Table 7*****************************************************************/

var inpt3;
function addbtnt7(){
     inpt3 =document.getElementById("inp3").value;
     alert(inpt3);
     var checkedvaluet7= document.querySelectorAll('input[type=checkbox][name=attricheck]:checked').value;
     alert(checkedvaluet7);
 if((inpt3=="person") && ((checkedvaluet7 == "Name") &&(checkedvaluet7 == "Address")&&(checkedvaluet7 == "Height")&&(checkedvaluet7 == "Weight"))){
  var tr = document.createElement('tr');
  tr.setAttribute("id","t8classatt");
  document.getElementById('tbodytbl8').appendChild(tr);
  var td = document.createElement('td');
  td.setAttribute("id","t8class");
  var td2=document.createElement("td");
  td2.setAttribute("id","t8att");
  td2.setAttribute("rowspan","4");
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

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowobj(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  lit8.appendChild(newIconbtn);
  document.getElementById('t8classatt').appendChild(tr);
  

 }
 else if((inpt3=="Employee") && ((checkedvaluet7 == "Name") &&(checkedvaluet7 == "Address"))){
  var tr2 = document.createElement('tr');
  tr2.setAttribute("id","t8class2");
  document.getElementById('tbodytbl8').appendChild(tr2);
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
 
  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowobj(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  lit8.appendChild(newIconbtn);
  document.getElementById('t8class2').appendChild(tr2);
 }
 else{

 }


     


     
}



function removerowobj(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("li").remove();
  } else {
      return false;
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