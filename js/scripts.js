//business Logic
var designProcess = 'Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.';
var development = 'All engineers are fluent in the latest enterprise, mobile and web development technologies.They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.';
var prodMngmt = 'Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.';
//user Inteface Logic
$(document).ready(function(){
  //for further development, using for each function to loop through statement and process
  // var clkicons = ['design', 'development', 'management']
  //   clkicons.forEach(function(clkicon){
  //     $('#'+clkicon).click(function(){
  //       $('#'+clkicon).hide();

  //       $('#'+clkicon+'Btn').append('<p id=statement>'+designProcess+'</p>')
  //       $('#statement').click(function(){
  //         $('#'+clkicon).show();
  //         $('#statement').hide();
  //         $('#statement').remove();
  //       })
  //     })
  //   })
  $('#design').click(function(){
    $('#design').hide();
    $('#designBtn').append('<p id="designStatement">'+designProcess+'</p>');
    $('#designStatement').click(function(){
      $('#designStatement').hide()
      $('#design').show();
      $('#designStatement').remove();
    })
  })
  $('#development').click(function(){
    $('#development').hide();
    $('#developmentBtn').append('<p id="developStatement">'+development+'</p>');
    $('#developStatement').click(function(){
      $('#developStatement').hide()
      $('#development').show();
      $('#developStatement').remove();
    })
  })
  $('#management').click(function(){
    $('#management').hide();
    $('#managementBtn').append('<p id="manageStatement">'+prodMngmt+'</p>');
    $('#manageStatement').click(function(){
      $('#manageStatement').hide()
      $('#management').show();
      $('#manageStatement').remove();
    })
  })
//Hover on prtfolio images
  var projHovers = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6', 'project7', 'project8']
      projHovers.forEach(function(projHover){
        $('#'+projHover).hover(
          function(){$('#'+projHover+' p').fadeIn()},
          function(){$('#'+projHover+' p').fadeOut()})
      })
  $('#submitbtn').click(//gathering input from communication form
    function(){
      var userName = $('#userName').val();
      var userEmail = $('#userEmail').val();
      var userMessage = $('#message').val();

      $('#popuserName ').prepend(userName);
      $('#popuserEmail').prepend(userEmail);
      $('#Popup').show()})//showing pop up
  $('#cancel').click(//cancel button, closes pop up and erases contact form
    function(){
      $('#Popup').hide();
      $('form')[0].reset()})
})