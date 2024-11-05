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

var DataArr = [];

function loadListCall(){
  document.getElementById('search').value = "";
  loadList();
}
function loadListCallReward(){
  document.getElementById('search2').value = "";
  loadListReward();
}

function loadList() {

  DataArr = [];
  
  var new_html = '';
  var new_other = '';

  var reviews = document.getElementById('reviews');
var displayList = db.ref('/History');
var displayList2 = "";


var indexes = 0;
displayList.on('child_added', (data) => {
  displayList2 = db.ref('/History/'+data.key);
  displayList2.on('child_added', (data2) => {

    // 
    indexes++;

    if (data2.key!="" && data2.val().id!="") {

      if (data2.val().name && data2.val().name!="") {
        $name_f = data2.val().name;
      }else{
        $name_f = "-----";
      }

      DataArr.push(data2.val());
      
      var d = new Date(data2.val().dateTime);
        date = [
          d.getFullYear(),
          ('0' + (d.getMonth() + 1)).slice(-2),
          ('0' + d.getDate()).slice(-2)
        ].join('-');

      new_html +='<tr style="font-size: 15px;text-align: center;">';

      new_html +='<td>'+indexes+'</td>';
      new_html +='<td>'+$name_f+'</td>';
      new_html +='<td>'+data2.val().rewardEarned+'</td>';
      new_html +='<td>'+data2.val().game+'</td>';
      new_html +='<td>'+date+'</td>';

      new_html +='</tr>';
    
    $('#reviews').html(new_html);

    }else{
      new_html ='<tr style="font-size: 15px;text-align: center;"><td colspan="3"><div class="alert alert-info">Empty Category List!</div></td></tr>';
      $('#reviews').html(new_html);
    }
    // 

  });

});
} 

function loadListReward() {
  var new_html = '';
var new_other = '';
  DataArr = [];
  var reviews = document.getElementById('reviews');
var displayList = db.ref('/History');
var displayList2 = "";


var indexes = 0;
displayList.on('child_added', (data) => {
  displayList2 = db.ref('/History/'+data.key);
  displayList2.on('child_added', (data2) => {


    if (data2.key!="" && data2.val().id!="") {

      if (data2.val().rewardEarned && data2.val().rewardEarned!="" && data2.val().rewardEarned>0) {

        indexes++;

        if (data2.val().name && data2.val().name!="") {
          $name_f = data2.val().name;
        }else{
          $name_f = "-----";
        }

        DataArr.push(data2.val());

        var d = new Date(data2.val().dateTime);
          date = [
            d.getFullYear(),
            ('0' + (d.getMonth() + 1)).slice(-2),
            ('0' + d.getDate()).slice(-2)
          ].join('-');

        new_html +='<tr style="font-size: 15px;text-align: center;">';

        new_html +='<td>'+indexes+'</td>';
        new_html +='<td>'+$name_f+'</td>';
        new_html +='<td>'+data2.val().rewardEarned+'</td>';
        new_html +='<td>'+data2.val().game+'</td>';
        new_html +='<td>'+date+'</td>';

        new_html +='</tr>';
      }
    
    $('#reviews').html(new_html);

    }else{
      new_html ='<tr style="font-size: 15px;text-align: center;"><td colspan="5"><div class="alert alert-info">Empty List Reward!</div></td></tr>';
      $('#reviews').html(new_html);
    }
    // 

  });

});
}  

function searchingF(){
  var search_text = "";
  var search_text_abc = "";
  var new_html = '';
  var new_other = '';

  if (document.getElementById('search').value && document.getElementById('search').value!="") {
    $("#msgtext").html('');
    var search_text_abc = document.getElementById('search').value;
    search_text = search_text_abc.toLowerCase();

    var inD = 0;

    if (DataArr.length>=1) {
        for (var i = 0; i <DataArr.length; i++) {

          if (DataArr[i].name && DataArr[i].name!="") {
            var name_f_abc = DataArr[i].name;
            $name_f = name_f_abc.toLowerCase();
            $name_f2 = DataArr[i].name;
          }else{
            var name_f_abc = '-----';
            $name_f = name_f_abc.toLowerCase();

            $name_f2 = "-----";
          }
          
          var d = new Date(DataArr[i].dateTime);
            date = [
              d.getFullYear(),
              ('0' + (d.getMonth() + 1)).slice(-2),
              ('0' + d.getDate()).slice(-2)
            ].join('-');

            let text = $name_f;
            let position = text.search(search_text);

            if (position>=0) {
              inD++;
              new_html +='<tr style="font-size: 15px;text-align: center;">';
              new_html +='<td>'+inD+'</td>';
              new_html +='<td>'+$name_f2+'</td>';
              new_html +='<td>'+DataArr[i].rewardEarned+'</td>';
              new_html +='<td>'+DataArr[i].game+'</td>';
              new_html +='<td>'+date+'</td>';
              new_html +='</tr>';
            }
      }
    }else{
      new_html ='<tr style="font-size: 15px;text-align: center;">';
      new_html +='<td colspan="5">Empty!</td>';
      new_html +='</tr>';
    }

    $('#reviews').html(new_html);

  }else{
    $("#msgtext").html('Please write something then hit Search Button!');
  }
} 

function searchingReward(){
  var search_text = "";
  var search_text_abc = "";
  var new_html = '';
  var new_other = '';

  if (document.getElementById('search2').value && document.getElementById('search2').value!="") {
    $("#msgtext2").html('');
    var search_text_abc = document.getElementById('search2').value;
    search_text = search_text_abc.toLowerCase();

    var inD = 0;
    
    if (DataArr.length>=1) {
        for (var i = 0; i <DataArr.length; i++) {

          if (DataArr[i].name && DataArr[i].name!="") {
            var name_f_abc = DataArr[i].name;
            $name_f = name_f_abc.toLowerCase();
            $name_f2 = DataArr[i].name;
          }else{
            
            var name_f_abc = '-----';
            $name_f = name_f_abc.toLowerCase();

            $name_f2 = "-----";
          }
          
          var d = new Date(DataArr[i].dateTime);
            date = [
              d.getFullYear(),
              ('0' + (d.getMonth() + 1)).slice(-2),
              ('0' + d.getDate()).slice(-2)
            ].join('-');

            let text = $name_f;
            let position = text.search(search_text);

            if (position>=0) {
              if (DataArr[i].rewardEarned!="" && DataArr[i].rewardEarned>0) {
                inD++;

                new_html +='<tr style="font-size: 15px;text-align: center;">';
                new_html +='<td>'+inD+'</td>';
                new_html +='<td>'+$name_f2+'</td>';
                new_html +='<td>'+DataArr[i].rewardEarned+'</td>';
                new_html +='<td>'+DataArr[i].game+'</td>';
                new_html +='<td>'+date+'</td>';
                new_html +='</tr>';
              }
            }
      }
    }else{
      new_html ='<tr style="font-size: 15px;text-align: center;">';
      new_html +='<td colspan="5">Empty!</td>';
      new_html +='</tr>';
    }

    $('#reviews').html(new_html);

  }else{
    $("#msgtext2").html('Please write something then hit Search Button!');
  }
} 
