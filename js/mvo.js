var modal = {
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
      count: 0,
      url: 'images/cat3.jpg',
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


var octopus = {
  getNames: function(){
    return modal.cats;
  },
  getUrl: function(num){
      var foo = $.grep(modal.cats, function(e){ return e.url});
      return foo[num-1].url;
  },
  getScore: function(num){
      var foo = $.grep(modal.cats, function(e){ return e.url});
      foo[num-1].count++
      var score =foo[num-1].count;
      console.log(score);
      return score;
  },
  init: function(){
    view.buttonRender();
  }
}
var id;

var view = {
  buttonRender: function(){
    var catList = $("#list");
    var cat= octopus.getNames();
      for (var i=0;i<cat.length;i++){
            var catname=cat[i].name;
            var num1 = i+1
            var catt ='<button id="cat'+num1+'" class="btn" type="button">'+catname+'<br>';
              $("#list").append(catt);
      }
      view.catRender();
  },
catRender: function(){
    $(".btn").click(function(){
      var id=$(this).attr('id');
      $("#picture").remove();
      var num=id.slice(-1);
      var url = octopus.getUrl(num);
      $("#cat-image").append('<img id="picture" class="image" src="'+url+'" alt="cats">');

      $("#picture").click(function(){
        var score =octopus.getScore(num);
        //var score= score +1;
        $("#score").text(score);
        console.log(score);
      });
  });
}
}
octopus.init();
