//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const posts = [

  Obj = {
    text : "Another Test" ,
    post : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Aliquam etiam erat velit scelerisque in dictum non consectetur. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Tincidunt vitae semper quis lectus nulla at. Ultrices dui sapien eget mi proin sed libero enim sed. Risus sed vulputate odio ut. Neque sodales ut etiam sit. Arcu non sodales neque sodales ut etiam sit amet nisl. Ornare suspendisse sed nisi lacus sed. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Enim tortor at auctor urna. A diam maecenas sed enim."
  }

];

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){



  res.render("home",{ homeContent : homeStartingContent , postsContent : posts});

})

app.get("/about",function(req,res){

  res.render("about",{ homeContent : aboutContent});

})

app.get("/contact",function(req,res){

  res.render("contact",{ homeContent : contactContent});
  
})

app.get("/compose",function(req,res){

  res.render("compose");
  
})

app.post("/compose",function(req,res){
  let postObj = {
    text : req.body.textinput ,
    post : req.body.postinput
  }
  posts.push(postObj);


  res.redirect("/");

})

app.get("/posts/:value",function(req,res){


  let value = _.lowerCase(req.params.value );

  
  
  posts.forEach(function(element){


    let elementText = _.lowerCase(element.text);
  
    if(elementText===value){
      res.render("post",{textValue : element.text , postValue : element.post });
    }
    else{
      console.log("dont match")
    }
  });
  

  
}) ;












app.listen(3000, function() {
  console.log("Server started on port 3000");
});


