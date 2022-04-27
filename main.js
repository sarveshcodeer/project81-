canvas = document.getElementById("mvc") ; 
ctx= canvas.getContext("2d") ; 

ctx.beginPath() ; 
ctx.strokeStyle = "orange" ; 
 ctx.lineWidth = 5 ;  
ctx.arc( 200 , 200 , 65 , 0 , 2*Math.PI) ;
ctx.stroke() ; 

ctx.beginPath() ; 
ctx.strokeStyle = "blue" ; 
 ctx.lineWidth = 5 ;  
ctx.arc( 350 , 200 , 65 , 0 , 2*Math.PI) ;
ctx.stroke() ; 

ctx.beginPath() ; 
ctx.strokeStyle = "yellow" ; 
 ctx.lineWidth = 5 ;  
ctx.arc( 500 , 200 , 65 , 0 , 2*Math.PI) ;
ctx.stroke() ;

ctx.beginPath() ; 
ctx.strokeStyle = "red" ; 
 ctx.lineWidth = 5 ;  
ctx.arc( 275 , 280 , 65 , 0 , 2*Math.PI) ;
ctx.stroke() ;

ctx.beginPath() ; 
ctx.strokeStyle = "black" ; 
 ctx.lineWidth = 5 ;  
ctx.arc( 425 , 280 , 65 , 0 , 2*Math.PI) ;
ctx.stroke() ;