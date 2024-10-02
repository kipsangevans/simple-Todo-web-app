


document.addEventListener('DOMContentLoaded', () => {

   
  
    const inputField = document.querySelector('#inputField');
    const addButton = document.querySelector('button');
    const taskList = document.querySelector('#taskList');

   
    
    addButton.addEventListener('click', () => {
   
      
        const inputValue = inputField.value.trim();

        
        if (inputValue === '') {
            alert('Please enter a task.');
        } else {
            console.log('Task:', inputValue); 
            const taskText = inputField.value.trim();
            const li = document.createElement('li');
  
          
            const span = document.createElement('span');
            span.textContent = taskText;
            li.appendChild(span);
          
      
            const completeBtn = document.createElement('button');
            completeBtn.id = 'btn';
            completeBtn.innerHTML ='<i class="fa-solid fa-check fa-2xlg fa-border"></i>' ;
            completeBtn.onclick = () => {
              span.classList.toggle('done');
            
              if(completeBtn.innerHTML == '<i class="fa-solid fa-check fa-2xlg fa-border"></i>' ){
                 completeBtn.innerHTML = 'Done';
              }else{
                completeBtn.innerHTML ='<i class="fa-solid fa-check fa-2xlg fa-border"></i>' 
              }
              
            };
            li.appendChild(completeBtn);
          
     
            const deleteBtn = document.createElement('button');
            deleteBtn.id = 'btn';
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash fa-2xlg fa-border"  ></i>';
            deleteBtn.onclick = () => {
              taskList.removeChild(li);
            };
            li.appendChild(deleteBtn);
          
       
            taskList.appendChild(li);
 
            inputField.value = '';
        }
    });

    // const audio = document.getElementById('audio');
    // const playStopBtn = document.getElementById('playStopBtn');
    
    
    // playStopBtn.onclick = () => {
    //     if (audio.paused) {
    //         audio.play(); 
    //         playStopBtn.textContent = 'playMusic'; 
    //     } else {
    //         audio.pause(); 
    //         playStopBtn.textContent = 'pauseMusic'; 
            
    //     }
    // };
    


});






