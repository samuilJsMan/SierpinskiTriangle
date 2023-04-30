"use strict";

let whereToAddPoint=document.querySelector(`.mainBoard`),Vertical0Andhorizontal1,itterations=0,randomize,
newPointAxels,axelFrom,axelTo,axelWhereToStand,previousPointAxel,newPoint,startPoint,
destinationPoints=[[404.133,0],[-202.666,350],[-202.666,-350]];

startPoint=document.createElement(`div`)
startPoint.classList.add(`axel0`,`axel`)
startPoint.style.bottom=`${destinationPoints[2][0]}px`;
startPoint.style.left=`${destinationPoints[2][1]}px`;
whereToAddPoint.appendChild(startPoint)

setTimeout(serpinsky,1000)
function serpinsky(){
	if(itterations<3000){Vertical0Andhorizontal1=0
		randomize=Math.floor(Math.random()*3)
		newPoint=document.createElement(`div`)
		newPoint.classList.add(`axel${itterations+1}`,`axel`)
		whereToAddPoint.appendChild(newPoint)
		newPointAxels=document.querySelector(`.axel${itterations+1}`)
		while(Vertical0Andhorizontal1!=2){
		if(Vertical0Andhorizontal1==0){axelFrom=window.getComputedStyle
			(document.querySelector(`.axel${itterations}`)).getPropertyValue(`bottom`)
		}else{axelFrom=window.getComputedStyle
			(document.querySelector(`.axel${itterations}`)).getPropertyValue(`left`)}
		axelFrom=parseInt(axelFrom)
		axelTo=destinationPoints[randomize][Vertical0Andhorizontal1]
		if (axelFrom>0 && axelTo>0){
			axelWhereToStand=axelFrom-(axelFrom-axelTo)/2
		}else if(axelFrom<0&&axelTo<0){
			axelWhereToStand=axelFrom+(Math.abs(axelFrom)-Math.abs(axelTo))/2
		}else{
			if(axelFrom>axelTo){axelWhereToStand=axelFrom-(axelFrom+Math.abs(axelTo))/2}
			if(axelFrom<axelTo){axelWhereToStand=axelFrom+(Math.abs(axelFrom)+axelTo)/2}
		}
		axelWhereToStand=axelWhereToStand+`px`
		if(Vertical0Andhorizontal1==0){
			newPointAxels.style.bottom=axelWhereToStand
		}else{
			newPointAxels.style.left=axelWhereToStand
		}
		Vertical0Andhorizontal1++}
		itterations++
		setTimeout(serpinsky,1)
	}		
}
