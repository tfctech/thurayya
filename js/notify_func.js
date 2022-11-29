 $(function() {
     setTimeout(function() {
         $.notify({
             // options
             icon: '',
             title: "<a href=\"#\"><h4>FAIR USAGE DISCLAIMER</h4>",
             message: "<figure><img src=\"assets/images/others/fairusage.png\"></figure><p>Kindly read the Fair Usage Disclaimer before using the website.</a> "
         }, {
             // settings
             icon_type: 'image',
             type: 'info',
             delay: 1000,
             timer: 3000,
             z_index: 9999,
             showProgressbar: false,
             placement: {
                 from: "bottom",
                 align: "right"
             },
             animate: {
                 enter: 'animated bounceInUp',
                 exit: 'animated bounceOutDown'
             },
         });
     }, 5000); // change the start delay
 });