const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar')

document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle'){
        toggle.classList.remove('active');
        sidebar.classList.remove('active')
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active')
    
}