function getAllStudent() 
{
fetch('http://localhost:3000/louay')
      .then(response => response.json())
      .then(json => {
        let students=document.getElementById('student');
        json.forEach(s => {
          let studentli=document.createElement('li');
          studentli.innerHTML=s.id;
          students.appendChild(studentli);


        });
   

      });
    };
  