$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var taskName = $('#taskName').val();
      $('#taskList').append('<li>' + taskName + '</li>');
      $('#taskName').val('');
    });
    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  