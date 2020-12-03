  // ✏️ EXERCISE 1
  // Call the function 'changeColor1' to change the first example's background color
  function changeColor1() {
      $('.exercise1').css('background', 'red');
  }

  changeColor1();
  // ✏️ EXERCISE 2
  // Assign the value of 'orange' to the variable color
  let color = "orange";

  function changeColor2() {
      $('.exercise2').css('background', color);
  }
  changeColor2();

  // 🚦❓ 4 divs just turned orange. Why? Tell a volunteer!


  // ✏️ EXERCISE 3
  // Reassign the value of the color variable to 'yellow'
  function changeColor3() {
      color = "yellow";
      $('.exercise3').css('background', color);
  }
  changeColor3();

  // 🚦❓ Why is example 3 yellow now, but not 2, 4, or 5? Tell a volunteer!


  // ✏️ EXERCISE 4
  // Update changeColor4 to take a parameter named 'color'
  // Update the call to changeColor4 to pass the color 'green'
  function changeColor4(color) {
      $('.exercise4').css('background', color);
  }
  changeColor4("green");

  // 🚦❓ Why is example 4 green now, but not 2, 3, or 5? Tell a volunteer!


  // ✏️ EXERCISE 5
  // Update changeColor5 to call the function 'getColor' and assign it 
  //  to a local variable named 'color'.
  function getColor() {
      return 'blue';
  }

  function changeColor5() {
      color = getColor();
      $('.exercise5').css('background', color);
  }
  changeColor5();

  // ✏️ EXERCISE 6
  // The background should toggle between black and white 
  //   when the toggle button is clicked. 
  // It's not working with a local scope variable
  // How can you make the toggle work by moving 1 line?
  let bgColor = 'white';

  $('.toggle').click(function() {
      if (bgColor === 'white') {
          bgColor = 'black';
      } else {
          bgColor = 'white';
      }
      $('body').css('background', bgColor);
  });