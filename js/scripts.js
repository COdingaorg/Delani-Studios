//business Logic
var designProcess = 'Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.';
var development = 'All engineers are fluent in the latest enterprise, mobile and web development technologies.They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.';
var prodMngmt = 'Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.';
//user Inteface Logic
$(document).ready(function(){
  $('#design').click(function(){
    $('#design').hide();
    $('#designBtn').prepend('<p id="designStatement">'+designProcess+'</p>');
    $('#designStatement').click(function(){
      $('#designStatement').hide()
      $('#design').show();
      $('#design').child().last().remove();
    })
  })
})