$(document).ready( ()=>{

    $('#contact').submit(e=>{
        e.preventDefault();
       let name = $('#name').val(); 
    //Sending
    let data = $(this).serialize();
    let url  = $(this).attr('action');
    $('#contact').trigger('reset');

    $.ajax({
      url: url,
      data: data,
      type: 'POST',
      success: (callback_data=>{
        if(!callback_data.error){
          $('.alert').fadeIn('slower');
          $('.alert').html(`${name}, your message has been sent. I appreciate your effort (ツ)`);
        

          setTimeout( ()=>{
             $('.alert').fadeOut('slower');
             $('#contact').trigger('reset');
          },5000); 
  
        }
      })
    })




    })
})