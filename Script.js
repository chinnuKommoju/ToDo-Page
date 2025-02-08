ip=document.getElementById('task');
s=document.getElementById('type');
task_professional=document.getElementById('professional-tasks'); //ul id
task_personal=document.getElementById('personal-tasks');
task_emergency=document.getElementById('emergency-tasks');
ul=document.querySelector('.display');
btn=document.getElementById('add');
btn.addEventListener('click',()=>{
  data=ip.value.trim();
     if(data===''){
      alert("Please Enter Task");
     }
     else{
      li=document.createElement('li');
      delbtn=document.createElement('button');
      delbtn.classList.add('delete');
      delbtn.innerText='delete';
      editbtn=document.createElement('button');
      editbtn.classList.add('edit');
      editbtn.innerText='edit';
      li.innerHTML=`<span>${data}</span>`;
      li.appendChild(editbtn);
      li.appendChild(delbtn);
      if(s.value.trim()=='professional'){
        task_professional.appendChild(li);
      }
      else if(s.value.trim()=='personal'){
        task_personal.appendChild(li);
      }
      else{
        task_emergency.appendChild(li);
      }
     }
     ip.value='';
})
ul.addEventListener('click',(event)=>{
  if(event.target.classList.contains('delete')){
    item=event.target.parentElement;
    item.remove( );
  }
  if(event.target.classList.contains('edit')){
    li=event.target.parentElement;
    newText=li.querySelector('span');
    newData=prompt("Enter New Task");
    if(newData.trim()!=='' && newData.trim()!==' '){
        newText.innerText=newData.trim()
    }
    else{
      alert("Task not updated due to invalid input");
    }
  }

});

