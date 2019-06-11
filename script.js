var starClicked = false


  $("#first").hover(function() {
    $(this).toggleClass("hover")
  })

  $("#first").click(function() {
    $(this).toggleClass("click")
    
  })

  $("#second").hover(function() {
    $("#first").toggleClass("hover")
    $(this).toggleClass("hover")
  })

  $("#second").click(function() {
    $("#first").toggleClass("click")
    $(this).toggleClass("click")
    
  })

  $("#third").hover(function() {
    $("#first").toggleClass("hover")
    $("#second").toggleClass("hover")
    $(this).toggleClass("hover")
  })

  $("#third").click(function() {
    $("#first").toggleClass("click")
    $("#second").toggleClass("click")
    $(this).toggleClass("click")
    
  })

  $("#fourth").hover(function() {
    $("#first").toggleClass("hover")
    $("#second").toggleClass("hover")
    $("#third").toggleClass("hover")
    $(this).toggleClass("hover")
  })

  $("#fourth").click(function() {
    $("#first").toggleClass("click")
    $("#second").toggleClass("click")
    $("#third").toggleClass("click")
    $(this).toggleClass("click")
    
  })

  $("#fifth").hover(function() {
    $("#first").toggleClass("hover")
    $("#second").toggleClass("hover")
    $("#third").toggleClass("hover")
    $("#fourth").toggleClass("hover")
    $(this).toggleClass("hover")
  })

  $("#fifth").click(function() {
    $("#first").toggleClass("click")
    $("#second").toggleClass("click")
    $("#third").toggleClass("click")
    $("#fourth").toggleClass("click")
    $(this).toggleClass("click")
  })