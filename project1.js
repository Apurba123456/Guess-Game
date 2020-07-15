var v=Math.floor(100*Math.random())
let m=Array.from(Array(101).keys())
console.log(v)
document.querySelector('#button').onclick= function(){
    let x=document.querySelector("input").value;
    var y=document.createElement('tr');
    let z=document.createElement('th');
    let a=document.createElement('h2');
    console.log();
    a.innerHTML='Your Answer is : '+x;
    z.appendChild(a);
    y.appendChild(z);
    
    
 if(x===''){
    console.log('hey')
    document.querySelector("#alert1").innerHTML='Please Enter Something'
    $('.alert').show('fade');
    
 }
 else if(v===parseInt(x)){
   document.querySelector('.alert').className='alert alert-success collapse'
   document.querySelector("#alert1").innerHTML='Congratulation You are Right'
   $('.alert').show('fade');
   document.querySelector('#result').appendChild(y);
   document.querySelector("input").value=''
   document.querySelector('#button').disabled = true;
 }

 else if(v>parseInt(x)){
   document.querySelector('.alert').className='alert alert-primary collapse'
   document.querySelector("#alert1").innerHTML='Guess Something Big'
   $('.alert').show('fade');
   document.querySelector('#result').appendChild(y);
   document.querySelector("input").value=''
 }

 else if(v<parseInt(x)){
   document.querySelector('.alert').className='alert alert-primary collapse'
   document.querySelector("#alert1").innerHTML='Guess Something Small'
   $('.alert').show('fade');
   document.querySelector('#result').appendChild(y);
   document.querySelector("input").value=''
 }



 else if(!m.includes(x)){
   document.querySelector('.alert').className='alert alert-danger collapse'
   document.querySelector("#alert1").innerHTML='Choose Between 1 and 100'
   $('.alert').show('fade');
   document.querySelector('#result').appendChild(y);
   document.querySelector("input").value=''
 }
 
//  else{
//     document.querySelector('#result').appendChild(y);
//     document.querySelector("input").value=''


//     document.querySelector("#alert1").innerHTML= x
//     $('.alert').show('fade');

//  }
}
// $('#button').click(function() {
//     $('.alert').show();
//  })