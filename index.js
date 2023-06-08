
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var form = event.target;
    var formData = new FormData(form);
    var formObject = {};
    
    for (var pair of formData.entries()) {
      formObject[pair[0]] = pair[1];
    }
    
    console.log(formObject); 
  });


