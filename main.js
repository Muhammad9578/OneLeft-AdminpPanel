var config = {
  apiKey: "AIzaSyCWy46lmX4-m6YI1m8Ry677B9LQatSjPdU",
    authDomain: "quiz-app-e97ec.firebaseapp.com",
    projectId: "quiz-app-e97ec",
    storageBucket: "quiz-app-e97ec.appspot.com",
    messagingSenderId: "760585922400",
    databaseURL:"https://oneleft-d2482-default-rtdb.firebaseio.com/",
    appId: "1:760585922400:web:ca1d57cde66064ff132005",
    measurementId: "G-JJZ3M0QN72" 
};


firebase.initializeApp(config);
var db = firebase.database();

var new_html = '';
var new_other = '';

function addcate(){

  $category_n = document.getElementById('categoryname').value;
  $pushkey = document.getElementById('pushi').value;
 
 if ($pushkey !=null && $pushkey !="" && $category_n!="") {
  document.getElementById('msgcategory').innerHTML = "*";
  document.getElementsByClassName('btn-info').disabled=true;

  var ref = firebase.database().ref("/Categories");

  var chk = firebase.database().ref('Categories/').push({category_name:$category_n});
  // var chk = ref.push({category_name:$category_n});
  if (chk) {
    document.getElementById('categoryname').value="";
    document.getElementsByClassName('btn-info').disabled=true;
    $('#msgmain').html("Category Added Successfully");
    document.getElementById('categoryname').value="";
    setTimeout(function(){
      document.getElementById('msgmain').innerHTML = "";
    },2000);
  }

 }else{
  document.getElementById('msgcategory').innerHTML = "Please Enter Category Name!";
  document.getElementsByClassName('btn-info').disabled=false;
 }
  
}

// editCate
function editcate(){

  $category_n = document.getElementById('categoryname').value;
  $category_n_old = document.getElementById('categorynameold').value;
  $pkey = document.getElementById('editval').value;
 
 if ($pkey !=null && $pkey !=0 && $pkey !="" && $category_n!="") {
  document.getElementById('msgcategory').innerHTML = "*";
  document.getElementsByClassName('btn-warning').disabled=true;

  var chk = firebase.database().ref('Categories/'+$pkey).update({category_name:$category_n});
  // var chk = ref.push({category_name:$category_n});
  if (chk) {
    document.getElementsByClassName('btn-warning').disabled=true;
    $('#msgmain').html("<span class='alert alert-success'>Category has been Updated Successfully...</span>");
    document.getElementById('categoryname').value="";
    setTimeout(function(){

      var displayList = db.ref('/Mcqs/'+$category_n_old);

      var indexes = 0;
      var Obj_list = [];
      var Obj_list_index = [];
      displayList.on('child_added', (data) => {
        // console.log(data.val());
        Obj_list.push(data.val());
        Obj_list_index.push(data.key);
      });

      setTimeout(function(){

        for (var i = 0; i <Obj_list_index.length; i++) {
          var chk = firebase.database().ref("Mcqs/"+$category_n+"/"+Obj_list_index[i]).set(Obj_list[i]);
        }
        firebase.database().ref('Mcqs/'+$category_n_old).remove();
      },1000);
      $('#msgmain').html("");
      setTimeout(function(){
        location.reload();
      },1300);
    },1100);
  }

 }else{
  document.getElementById('msgcategory').innerHTML = "<span class='alert alert-danger'>Please Enter Category Name!</span>";
  document.getElementsByClassName('btn-warning').disabled=false;
 }
  
}
// editCate

// delcate
function deletecate(keys){

  $pkey = keys.id;
  $fkey = keys.value;
 
 if ($pkey !=null && $pkey !=0 && $pkey !="") {

var r = confirm("All the Records in MCQS of this Category will be deleted! \n Are you sure to Delete Category ?");
if (r == true) {

  var chk = firebase.database().ref('Categories/'+$pkey).remove();
  // var chk = ref.push({category_name:$category_n});
  if (chk) {
    firebase.database().ref('Mcqs/'+$fkey).remove();
    document.getElementsByClassName('btn-warning').disabled=true;
    $('#msgmaindel').html("<span class='alert alert-success'>Category has been Deleted Successfully...</span>");
    setTimeout(function(){
      location.reload();
    },2000);
  }else{
    $('#msgmaindel').html("<span class='alert alert-success'>Sorry! category could not be deleted! at this moment</span>");
  }
} else {
  txt = "Cancel!";
}
 }else{
  document.getElementById('msgmain').innerHTML = "<span class='alert alert-danger'>Sorry! Category could not be deleted! at this moment try again</span>";
 }
}
// delcate

// function deletem(key,val){

//   $pkey = key;
//   $fkey = val;
 
//  if ($pkey !=null && $pkey !=0 && $pkey !="" && $fkey!="") {
     
//     var chk = firebase.database().ref('Mcqs/'+$fkey+'/'+$pkey).remove();
//     if(chk){
//         return true;
//     }else{
//         return false;
//     }
//  }else{
//   return false;
//  }
// }

// delMcq
function deletemcq(keys){

  $pkey = keys.id;
 
 if ($pkey !=null && $pkey !=0 && $pkey !="" && keys.value!="" && keys.value!=0) {

var r = confirm("Are you sure to Delete MCQ ?");
if (r == true) {

  var chk = firebase.database().ref('Mcqs/'+keys.value+'/'+$pkey).remove();
  // var chk = ref.push({category_name:$category_n});
  if (chk) {
    document.getElementsByClassName('btn-warning').disabled=true;
    $('#msgmain').html("<span class='alert alert-success'>MCQ has been Deleted Successfully...</span>");
    setTimeout(function(){
      location.reload();
    },2000);
  }
} else {
  txt = "Cancel!";
}
 }else{
  document.getElementById('msgmain').innerHTML = "<span class='alert alert-danger'>Sorry! MCQ could not be deleted! at this moment try again</span>";
 }
}
// delMcq

function addmcq(){
  var ch1,ch2,ch3,ch4,ch5,ch6,ch7,ch8,status = false;
  $categoryop = document.getElementById('categoryop').value;
  $categoryText = $('#categoryop');
  $question = document.getElementById('question').value;
  $correctans = document.getElementById('correctans').value;
  $ans1 = document.getElementById('ans1').value;
  $ans2 = document.getElementById('ans2').value;
  $ans3 = document.getElementById('ans3').value;
  $ans4 = document.getElementById('ans4').value;

  if ($categoryop!="" && $categoryop!=null) {
    ch1 = true;
    $("#msgcategory").html("*");
  }else{
    ch1 = false;
    $("#msgcategory").html("Please Select Category!");
  }
  if ($question!="" && $question!=null) {
    ch2 = true;
    $("#msgquestion").html("*");
  }else{
    ch2 = false;
    $("#msgquestion").html("Please Enter Question!");
  }
  if ($correctans!="" && $correctans!=null) {
    ch3 = true;
    $("#msgcorrectans").html("*");
  }else{
    ch3 = false;
    $("#msgcorrectans").html("Please Select Correct Answer!");
  }
  if ($ans1!="" && $ans1!=null) {
    ch4 = true;
    $("#msgans1").html("*");
  }else{
    ch4 = false;
    $("#msgans1").html("Enter Option 1 / Answer!");
  }
  if ($ans2!="" && $ans2!=null) {
    ch5 = true;
    $("#msgans2").html("*");
  }else{
    ch5 = false;
    $("#msgans2").html("Enter Option 2 / Answer!");
  }
  if ($ans3!="" && $ans3!=null) {
    ch6 = true;
    $("#msgans3").html("*");
  }else{
    ch6 = false;
    $("#msgans3").html("Enter Option 3 / Answer!");
  }
  if ($ans4!="" && $ans4!=null) {
    ch7 = true;
    $("#msgans4").html("*");
  }else{
    ch7 = false;
    $("#msgans4").html("Enter Option 4 / Answer!");
  }

  if (ch1==true && ch2==true && ch3==true && ch4==true && ch5==true && ch6==true && ch7==true) {
    status = true;
  }else{status = false;}
  

  $pushkey = $categoryop;
  var textCont = $("#categoryop option:selected" ).text();
  
 if (status==true) {
  document.getElementById('msgcategory').innerHTML = "*";
  document.getElementsByClassName('btn-primary').disabled=true;

  var chk = firebase.database().ref("Mcqs/"+textCont+"/").push(
    {question:''+$question+'',
      correct_answer:''+$correctans+'',
      option1:''+$ans1+'',
      option2:''+$ans2+'',
      option3:''+$ans3+'',
      option4:''+$ans4+'',
      category_id:''+$categoryop+''
    });
  if (chk) {
    document.getElementsByClassName('btn-primary').disabled=true;
    $('#msgmain').html("MCQ has been Added Successfully");
    document.getElementById('categoryop').value="";
    setTimeout(function(){
      location.reload();
    },2000);
  }

 }else{
//   document.getElementById('msgcategory').innerHTML = "Please Enter Category Name!";
  document.getElementsByClassName('btn-primary').disabled=false;
 }
  
}

// editMcq
function editupdatemcq(){
  var ch1,ch2,ch3,ch4,ch5,ch6,ch7,ch8,status = false;
  $categoryop = document.getElementById('categoryop').value;
  $categoryText = $('#categoryop');

  $first  = $("#updpk").val();
  $second = $("#updfk").val();

  $question = document.getElementById('question').value;
  $correctans = document.getElementById('correctans').value;
  $ans1 = document.getElementById('ans1').value;
  $ans2 = document.getElementById('ans2').value;
  $ans3 = document.getElementById('ans3').value;
  $ans4 = document.getElementById('ans4').value;

  if ($categoryop!="" && $categoryop!=null) {
    ch1 = true;
    $("#msgcategory").html("*");
  }else{
    ch1 = false;
    $("#msgcategory").html("Please Select Category!");
  }
  if ($question!="" && $question!=null) {
    ch2 = true;
    $("#msgquestion").html("*");
  }else{
    ch2 = false;
    $("#msgquestion").html("Please Enter Question!");
  }
  if ($correctans!="" && $correctans!=null) {
    ch3 = true;
    $("#msgcorrectans").html("*");
  }else{
    ch3 = false;
    $("#msgcorrectans").html("Please Select Correct Answer!");
  }
  if ($ans1!="" && $ans1!=null) {
    ch4 = true;
    $("#msgans1").html("*");
  }else{
    ch4 = false;
    $("#msgans1").html("Enter Option 1 / Answer!");
  }
  if ($ans2!="" && $ans2!=null) {
    ch5 = true;
    $("#msgans2").html("*");
  }else{
    ch5 = false;
    $("#msgans2").html("Enter Option 2 / Answer!");
  }
  if ($ans3!="" && $ans3!=null) {
    ch6 = true;
    $("#msgans3").html("*");
  }else{
    ch6 = false;
    $("#msgans3").html("Enter Option 3 / Answer!");
  }
  if ($ans4!="" && $ans4!=null) {
    ch7 = true;
    $("#msgans4").html("*");
  }else{
    ch7 = false;
    $("#msgans4").html("Enter Option 4 / Answer!");
  }
  
  if (ch1==true && ch2==true && ch3==true && ch4==true && ch5==true && ch6==true && ch7==true) {
    status = true;
  }else{status = false;}
  

  $pushkey = $categoryop;
  var textCont = $("#categoryop option:selected" ).text();
  var textupdPK = $("#updpk").val();


 if (status==true && textupdPK!="" && textupdPK!=0) {
  document.getElementById('msgcategory').innerHTML = "*";
  document.getElementsByClassName('btn-secondary').disabled=true;
    
    var chk1 = firebase.database().ref('Mcqs/'+$first+'/'+''+$second+'').remove();

    if(chk1){
     var chk = firebase.database().ref("Mcqs/"+textCont+"/"+$second).update({question:''+$question+'',
      correct_answer:''+$correctans+'',
      option1:''+$ans1+'',
      option2:''+$ans2+'',
      option3:''+$ans3+'',
      option4:''+$ans4+'',
      category_id:''+$categoryop+''
    });
    
  if (chk) {
    document.getElementsByClassName('btn-secondary').disabled=true;
    $('#msgmain').html("MCQ has been Updated Successfully");
    document.getElementById('categoryop').value="";
    setTimeout(function(){
      location.href="mcqslist.php";
    },2000);
  }   
    }    
    
 }else{
  // document.getElementById('msgcategory').innerHTML = "Please Enter Category Name!";
  document.getElementsByClassName('btn-secondary').disabled=false;
 }
  
}
// editMcq
function getRecord(key){
  if (key.id!="" && key.id!=null && key.value!="" && key.value!=null) {
    $("#editval").val(key.id);
    $("#categoryname").val(key.value);
    $("#categorynameold").val(key.value);
    $("#listtab").css("display","none");
    $("#edittab").css("display","block");
  }else{
    alert('In-correct record!');
  }
}

function getRecordmcq(key){
  
  var HtmlmcqUpdateText = "";
  if (key.id!="" && key.id!=null && key.value!="" && key.value!=null) {
    var displayList = db.ref('/Mcqs/'+key.value+'/'+key.id);

    var indexes = 0;
    var jsarr = [];
    displayList.on('child_added', (data) => {
      indexes++;
      jsarr.push(data.val());
      
    });

    if (jsarr!="" && jsarr.length>=1) {
      HtmlmcqUpdateText = '<table class="table table-borderless">'+
                        '<tr>'+
                            '<th>'+
                                '<div class="form-group">'+
                                    '<label>Choose Category <span style="color:red;" id="msgcategory">*</span></label>'+
                                    '<select class="form-control" id="categoryop">'+
                                    '</select>'+
                                '</div>'+
                            '</th>'+
                            '<th>'+
                                '<div class="form-group">'+
                                    '<label>Question <span style="color:red;" id="msgquestion">*</span></label>'+
                                    '<input type="text" placeholder="Enter Question" value="'+jsarr[6]+'" class="form-control" id="question">'+
                                '</div>'+
                            '</th>'+
                            '<th>'+
                                '<div class="form-group">'+
                                    '<label>Correct Option / Answer <span style="color:red;" id="msgcorrectans">*</span></label>'+
                                    '<select class="form-control" id="correctans">'+
                                    '<option value="">--SELECT OPTION--</option>'+
                                    '<option value="option1">Option 1</option>'+
                                    '<option value="option2">Option 2</option>'+
                                    '<option value="option3">Option 3</option>'+
                                    '<option value="option4">Option 4</option>'+
                                    '</select>'+
                                '</div>'+
                                '<input type="hidden" id="updcategory_id" value="'+jsarr[0]+'">'+
                                '<input type="hidden" id="updcorrect_answer" value="'+jsarr[1]+'">'+
                                '<input type="hidden" id="updpk" value="'+key.value+'">'+
                                '<input type="hidden" id="updfk" value="'+key.id+'">'+
                            '</th>'+
                        '</tr>'+
                          '<tr>'+
                              '<th width="50%">'+
                                 '<div class="form-group">'+
                                      '<label>Option 1 <span style="color:red;" id="msgans1">*</span></label>'+
                                      '<input type="text" placeholder="Option 1 / Answer" value="'+jsarr[2]+'" class="form-control" id="ans1">'+
                                  '</div>'+
                              '</th>'+
                              '<th colspan="2" width="50%">'+
                                  '<div class="form-group">'+
                                      '<label>Option 2 <span style="color:red;" id="msgans2">*</span></label>'+
                                      '<input type="text" placeholder="Option 2 / Answer" value="'+jsarr[3]+'" class="form-control" id="ans2">'+
                                  '</div>'+
                              '</th>'+
                          '</tr>'+
                         '<tr>'+
                              '<th width="50%">'+
                                  '<div class="form-group">'+
                                      '<label>Option 3 <span style="color:red;" id="msgans3">*</span></label>'+
                                      '<input type="text" placeholder="Option 3 / Answer" value="'+jsarr[4]+'" class="form-control" id="ans3">'+
                                  '</div>'+
                              '</th>'+
                              '<th colspan="2" width="50%">'+
                                  '<div class="form-group">'+
                                      '<label>Option 4 <span style="color:red;" id="msgans4">*</span></label>'+
                                      '<input type="text" placeholder="Option 4 / Answer" value="'+jsarr[5]+'" class="form-control" id="ans4">'+
                                  '</div>'+
                              '</th>'+
                          '</tr>'+
                          '<tr>'+
                              '<th colspan="3">'+
                                  '<div class="form-group">'+
                                      '<center><button onclick="editupdatemcq()" style="width: 80%;" class="btn btn-secondary">Update MCQ</button> <button class="btn btn-danger" onclick="closetabs()">Cancel</button> </center>'+
                                  '</div>'+
                              '</th>'+
                          '</tr>'+
                       '</table>';
      
    }else{
      HtmlmcqUpdateText = "<h4 align='center' class='text-info' style='margin-top:20px;'>Sorry Record not found!</h4> <br/> <center><button class='btn btn-warning' onclick='closetabs()'>Cancel</button></center>";
    }
      $('#mcqedittab').html(HtmlmcqUpdateText);
      $("#mcqlisttab").css("display","none");
      $("#mcqedittabmain").css("display","block");

      setTimeout(function(){
        loadCategory();
      },1000);
      setTimeout(function(){
        loadCategory2();
      },1500);

  }else{
    alert('In-correct record!');
  }
}


function closetabs(){
  $('#mcqedittab').html("");
  $("#mcqlisttab").css("display","block");
  $("#mcqedittabmain").css("display","none");
}

// window.onload=loadList;

function loadList() {
  var reviews = document.getElementById('reviews');
var displayList = db.ref('/Categories');


var indexes = 0;
displayList.on('child_added', (data) => {
  indexes++;

  
  if (data.key!="" && data.val().category_name!="") {
    new_html +='<tr style="font-size: 15px;text-align: center;">';

  new_html +='<td>'+indexes+'</td>';
  new_html +='<td>'+data.val().category_name+'</td>';

  new_html +='<td>'+
        '<button  class="btn btn-rounded" style="margin-left:2px;margin-right:2px;margin-top:2px;" id="'+data.key+'" value="'+data.val().category_name+'" onclick="getRecord(this)"> <i class="fa fa-edit text-info fa-lg"></i> </button>'+
        '<button  class="btn btn-rounded" style="margin-left:2px;margin-right:2px;margin-top:2px;" id="'+data.key+'" value="'+data.val().category_name+'" onclick="deletecate(this)"> <i class="fa fa-trash text-danger fa-lg"></i> </button>'+
         
      '</td>';

      new_html +='</tr>';
  $('#reviews').html(new_html);

  }else{
    new_html ='<tr style="font-size: 15px;text-align: center;"><td colspan="3"><div class="alert alert-info">Empty Category List!</div></td></tr>';
    $('#reviews').html(new_html);
  }
});
}

// DashboardLoad
function loadDashboard() {
  $tCates = 0;
  $tMcqs = 0;

var displayList = db.ref('/Mcqs');

displayList.on('child_added', (data2) => {

  if (data2.key) {
    $tCates++;
  }

  var displayList2 = db.ref('/Mcqs/'+data2.key);

  displayList2.on('child_added', (data) => {

  if (data.key!="" && data.val().category_id!="") {
    $tMcqs++;
  }

  });

  $("#tcatediv").html($tCates);
  $("#tmcqsdiv").html($tMcqs);

});

}
// DashboardLoad

// McqsList
function mcqsList() {
  var new_html = "";
  var reviews = document.getElementById('reviews');
var displayList = db.ref('/Mcqs');

var indexes = 0;
displayList.on('child_added', (data2) => {

  var displayList2 = db.ref('/Mcqs/'+data2.key);

  displayList2.on('child_added', (data) => {
      indexes++;
  
  if (data.key!="" && data.val().category_id!="") {
    new_html +='<tr style="font-size: 15px;text-align: center;">';

  new_html +='<td>'+indexes+'</td>';
  // new_html +='<td>'+data.val().category_id+'</td>';
  new_html +='<td>'+data2.key+'</td>';
  new_html +='<td><textarea disabled class="form-control">'+data.val().question+'</textarea></td>';
  new_html +='<td>'+data.val().option1+'</td>';
  new_html +='<td>'+data.val().option2+'</td>';
  new_html +='<td>'+data.val().option3+'</td>';
  new_html +='<td>'+data.val().option4+'</td>';
  new_html +='<td><span class="text-success">'+data.val().correct_answer+'</span></td>';

  new_html +='<td>'+
        '<button  class="btn btn-rounded" style="margin-left:2px;margin-right:2px;margin-top:2px;" id="'+data.key+'" value="'+data2.key+'" onclick="getRecordmcq(this)"> <i class="fa fa-edit text-info fa-lg"></i> </button>'+
        '<button  class="btn btn-rounded" style="margin-left:2px;margin-right:2px;margin-top:2px;" id="'+data.key+'" value="'+data2.key+'" onclick="deletemcq(this)"> <i class="fa fa-trash text-danger fa-lg"></i> </button>'+
         
      '</td>';

      new_html +='</tr>';

  }else{
    new_html ='<tr style="font-size: 15px;text-align: center;"><td colspan="3"><div class="alert alert-info">Empty Category List!</div></td></tr>';
  }
  $('#reviews').html(new_html);

  });

});
}
// McqsList


function loadCategory() {
  $categoryHtml = "";

var displayList = db.ref('/Categories');

var indexes = 0;
displayList.on('child_added', (data) => {
  indexes++;
  
  if (data.key!="" && data.val().category_name!="") {
    $categoryHtml +='<option value="'+data.key+'">'+data.val().category_name+'</option>';
  }else{
    $categoryHtml ='<option value="">Empty Category List!</option>';
  }
  $('#categoryop').html("<option value=''>--SELECT CATEGORY--</option>"+$categoryHtml);
  // console.log()
});
}  


function loadCategory2() {
  $('#categoryop').val($("#updcategory_id").val());
  $("#correctans").val($("#updcorrect_answer").val());
}  
// window.onload = loadCategory;
//setInterval(function(){ new_html=''; loadList(); }, 5000);
   