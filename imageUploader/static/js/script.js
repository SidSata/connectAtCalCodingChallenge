$(document).ready(function() {
    /* BEGIN TASK 1 */

    /* HINT 1:
        Look into event listeners: https://api.jquery.com/category/events/
    /*
    /* Example of a hover listener: */
    // $("#submission").hover(function() {
    //     alert("Form submission button clicked");
    // });

    /* HINT 2:
        After you've created an event listener, how do you make a call to your 
        API endpoint /submit_image with the image data w/o refreshing the page?

        Look into AJAX calls in jQuery: https://api.jquery.com/jquery.ajax/
    /* 
    /* Example of an AJAX request */
    // .post('/submit_image', {
    //     text: "hello world"
    //   }, function(data) {
    //     console.log("Just made a POST Request :)");
    //     call_a_function(current_text);
    //     return false;
    //   }, 'json');
    window.addEventListener('load', function() {
        document.querySelector('input[type="file"]').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img = document.querySelector('img');
                img.onload = () => {
                    URL.revokeObjectURL(img.src);  // no longer needed, free memory
                }
      
                img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            }
        });
      });
    /* END TASK 1 */
    const uploadBtn = document.getElementById("image-file");
    uploadBtn.addEventListener("click", function(){

        
    })
})