function openpic1() {
    var enlarged1 = document.getElementById('bigpic1');
    var largeImage = document.getElementById('largepic1');
    var smallImage = document.getElementById('smallpic1');

    // source of the enlarged image to the same source as the small image
    largeImage.src = smallImage.src;

    // Display
    enlarged1.style.display = 'block';

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closepic1();
        }
    });
}

function closepic1() {
    var enlarged1 = document.getElementById('bigpic1');
    enlarged1.style.display = 'none';

    document.removeEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closepic1();
        }
    });

}

function openpic2() {
    var enlarged1 = document.getElementById('bigpic2');
    var largeImage = document.getElementById('largepic2');
    var smallImage = document.getElementById('smallpic2');

    // source of the enlarged image to the same source as the small image
    largeImage.src = smallImage.src;

    // Display
    enlarged1.style.display = 'block';

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closepic2();
        }
    });
}

function closepic2() {
    var enlarged1 = document.getElementById('bigpic2');
    enlarged1.style.display = 'none';

    document.removeEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closepic2();
        }
    });
}

function openpic3() {
    var enlarged1 = document.getElementById('bigpic3');
    var largeImage = document.getElementById('largepic3');
    var smallImage = document.getElementById('smallpic3');

    // source of the enlarged image to the same source as the small image
    largeImage.src = smallImage.src;

    // Display
    enlarged1.style.display = 'block';

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closepic3();
        }
    });
}

function closepic3() {
    var enlarged1 = document.getElementById('bigpic3');
    enlarged1.style.display = 'none';

    document.removeEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closepic3();
        }
    });
}

function validateForm() {
    var fName = document.forms["myForm"]["fname"].value;
    var mInitial = document.forms["myForm"]["initial"].value;
    var lName = document.forms["myForm"]["lname"].value;
    var eMail = document.forms["myForm"]["email"].value;

      const checkInDateInput = document.getElementById('checkInDate');
      const checkOutDateInput = document.getElementById('checkOutDate');
      const resultMessage = document.getElementById('result');

      const checkInDate = new Date(checkInDateInput.value);
      const checkOutDate = new Date(checkOutDateInput.value);

    //dito ako nagstop, ilagay kona ang validation sa date dapat

    if (fName == "" || mInitial == "" || lName == "" || eMail == "") {
      alert("All fields are required.");
      if(fName == ""){
        emptyFname();
      }
      else{
        resetFname();
      }
      if (mInitial == ""){
        emptymInitial();
      }
      else{
        resetmInitial();
      }
      if (lName == ""){
        emptylName();
      }
      else{
        resetlName();
      }
      if (eMail == ""){
        emptyeMail();
      }
      else{
        reseteMail();
      }
      return false;
    }

    else if (isNaN(checkInDate) || isNaN(checkOutDate)) {
      alert("Invalid date format.");
      return false;
    } else if (checkInDate > checkOutDate) {
      alert("Check-in date cannot be later than check-out date!");
      return false;
    }

    else{
        alert("Success! Your reservation was made.");
        return true;
    }
  }

  function emptyFname(){
    var empty = document.getElementById('fname');
    empty.classList.add('changed');
  }

  function resetFname(){
    var empty = document.getElementById('fname');
    empty.classList.remove('changed');
  }

  function emptymInitial(){
    var empty = document.getElementById('initial');
    empty.classList.add('changed');
  }

  function resetmInitial(){
    var empty = document.getElementById('initial');
    empty.classList.remove('changed');
  }

  function emptylName(){
    var empty = document.getElementById('lname');
    empty.classList.add('changed');
  }

  function resetlName(){
    var empty = document.getElementById('lname');
    empty.classList.remove('changed');
  }

  function emptyeMail(){
    var empty = document.getElementById('email');
    empty.classList.add('changed');
  }

  function reseteMail(){
    var empty = document.getElementById('email');
    empty.classList.remove('changed');
  }

  function resetAll(){
    var empty = document.getElementById('fname');
    empty.classList.remove('changed');
    var empty2 = document.getElementById('initial');
    empty2.classList.remove('changed');
    var empty3 = document.getElementById('lname');
    empty3.classList.remove('changed');
    var empty4 = document.getElementById('email');
    empty4.classList.remove('changed');
    
  }

  /* login */

  function validateForm2() {
    var uName = document.forms["myForm2"]["uname"].value;
    var pWord = document.forms["myForm2"]["pword"].value;
    if (uName == "" || pWord == "") {
      alert("All fields are required.");
      if(uName == ""){
        emptyuName();
      }
      else{
        resetuName();
      }
      if (pWord == ""){
        emptypWord();
      }
      else{
        resetpWord();
      }
      return false;
    }

    else if(uName == "admin" && pWord == "admin"){
      alert("Success! Welcome, admin.");
      window.open("admin.html");
      return true;
  }
  
  else if(uName == "student1" && pWord == "1234"){
    alert("Success!");
    window.open("student.html");
    return true;
}

  else{
    alert("Invalid username/password.");
    return false;
  }
  }

  function emptyuName(){
    var empty = document.getElementById('uname');
    empty.classList.add('changed');
  }

  function resetuName(){
    var empty = document.getElementById('uname');
    empty.classList.remove('changed');
  }

  function emptypWord(){
    var empty = document.getElementById('pword');
    empty.classList.add('changed');
  }

  function resetpWord(){
    var empty = document.getElementById('pword');
    empty.classList.remove('changed');
  }

  function resetAll2(){
    var empty = document.getElementById('uname');
    empty.classList.remove('changed');
    var empty2 = document.getElementById('pword');
    empty2.classList.remove('changed');
    
  }

  
  

  
  