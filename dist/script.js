document.addEventListener('DOMContentLoaded', function () {
    // Ensure jQuery is loaded
    if (typeof jQuery == 'undefined') {
        document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"><\/script>');
    }

    //JS For Gif card
    let noButtonClickCount = 0; // Counter for the "No" button
    let noButtonState = 0; // Current state of the "No" button

    // Display the initial gif
    document.getElementById('gifContainer').style.display = 'block';

    document.getElementById('siBtn').addEventListener('click', function() {
        // Hide the sad gif and display the happy gif
        document.getElementById('sadGifContainer').style.display = 'none';
        document.getElementById('sadGifContainer1').style.display = 'none';
        document.getElementById('sadGifContainer2').style.display = 'none';
        document.getElementById('sadGifContainer3').style.display = 'none';
        document.getElementById('gifContainer').style.display = 'none';
        document.getElementById('happyGifContainer').style.display = 'block';
   

        // Hide the "Yes" and "No" buttons
        document.getElementById('question').style.display = 'none';
        document.getElementById('siBtn').style.display = 'none';
        document.body.classList.add('bg-green');
        document.getElementById('noBtn').style.display = 'none';

        // Display the specific message
        document.getElementById('messageContainer').style.display = 'block';
        document.getElementById('messageContainer').innerHTML = 'Oh YEAHHH! hahaha';

        // Show another gif after 3 seconds
        setTimeout(function() {
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('happyGifContainer2').style.display = 'block';
        }, 1000);

        setTimeout(function() {
            document.getElementById('happyGifContainer2').style.display = 'none';
            document.getElementById('happyGifContainer3').style.display = 'block';
        }, 2000);
        setTimeout(function() {
            document.getElementById('happyGifContainer3').style.display = 'none';
            document.getElementById('happyGifContainer4').style.display = 'block';
        }, 3000);
  
    });

    document.getElementById('noBtn').addEventListener('click', function() {
        switch (noButtonState) {
            case 0:
                // First time clicking "No"
                document.getElementById('happyGifContainer').style.display = 'none';
                document.getElementById('gifContainer').style.display = 'none';
                document.getElementById('sadGifContainer').style.display = 'block';

                // Modify the "No" button
                document.getElementById('noBtn').innerHTML = 'Wait really?';
                document.getElementById('noBtn').style.backgroundColor = '#F1330A';

                document.getElementById('siBtn').style.fontSize = '40px';
                document.getElementById('siBtn').style.padding = '20px 40px';
                noButtonClickCount++;
                noButtonState++;
                break;

            case 1:
                // Second time clicking "No"
                document.getElementById('noBtn').innerHTML = 'Really really sure?!';
                document.getElementById('noBtn').style.backgroundColor = '#F1330A';
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'block';
                document.getElementById('sadGifContainer3').style.display='block'
     document.getElementById('sadGifContainer2').style.display = 'none';
                // Make the "Yes" button grow
                document.getElementById('siBtn').style.fontSize = '50px';
                document.getElementById('siBtn').style.padding = '30px 50px';
                noButtonState++;
                break;

            case 2:
                document.getElementById('noBtn').innerHTML = 'Now for real, really?';
                document.getElementById('noBtn').style.backgroundColor = '#F1330A';
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('sadGifContainer3').style.display='block'
                document.getElementById('sadGifContainer1').style.display = 'block';

                // Make the "Yes" button grow
                document.getElementById('siBtn').style.fontSize = '60px';
                document.getElementById('siBtn').style.padding = '40px 60px';
                noButtonState++;
                break;
            
            // Add more cases for additional button clicks if needed

            case 16:
                document.getElementById('noBtn').innerHTML = 'Pleaseeeeee!!!';
                document.getElementById('noBtn').style.backgroundColor = '#F1330A';
              
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('gifContainer').style.display = 'block';
                document.getElementById('happyGifContainer').style.display = 'none';
                // Back to state 0
                noButtonState = 0;
                break;
        
            default:
                // Handle any other case here if needed
                break;
        }
    });

    $('#siBtn').on('click', function () {
        // Wait for 5 seconds before executing the transition
        setTimeout(function() {
            // Transition to the Valentine's Card
            $('#valentinesDayCard').fadeIn();
            $('.container').hide();
        }, 5000); // 5000 milliseconds = 5 seconds
    });

    // Initialize the Valentine's Card interactions
    initValentinesCard();

    // Initialize the Flowers and Hearts interactions
    initFlowersHearts();

    //Valentines Card
    function initValentinesCard() {
        // When the page loads, hide the curtains
        $('.left-curtain').css('width', '0%');
        $('.right-curtain').css('width', '0%');
      
        $('.valentines-day').click(function(){
          // Fade out the elements inside the envelope
          $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
          $('.envelope').fadeOut(800, function() {
            // Hide elements inside .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
            
            // Make the card visible with a wavy animation
            $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
            $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
              var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculate scale based on sine function
              $(this).css('transform', 'scale(' + scale + ')');
              // After a delay, show the button to proceed to the Flowers and Hearts
            setTimeout(function () {
                $('#proceedToFlowers').fadeIn(); // Make sure this button is part of your Valentine's Card HTML
            }, 5000); // Adjust time as needed
            }}); // Wavy animation
          });
        });

        // When the button to proceed to Flowers and Hearts is clicked
        $('#proceedToFlowers').on('click', function () {
            $('#flowersHearts').fadeIn();
            $('#valentinesDayCard').hide();
        });
    }

    // Placeholder function for initializing the Flowers and Hearts interactions
    function initFlowersHearts() {
        // Any specific logic to initialize the Flowers and Hearts can go here
        // For example, binding events or starting animations
        // Note: This function is just a placeholder to demonstrate where to initialize the third project

        //   JS for Flowers
        onload = () => {
            document.body.classList.remove("container");
        };
    }
});
