(()=>{"use strict";const e=(e,r,t)=>{let o=0;return{health:e,name:r,sunk:!1,isHit:()=>o+=1,isSunk:()=>o===e}},r=()=>{const e=["[1:1]","[1:2]","[1:3]","[1:4]","[1:5]","[1:6]","[1:7]","[1:8]","[1:9]","[1:10]","[2:1]","[2:2]","[2:3]","[2:4]","[2:5]","[2:6]","[2:7]","[2:8]","[2:9]","[2:10]","[3:1]","[3:2]","[3:3]","[3:4]","[3:5]","[3:6]","[3:7]","[3:8]","[3:9]","[3:10]","[4:1]","[4:2]","[4:3]","[4:4]","[4:5]","[4:6]","[4:7]","[4:8]","[4:9]","[4:10]","[5:1]","[5:2]","[5:3]","[5:4]","[5:5]","[5:6]","[5:7]","[5:8]","[5:9]","[5:10]","[6:1]","[6:2]","[6:3]","[6:4]","[6:5]","[6:6]","[6:7]","[6:8]","[6:9]","[6:10]","[7:1]","[7:2]","[7:3]","[7:4]","[7:5]","[7:6]","[7:7]","[7:8]","[7:9]","[7:10]","[8:1]","[8:2]","[8:3]","[8:4]","[8:5]","[8:6]","[8:7]","[8:8]","[8:9]","[8:10]","[9:1]","[9:2]","[9:3]","[9:4]","[9:5]","[9:6]","[9:7]","[9:8]","[9:9]","[9:10]","[10:1]","[10:2]","[10:3]","[10:4]","[10:5]","[10:6]","[10:7]","[10:8]","[10:9]","[10:10]"].reduce(((e,r)=>({...e,[r]:""})),{});return{board:e,placeShip:(r,t)=>{for(let o of t)e[o]=r;return e},recieveAttack:r=>""!==e[r]&&(e[`${r}`].isHit(),!0)}},t=()=>({randomProperty:function(e){const r=Object.keys(e);return e[r[r.length*Math.random()<<0]]}}),o=e(2,"Patrol Boat"),c=r(),n=(t(),(()=>{t(),t();const o=r(),c=r(),n=e(5,"carrier"),a=e(4,"battleship"),l=e(3,"destroyer"),s=e(3,"submarine"),i=e(2,"uBoat");return o.placeShip(n,["[1:1]","[1:2]","[1:3]","[1:4]","[1:5]"]),o.placeShip(a,["[2:1]","[2:2]","[2:3]","[2:4]"]),o.placeShip(l,["[3:1]","[3:2]","[3:3]"]),o.placeShip(s,["[5:3]","[5:4]","[5:5]"]),o.placeShip(i,["[6:7]","[6:8]"]),{player1Board:o,player2Board:c}})().player1Board);c.placeShip(o,["[1:1]","[2:2]"]),(()=>{const e=document.querySelectorAll(".space");console.log(e);for(let r of e)r.addEventListener("click",(function(){console.log("runs"),!0===n.recieveAttack(this.id)?(console.log("runsn"),this.style.backgroundColor="#FFF"):this.style.backgroundColor="#000"}))})()})();