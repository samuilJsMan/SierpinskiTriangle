"use strict"

const canvas=document.querySelector(`canvas`) 
const sideSize=(window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight)*0.95
canvas.width=sideSize+3                                                                        
const triHeight=Math.sqrt(sideSize**2-((sideSize)/2)**2)                                        
canvas.height=triHeight+3                                                                      
const triCorners=[[sideSize/2,0],[sideSize,triHeight],[0,triHeight]]                                                                                
const canvasReady=canvas.getContext(`2d`)                             
let lastPoint=[sideSize/2,0]
setTimeout(()=>{setInterval(newPoint,1)},1000)

function newPoint(){                                                                        
    let RD=Math.floor(Math.random()*3)                                                        
    lastPoint=[lastPoint[0]+(triCorners[RD][0]-lastPoint[0])/2,lastPoint[1]+(triCorners[RD][1]-lastPoint[1])/2]
    let r=(36+(10/triHeight*lastPoint[1]))*0.66 + (36+(10/sideSize*lastPoint[0]))*0.33
    let g=(77+(100/triHeight*lastPoint[1]))*0.66 + (77+(100/sideSize*lastPoint[0]))*0.33
    let b=(212+(-110/triHeight*lastPoint[1]))*0.66 + (212+(-110/sideSize*lastPoint[0]))*0.33
    canvasReady.fillStyle=`rgb(${r},${g},${b})`                     
    canvasReady.fillRect(lastPoint[0],lastPoint[1],1,1)
}
