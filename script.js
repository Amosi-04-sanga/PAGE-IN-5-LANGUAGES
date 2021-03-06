const language = document.getElementById('language');
const content = document.querySelectorAll('.main__content');
const contentArr = Array.from( content );
const contentLen = contentArr.length;

language.addEventListener( 'change', () => {

     // remove all active class on main__content element.
     for( let count = 0; count < contentLen; count++ ) {
          contentArr[count].classList.remove('active');
     }

     const choosenLanguage = language.value;
     
     const element = elementGetter(choosenLanguage);

     element.classList.add('active');
     
});



// element getter function.
function elementGetter( language ) {

    return document.getElementById(language);

}

