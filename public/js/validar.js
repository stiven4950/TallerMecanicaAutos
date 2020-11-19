$(document).ready(function() 
      {
        $('#pswd2').keyup(function() 
        {   
              var contrasena       = $("#pswd1").val();
              var confirContrasena = $("#pswd2").val();

              //console.log(contrasena+"   "+confirContrasena);
              if (contrasena !='' && confirContrasena != '')
              {

                  if (contrasena === confirContrasena)
                  {
                      $('#enviar').attr("disabled", false);
                      $('#pswd2').css("border", "3px solid green");
                  }
                  else
                  {
                      $('#enviar').attr("disabled", true);
                      $('#pswd2').css("border", "3px solid red");
                  }
              }
              else
              {
                $('#enviar').attr("disabled", true);
                $('#pswd2').css("border", "3px solid orange");
              }
        });
});