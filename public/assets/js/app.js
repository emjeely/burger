$(function(){
  $("#submitbt").on("click",function(){
      event.preventDefault();
      var newBurger={
          burger:$("#textBox").val().trim()
      };
      $.ajax("/api/burger",{
          type:"POST",
          data:newBurger
      }).then(function(){
          console.log("burger added");
          location.reload();
      });
  });


  $(".devour-form").on("submit",function(){
      event.preventDefault();
      var id=$(this).children(".burger_id").val();
      console.log(id);
      $.ajax("/api/burger/"+id,{
          type:"PUT",
      }).then(function(){
          console.log(" BURGER DEVOURED")
          location.reload();
      });
  });

  $(".devoured").on("submit",function(){
   event.preventDefault();
   var id=$(this).children(".burger_id").val();
   console.log(id);
   $.ajax("/api/burger/"+id,{
       type:"DELETE",
   }).then(function(){
   
       console.log(" BURGER DELETED")
       location.reload();
   });


});

});