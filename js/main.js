
var elem1 = $("#image1");
var elem2 = $("#image2");
var score1 = $("#score1");
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



  console.log(cat.cats.length);
  var buttons = function(){
    for (var i=0;i<cat.cats.length;i++)
    {
      var catname = cat.cats[i].name;
      console.log(catname);
      var catt ='<button id="'+cat.cats[i].id+'" class="btn" type="button">'+catname+'<br>';
      $("#list").append(catt);

    }
  };

  buttons();

$(".btn").click(function(){
  var id =$(this).attr('id');
  $("#cat-image").append();
});








  // elem1.click(function(){
  //   count1++;
  //   score1.text(count1);
  // });
  // elem2.click(function(){
  //   count2++;
  //   score2.text(count2);
  // });
