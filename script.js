  var input=document.getElementById('input');
        
        function delet(event)
        {
            event.target.parentElement.remove();
        }
        function add()
        {
           var list=document.getElementById('list');
           var item=document.createElement('li');
           item.innerHTML=input.value+"<button onclick=delet(event)>Delete</button>";
           list.append(item);
        }
    