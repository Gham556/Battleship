(()=>{"use strict";const e=(e,t,r)=>{let a=0;return{health:e,name:t,sunk:!1,isHit:()=>a+=1,isSunk:()=>a===e}},t=()=>{const e=["[1:1]","[1:2]","[1:3]","[1:4]","[1:5]","[1:6]","[1:7]","[1:8]","[1:9]","[1:10]","[2:1]","[2:2]","[2:3]","[2:4]","[2:5]","[2:6]","[2:7]","[2:8]","[2:9]","[2:10]","[3:1]","[3:2]","[3:3]","[3:4]","[3:5]","[3:6]","[3:7]","[3:8]","[3:9]","[3:10]","[4:1]","[4:2]","[4:3]","[4:4]","[4:5]","[4:6]","[4:7]","[4:8]","[4:9]","[4:10]","[5:1]","[5:2]","[5:3]","[5:4]","[5:5]","[5:6]","[5:7]","[5:8]","[5:9]","[5:10]","[6:1]","[6:2]","[6:3]","[6:4]","[6:5]","[6:6]","[6:7]","[6:8]","[6:9]","[6:10]","[7:1]","[7:2]","[7:3]","[7:4]","[7:5]","[7:6]","[7:7]","[7:8]","[7:9]","[7:10]","[8:1]","[8:2]","[8:3]","[8:4]","[8:5]","[8:6]","[8:7]","[8:8]","[8:9]","[8:10]","[9:1]","[9:2]","[9:3]","[9:4]","[9:5]","[9:6]","[9:7]","[9:8]","[9:9]","[9:10]","[10:1]","[10:2]","[10:3]","[10:4]","[10:5]","[10:6]","[10:7]","[10:8]","[10:9]","[10:10]"].reduce(((e,t)=>({...e,[t]:""})),{});return{board:e,placeShip:(t,r)=>{for(let a of r)e[a]=t;return e},recieveAttack:(t,r)=>{if(""!==e[t]){e[`${t}`].isHit();let a=0;for(let e of r.shipsArray)!0===e.isSunk()&&a++;return a===r.shipsArray.length&&(r===l&&console.log("computer wins"),r===d&&console.log("player wins")),!0}return!1},shipsArray:[]}},r=()=>({randomProperty:function(e){const t=Object.keys(e);return t[t.length*Math.random()<<0]}}),a=e(2,"Patrol Boat"),s=t(),o=r(),n=(()=>{r(),r();const a=t(),s=t(),o=e(5,"carrier"),n=e(4,"battleship"),l=e(3,"destroyer"),d=e(3,"submarine"),i=e(2,"uBoat");return s.placeShip(o,["[10:1]","[10:2]","[10:3]","[10:4]","[10:5]"]),s.placeShip(n,["[9:1]","[9:2]","[9:3]","[9:4]"]),s.placeShip(l,["[8:1]","[8:2]","[8:3]"]),s.placeShip(d,["[7:3]","[7:4]","[7:5]"]),s.placeShip(i,["[1:7]","[1:8]"]),s.shipsArray.push(o,n,l,d,i),{player1Board:a,player2Board:s}})(),l=n.player1Board,d=n.player2Board;n.shipsArray,s.placeShip(a,["[1:1]","[2:2]"]);const i=document.getElementsByClassName("spaceNull"),c=()=>{const e=o.randomProperty(l.board);if(console.log(l),!0===l.recieveAttack(e,l))for(let t of i)t.id===`A${e}`&&(t.style.backgroundColor="#FFF",delete l.board[e],console.log(l.board));else for(let t of i)t.id===`A${e}`&&(t.style.backgroundColor="#000",delete l.board[e],console.log(l.board))},u=e=>{e.dataTransfer.setData("text",3),e.dataTransfer.setData("ship","Destroyer")},p=e=>{e.dataTransfer.setData("text",5),e.dataTransfer.setData("ship","Carrier")},h=e=>{e.dataTransfer.setData("text",4),e.dataTransfer.setData("ship","Battleship")},f=e=>{e.dataTransfer.setData("text",3),e.dataTransfer.setData("ship","Submarine")},g=e=>{e.dataTransfer.setData("text",2),e.dataTransfer.setData("ship","uBoat")};(()=>{const t=document.querySelector("#playerBoard");t.addEventListener("drop",(function(t){t.preventDefault();const r=t.dataTransfer.getData("text"),a=t.dataTransfer.getData("ship");return((t,r,a)=>{const s=[],o=[],n=t.id.split("");if(console.log(r),Number(r)+Number(n[4])>11||"0"===n[5]);else{t.style.background="rgb(122, 118, 118)";let n=t.nextElementSibling;n.style.background="rgb(122, 118, 118)",s.push(t.id,n.id);for(let e=2;e<Number(r);e++)n.nextElementSibling.style.background="rgb(122, 118, 118)",n=n.nextElementSibling,s.push(n.id);for(let e of s)o.push(e.substring(1));const d=e(Number(r),a);l.shipsArray.push(d),l.placeShip(d,o),console.log(l)}})(t.target,r,a)})),t.addEventListener("dragover",(function(e){e.preventDefault()}))})(),(()=>{const e=document.querySelector("#Destroyer"),t=document.querySelector("#Carrier"),r=document.querySelector("#Battleship"),a=document.querySelector("#Submarine"),s=document.querySelector("#Uboat");e.addEventListener("dragstart",u),t.addEventListener("dragstart",p),r.addEventListener("dragstart",h),a.addEventListener("dragstart",f),s.addEventListener("dragstart",g)})(),(()=>{const e=document.querySelectorAll(".space");for(let t of e)t.addEventListener("click",(function(){!0===d.recieveAttack(this.id,d)?this.style.backgroundColor="#FFF":this.style.backgroundColor="#000",c()}))})()})();