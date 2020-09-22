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


//-------------------------------  INTERVALS
        setInterval( ()=>{
            $('.alerto').fadeIn('slower');
            $('.alerto').html(`${name}, your message has been sent. I appreciate your effort (ツ)`);
        },5000);   
         
          setInterval( ()=>{
             $('#form-div').fadeOut('slower');
          },15000); 

          setInterval( ()=>{
            $('.sent').fadeIn('slower');
          },20000)
//-----------------------------------------
  
        }
      })
    })




    })
})