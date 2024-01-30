function showStudentsCorrectly(){
    const students = document.getElementsByClassName('student');
  
    if(students.length>0){
        for(let i=0; i< students.length; i++){
            if( i % 2 != 0){
                students[i].classList.add('reverse')
            }
        }
    }
  }
  showStudentsCorrectly();