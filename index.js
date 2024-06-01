document.addEventListener('DOMContentLoaded' ,  ()=>{
 fetch('data.json')
   .then(response=>{
    if (!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json()
   })
   .then(data=>{
     const userList=document.getElementById('users-list');
     data.users.forEach(user =>{
        const listItem=document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        userList.appendChild(listItem);

     }); 
   })
   .catch(error =>{
    console.error('There has been a problem with your fetch operation:', error)
   });

});