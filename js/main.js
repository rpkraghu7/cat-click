
var elem1 = $("#image1");
var elem2 = $("#image2");
var score = $("#score");
var score2 = $("#score2");
var catName = ['kitty1','kitty2'];

var cat = {
  cats:[
    {
      name: 'molly',
      id: 'cat1',
      url: 'images/cat1.jpg',
      count: 0
    },
    {
      name: 'rolly',
      id: 'cat2',
      url: 'images/cat2.jpg',
      count: 0
    },
    {
      name: 'tolly',
      id: 'cat3',
      url: 'images/cat3.jpg',
      count: 0
    },
    {
      name: 'dolly',
      id: 'cat4',
      url: 'images/cat4.jpg',
      count: 0
    },
    {
      name: 'bolly',
      id: 'cat5',
      url: 'images/cat5.jpg',
      count: 0
    }]
  };




  var buttons = function(){
    for (var i=0;i<cat.cats.length;i++)
    {
      var catname = cat.cats[i].name;
      var catt ='<button id="'+cat.cats[i].id+'" class="btn" type="button">'+catname+'<br>';
      $("#list").append(catt);

    }
  };

  buttons();
  var picture = $("#picture");


  $(".btn").click(function(){
    var id =$(this).attr('id');
    $()
    console.log(id);
    $("#picture").remove();
    switch (id) {
      case cat.cats[0].id:
      $("#cat-image").append('<img id="picture" class="image" src="'+cat.cats[0].url+'" alt="cats">');
      console.log(cat.cats[0].count);
      cat.cats[0].count++;
      break;
      case cat.cats[1].id:
      $("#cat-image").append('<img id="picture" src="'+cat.cats[1].url+'" alt="cats">');
      break;
      case cat.cats[2].id:
      $("#cat-image").append('<img id="picture" src="'+cat.cats[2].url+'" alt="cats">');
      break;
      case cat.cats[3].id:
      $("#cat-image").append('<img id="picture" src="'+cat.cats[3].url+'" alt="cats">');
      break;
      case cat.cats[4].id:
      $("#cat-image").append('<img id="picture" src="'+cat.cats[4].url+'" alt="cats">');
      break;
      default:
      console.log('fail');
      break;
    }
  });

//console.log(cat.cats[1].id);

 // $(".btn").click(function(){
 //   var id =$(this).attr('id');
 //   //$("#cat-image").append();
 // });

//var count=0;

  $(".image").click(function(){
  var count= cat.cats[0].count++;
     score.text(count);
  });
  // elem2.click(function(){
  //   count2++;
  //   score2.text(count2);
  // });
