var tabs_title = document.querySelectorAll('.tabs-title a'),
    tabs_body = document.querySelectorAll('.tabs-body');
tabs_title.forEach(function(elem,index){
    elem.addEventListener('click', function(e){              
        if( !e.target.classList.contains('active') ){
            tabs_title.forEach(function(elem2,index2){
                if( index === index2 ){
                    elem2.classList.add('active');
                }                
                else{
                    elem2.classList.remove('active');
                }
            });
            tabs_body.forEach(function(elem3, index3){
                if( index === index3 ){
                    elem3.classList.add('active');
                }
                else{
                    elem3.classList.remove('active');
                }                
            });            
        }
        return false
    });
})

var accordeon = document.querySelectorAll('.accordeon-item');
accordeon.forEach(function(elem){
    elem.addEventListener('click', function(e){
        if( e.target.classList.contains('active') ){
            e.target.classList.remove('active')
        }
        else{
            e.target.classList.add('active')
        }
    })
});