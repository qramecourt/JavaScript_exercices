fetch("https://pachyderme.net/students.json")
    .then(response => response.json())
    .then(function(myJson){
        console.log(myJson);
        myJson.students.forEach(function (student, index)
        {
            document.getElementById('students').innerHTML += 
            `<div class="container">
                <div class="studentCard">
                    <div id="name-${index}>${student.lastname}</div><!--c'est comme ceci qu'on appelle une Array stocké en local-->
                    <div id="firstname-${index}>${student.firstname}</div>
                    <div id=lastname-${index}>${student.lastname}</div>
                    <div id="sex-${index}">${student.sex}</div>
                    <div id="githubId-${index}">${student.githubid}</div>
                </div>
                
            </div>
            `
            console.log(student)

        });
    })

