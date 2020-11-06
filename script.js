/*******tabs*******/
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
/*******tabs_end*******/
/*******accordeon*******/
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
/*******accordeon_end*******/
/*******slider*******/

var sliderItems = document.querySelectorAll('.slider-item'),
    sliderItemsWrap = document.querySelector('.slider-inner'),
    sliderTrack = document.querySelector('.slider-track'),
    sliderItemWidth = parseFloat(getComputedStyle( sliderItemsWrap , null).width.replace("px", "")),
    sliderImtesAmount = sliderItems.length,
    sliderNewItems = sliderTrack.innerHTML + sliderTrack.innerHTML + sliderTrack.innerHTML,
    index = 0,
    sliderPrev = document.querySelector('.slider-prev'),
    sliderNext = document.querySelector('.slider-next'),
    iint = false;

    sliderTrack.innerHTML = sliderNewItems;
    sliderTrack.style.transform = 'translateX(' + -sliderImtesAmount*sliderItemWidth + 'px)';    
    function prev() {        
        if( iint ){
            return
        }        
        iint = true;
        sliderTrack.classList.add('transition');
        index--;
        sliderTrack.style.transform = 'translateX('+ -1 * sliderItemWidth * (sliderImtesAmount + index) + 'px)';
        if( index == -sliderImtesAmount ){
            setTimeout(function(){
                index = 0;
                sliderTrack.classList.remove('transition');
                sliderTrack.style.transform = 'translateX(' + -sliderImtesAmount*sliderItemWidth + 'px)';
            }, 500)
        }
        setTimeout(function(){
            iint = false;
        }, 500)
    }

    function next() {
        if( iint ){
            return
        }        
        iint = true;
        sliderTrack.classList.add('transition');
        index++
        sliderTrack.style.transform = 'translateX('+ -1 * sliderItemWidth * (sliderImtesAmount + index) + 'px)';

        if( index == sliderImtesAmount ){
            setTimeout(function(){
                index = 0;
                sliderTrack.classList.remove('transition');
                sliderTrack.style.transform = 'translateX(' + -sliderImtesAmount*sliderItemWidth + 'px)';
            }, 500)
        }
        setTimeout(function(){
            iint = false;
        }, 500)
    }
    
    sliderPrev.addEventListener('click', prev);
    sliderNext.addEventListener('click', next);

/*******slider_end*******/