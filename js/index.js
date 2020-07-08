$(document).ready(function () {


    //all the code goes here
    //animating developer text
    var count = 0;

    //calling the function to perform animation on developer text
    developer_animation();

    //defining the function
    function developer_animation() {

        //this is the code for animation
        setTimeout(function () {

            //during the first run count == 10 and title == "Developer"
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Dev";
            } else if (count == 4) {
                title = "Deve";
            } else if (count == 5) {
                title = "Devel";
            } else if (count == 6) {
                title = "Develo";
            } else if (count == 7) {
                title = "Develop";
            } else if (count == 8) {
                title = "Develope";
            } else if (count == 9) {
                title = "Developer";
            }

            //one last time when count == 9
            if (count != 10) {
                // it helps you put a text on an html element
                $('.title').text(`I'm a ${title}`);

                developer_animation();
            } else if (count == 10) {


                count = 0;
                setTimeout(function () {

                    //this will be performed after 1 sec
                    designer_animation();


                }, 1000);
            }

        }, 100);
    }
 //animating desinger text
 function designer_animation() {
    setTimeout(function () {
      count++;
      if (count == 1) {
        title = "D";
      } else if (count == 2) {
        title = "De";
      } else if (count == 3) {
        title = "Des";
      } else if (count == 4) {
        title = "Desi";
      } else if (count == 5) {
        title = "Desig";
      } else if (count == 6) {
        title = "Design";
      } else if (count == 7) {
        title = "Designe";
      } else if (count == 8) {
        title = "Designer";
      }

      if (count != 10) {
        $('.title').text(`I'm a ${title}`);
        designer_animation();
      } else if (count == 10) {
        count = 0;
        setTimeout(function () {
          developer_animation();
        }, 1000);
      }

    }, 100);
  }

})