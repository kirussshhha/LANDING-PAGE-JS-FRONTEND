document.getElementById('additional-serv-title').addEventListener('click', function() {
    const additional = document.querySelectorAll('#additional-serv-checkbox');
    const addArrow = document.getElementById('add-arrow');

    additional.forEach(add => {
        if (add.style.display === 'none') {
            add.style.display = 'flex'; 
            addArrow.style.transform = 'rotate(0deg)';
        } else {
            add.style.display = 'none'; 
            addArrow.style.transform = 'rotate(180deg)';
        }
    });
});
