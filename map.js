let found= document.querySelectorAll('.a1');
for ( let i=0; i<found.length; i++ ){ 
        found[i].addEventListener('click', selector);
        found[i].addEventListener('click', getlh); }
function selector(e){
    let townid=e.target.id;           
    switch(townid){   
            case 'a':            document.getElementById("toga").setAttribute("class","townf");
        break;
            case 'b':                document.getElementById("togb").setAttribute("class","townf");                 
            break;
            case 'c':                document.getElementById("togc").setAttribute("class","townf");                   
            break;
            case 'd':                document.getElementById("togd").setAttribute("class","townf");                   
            break;
            case 'e':                document.getElementById("toge").setAttribute("class","townf");                  
            break;
            case 'f':             document.getElementById("togf").setAttribute("class","townf");         
            break;
            default: 
            found.classList='a1';
        } }; 
let newDirection=document.querySelector('.compass');
let oldDirection=document.querySelector('.compass-inner');    
let shower=document.querySelector('#boxer'); 
function radToDeg(rad){
        return rad/(Math.PI/180);  }; 
 let storel=[]; let storeh=[];
 function getlh(e){
        let l=e.target.offsetLeft;
        let h=e.target.offsetTop;
       storel.push(l);
        storeh.push(h);       
        if(storeh.length===2){            
            calcul();}};      
function calcul(){            
    if(storel[1]-storel[0]<0){                                  let dx=0-(storel[1]-storel[0]);
       if(storeh[1]-storeh[0]<0){
          let dy=0-(storeh[1]-storeh[0]);
          let a=Math.atan2(dy,dx);           
          let b=Math.floor(radToDeg(a));console.log(b);
          //going down b to a is negative.
          let c=360-(90-b);
          //going left b to a is negative.
          let old=90-b;
          let changer='rotate('+c+'deg)';
          let changerOld='rotate('+old+'deg)';
          newDirection.style='transform:'+changer+';';
          oldDirection.style='transform:'+changerOld+';';
          shower.innerHTML=360-(90-b);
        }else{let dy=(storeh[1]-storeh[0]);
            a=Math.atan2(dy,dx);
            let b=Math.floor(radToDeg(a));
            let c=180+(90-b); //x is negative going left.
            let old=360-c;          
            let changer='rotate('+c+'deg)';
            let changerOld='rotate('+old+'deg)';
            newDirection.style='transform:'+changer+';';
          oldDirection.style='transform:'+changerOld+';';
            shower.innerHTML=c;             
        } refresher();
    }  
    if(storel[1]-storel[0]>0){let dx=storel[1]-storel[0]; 
        if(storeh[1]-storeh[0]<0){                       
            let dy=0-(storeh[1]-storeh[0]);
            a=Math.atan2(dy,dx);
            let b=Math.floor(radToDeg(a));
          let c=90-b;           
            let old=360-c;
            let changer='rotate('+c+'deg)';
            let changerOld='rotate('+old+'deg)';
            newDirection.style='transform:'+changer+';';
          oldDirection.style='transform:'+changerOld+';'; 
            shower.innerHTML=c;
        }else{ let dy=storeh[1]-storeh[0];                              let dx=storel[1]-storel[0];
                a=Math.atan2(dy,dx);
                b=Math.floor(radToDeg(a));                               let c=90+b;/*c needs to be a calulation*/ 
              
                let old=90-(c+90);
                let changer='rotate('+c+'deg)';
                let changerOld='rotate('+old+'deg)';
             newDirection.style='transform:'+changer+';';
          oldDirection.style='transform:'+changerOld+';';
                shower.innerHTML=b; 
            } 
        } refresher(); 
}    
function refresher(){   
    storel=[];
     storeh=[] ;   
}
