document.addEventListener('DOMContentLoaded' , ( =>{
 fetch('data.json')
   .then(response=>{
    if (!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json()
   })
   .then(data=>{
     const userList=document.getElementById('user-list');
     data.users.foreach(user =>{
        const listitem=document.createElement('li');
        listitem.textContent = `${user.name} (${user.email})`
        userList.appendChild(listitem);

     }); 
   })
   .catch(error =>{
    console.error('There has been a problem with your fetch operation:', error)
   });

}));