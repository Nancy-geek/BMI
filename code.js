const form = document.querySelector('form')          // form pura select krna padega kyuki form me hi submit button h 
// const height= parseInt(document.querySelector('#height').value) 
// this is wrong bcoz jase hi page load hoga empty value store ho jayegi or say vo phele hi value le lega rather than submit vale time pe , hame form submit hone pe ye evnet listen krana h 

form.addEventListener('submit', function(e){
    e.preventDefault()   // for not submiting value to the server 
    const height= parseInt(document.querySelector('#height').value)       // the height value default is in string so converting to int 
    const weight= parseInt(document.querySelector('#weight').value) 
    const results= document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){        // instead of height!=NaN , jo ki purani technique h and not recommended 
        results.innerHTML= `please enter a valid height ${height}`
    }
    // results.innerHTML=`${height}`
    else if(weight==='' || weight<0 || isNaN(weight)){         
        results.innerHTML= `please enter a valid height ${weight}`
    }
    else{    // above both conditions are not true therefore
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // results.innerHTML=` the body mass index is : ${bmi}`
        results.innerHTML=`<span> the body mass index is : ${bmi}</span><br>`

        if(bmi< 18.6) results.innerHTML="oops! u are Under Weight"
         else if(bmi>= 18.6 && bmi<=24.9 ) results.innerHTML="congratulations! u are in the Normal Range"
        if(bmi> 24.9) results.innerHTML="oops! u are Over Weight"

    }
    
})