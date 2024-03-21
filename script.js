  //VARIABLE IN JAVA SCRIPT
  //Variables allow one to to store and manipulate data

  /* There are 3 ways of declaring variables in java script and they include:
    1. Using keyword let
    2. using keyword Var
    3. Using keyword const
    */

    let age = 18;// this line declare variable named age and also reassigns it a value using  the equal sign   operator
        age = 25;// Variables declared  using keyword let can be reassigned new values within the program
        console.log("Juma is :"  + age);// The console.log method is used to output the variable stored

    const pi =3.14234;
          pi=3.1456;/* This one will store and error beacuse once a vaariable is itialialized using const keyword
                       it cannot be reassigned a new value */

    var MyVar = "Juma"

    /* let is used to declare a blocked scope variable. This  means that a variable can  only
    be accessed within the block in which it is declared */
       //BLOCKED SCOPE
       function example(){
        if (age>=18){
          console.log("Allowed to vote on National election");
        }
        else{
          console.log("Not old enough to vote on the national election")
        }
       }
       example();
       console.log("Not a registered voter"); // this line will through and error because this method is out this the function scope

        //FUNCTION SCOPE
        function example(){
          var fs = "simon juma";
          console.loog("simon juma");
        }
        example();
        console.log("simon juma"); // this method will through and error because this method is out of function  reach


        //GLOBAL SCOPE
        var x = "Hello Juma";
         
        function example(){
          console.log("Hello Juma");
        }
        example(); // this is called the function call
        // Trying to acces global variable using  the console.log method
        console.log("Hello Juma"); // hello juma will be outputed because we are trying to access the global variable (x)
