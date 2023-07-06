function getAllStudent() 
{
fetch('https://apiii-mynp.onrender.com/louay')
      .then(response => response.json())
      .then(json => {
        let students=document.getElementById('student');
        json.forEach(s => {
          let studentli=document.createElement('li');
          studentli.innerHTML=s.Name;
          students.appendChild(studentli);


        });
   

      });
    };
  