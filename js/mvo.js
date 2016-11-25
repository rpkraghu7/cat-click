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
    return modal.cats[num-1].url;
  },
  getScore: function(num){
      modal.cats[num-1].count++
      var score =modal.cats[num-1].count;
      console.log(score);
      return score;
  },
  getCurrentScore: function(num){
    return modal.cats[num-1].count;
  },
  setCatName: function(cat,num){
      modal.cats[num-1].name=cat
      //var catname= modal.cats[num-1].name;
      console.log(modal.cats[num-1].name)
      $("#list").remove();
      $("#cat-list").append( '<ul id="list"></ul>');
      view.buttonRender();
    return modal.cats[num-1].name;

  },
  init: function(){
    console.log('view');
    view.buttonRender();
    view.catRender();
    view.admin();
  }
}


var view = {
   catid: null,
  buttonRender: function(){
    var catList = $("#list");
    var cat= octopus.getNames();
      for (var i=0;i<cat.length;i++){
            var catname=cat[i].name;
            var num1 = i+1
            var catt ='<button id="cat'+num1+'" class="btn" type="button">'+catname+'<br>';
              catList.append(catt);
      }

  },
catRender: function(){
    $(".btn").click(function(){
      var id=$(this).attr('id');
      $("#picture").remove();
      var num=id.slice(-1);
      var url = octopus.getUrl(num);
      $("#cat-image").append('<img id="picture" class="image" src="'+url+'" alt="cats">');
      score=octopus.getCurrentScore(num);
      $("#score").text(score);
      var name = octopus.getNames();
      console.log(name[num-1].name);
      var catName = name[num-1].name;
     $("#name").html('<p>"'+catName+'"</p>');

      $("#picture").click(function(){
        var score =octopus.getScore(num);
        $("#score").text(score);
        //console.log(score);
      });
      view.catid= num;
    });
},
admin: function(){
  var adminpanel = $(".admin-panel");
  var admin =$("#admin");
  var num=view.catid;
  adminpanel.hide();
  admin.click(function(){
    adminpanel.show();
  });
  $("#cancel").click(function(){
    adminpanel.hide();
  });
  $("#save").click(function(){
    var catName=$("#cat").val();
    console.log(view.catid);
    var cat=octopus.setCatName(catName,view.catid);
  //   var btnid = "cat"+view.catid;
  //   console.log(btnid);
  //  $('#btnid').replaceWith('<button id="cat'+num+'" class="btn1" type="button">'+cat+'<br>');
    });
}
}
octopus.init();
