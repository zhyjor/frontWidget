function mControl(e){function a(){if(D.option({wheels:[[{label:"Second wheel",data:i(r.timeLeft)}]]}),Math.abs(r.order)>1){var e=Math.abs(30*Math.ceil(r.order/30));D.setVal(e)}else 1==Math.abs(r.order)&&D.setVal(0);13==r.washMode||14==r.washMode?(2==Math.abs(r.dryMode)||3==Math.abs(r.dryMode)?(_=Math.abs(r.dryMode)-1,n=!1,$("#pop_washText6").css({color:"#666666"})):1==Math.abs(r.dryMode)||(_=3,m=(Math.abs(r.dryMode)-30)/30,n=!0,$("#pop_washText6").css({color:"#ffffff"})),R.option({wheels:[[{label:"Second wheel",data:g}]]}),R.setVal(_),x||R.hide(),F.option({wheels:[[{label:"Second wheel",data:T}]]}),F.setVal(m),L||F.hide()):(h=Math.abs(r.washTemp),c=Math.abs(r.speed),M=Math.abs(r.adjustWash),f=Math.abs(r.potch),B.option({wheels:[[{label:"Second wheel",data:b}]]}),B.setVal(M),k||B.hide(),I.option({wheels:[[{label:"Second wheel",data:u}]]}),I.setVal(h),7!=r.washMode?$("#pop_washText2")[0].innerHTML=1==h?"冷水<br><br>温度":"<p style='font-size: 1.5rem;display:inline'>"+h+"</p>℃<br><br>温度":$("#pop_washText2")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>"+h+"</p>℃<br><br>温度",S||I.hide(),O.option({wheels:[[{label:"Second wheel",data:w}]]}),O.setVal(f),j||O.hide(),C.option({wheels:[[{label:"Second wheel",data:y}]]}),C.setVal(c),V||C.hide())}function l(e,a){switch(console.log("onChange:"+e.washMode),e.washMode){case 1:u=[{value:1,display:"冷"},{value:20,display:"20"},{value:30,display:"30"},{value:40,display:"40"},{value:60,display:"60"},{value:95,display:"95"}],y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],v=87,b=[{value:5,display:"5"},{value:10,display:"10"},{value:15,display:"15"},{value:20,display:"20"},{value:25,display:"25"},{value:30,display:"30"},{value:35,display:"35"},{value:40,display:"40"},{value:45,display:"45"},{value:50,display:"50"},{value:55,display:"55"},{value:60,display:"60"}],w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"}],0!=a&&(r.washTemp=40,r.speed=1e3,r.adjustWash=15,r.potch=2,r.energySave=1,r.preWash=1,r.creaseRes=1,r.noDrain=1,r.nightWash=1,r.highWater=1,r.order=1,r.dryMode=1);break;case 2:u=[{value:1,display:"冷"},{value:20,display:"20"},{value:30,display:"30"},{value:40,display:"40"}],h=40,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1e3,v=74,b=[{value:5,display:"5"},{value:10,display:"10"},{value:15,display:"15"},{value:20,display:"20"},{value:25,display:"25"},{value:30,display:"30"},{value:35,display:"35"},{value:40,display:"40"},{value:45,display:"45"},{value:50,display:"50"}],M=15,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"}],f=2,0!=a&&(r.washTemp=40,r.speed=1e3,r.adjustWash=15,r.potch=2,r.energySave=1,r.preWash=1,r.creaseRes=1,r.noDrain=1,r.nightWash=1,r.highWater=1,r.order=1,r.dryMode=1);break;case 3:u=[{value:1,display:"冷"},{value:20,display:"20"},{value:30,display:"30"},{value:40,display:"40"}],h=30,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"}],c=800,v=66,b=[{value:5,display:"5"},{value:10,display:"10"},{value:15,display:"15"},{value:20,display:"20"},{value:25,display:"25"},{value:30,display:"30"}],M=15,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"}],f=2,0!=a&&(r.washTemp=30,r.speed=800,r.adjustWash=15,r.potch=2,r.energySave=1,r.preWash=1,r.creaseRes=1,r.noDrain=1,r.nightWash=1,r.highWater=1,r.order=1,r.dryMode=-1);break;case 4:u=[{value:1,display:"冷"},{value:20,display:"20"},{value:30,display:"30"},{value:40,display:"40"},{value:60,display:"60"}],h=40,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"}],c=1e3,v=72,b=[{value:5,display:"5"},{value:10,display:"10"},{value:15,display:"15"},{value:20,display:"20"},{value:25,display:"25"},{value:30,display:"30"},{value:35,display:"35"},{value:40,display:"40"},{value:45,display:"45"},{value:50,display:"50"}],M=5,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"}],f=3,0!=a&&(r.washTemp=40,r.speed=1e3,r.adjustWash=5,r.potch=3,r.energySave=1,r.preWash=1,r.creaseRes=1,r.noDrain=1,r.nightWash=1,r.highWater=1,r.order=1,r.dryMode=-1);break;case 5:u=[{value:1,display:"冷"},{value:20,display:"20"},{value:30,display:"30"},{value:40,display:"40"}],h=30,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"}],c=600,v=52,b=[{value:5,display:"5"},{value:10,display:"10"},{value:15,display:"15"},{value:20,display:"20"},{value:25,display:"25"},{value:30,display:"30"}],M=15,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"}],f=2,0!=a&&(r.washTemp=30,r.speed=600,r.adjustWash=15,r.potch=2,r.energySave=1,r.preWash=-1,r.creaseRes=-1,r.noDrain=1,r.nightWash=-1,r.highWater=1,r.order=1,r.dryMode=-1);break;case 6:u=[{value:1,display:"冷"},{value:20,display:"20"},{value:30,display:"30"},{value:40,display:"40"}],h=40,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"}],c=800,v=69,b=[{value:5,display:"5"},{value:10,display:"10"},{value:15,display:"15"},{value:20,display:"20"},{value:25,display:"25"},{value:30,display:"30"},{value:35,display:"35"},{value:40,display:"40"}],M=10,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"}],f=2,0!=a&&(r.washTemp=40,r.speed=800,r.adjustWash=10,r.potch=2,r.energySave=1,r.preWash=1,r.creaseRes=-1,r.noDrain=1,r.nightWash=1,r.highWater=1,r.order=1,r.dryMode=-1);break;case 7:u=[{value:60,display:"60"},{value:95,display:"95"}],h=95,y=[{value:1e3,display:"1000"}],c=1e3,v=128,b=[{value:5,display:"5"}],M=5,w=[{value:2,display:"2"}],f=2,0!=a&&(r.washTemp=95,r.speed=1e3,r.adjustWash=5,r.potch=2,r.energySave=-1,r.preWash=-1,r.creaseRes=-1,r.noDrain=-1,r.nightWash=-1,r.highWater=-1,r.order=1,r.dryMode=-1);break;case 8:u=[{value:1,display:"冷"}],h=1,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1e3,v=33,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"}],f=2,0!=a&&(r.washTemp=1,r.speed=1e3,r.adjustWash=-1,r.potch=2,r.energySave=-1,r.preWash=-1,r.creaseRes=1,r.noDrain=1,r.nightWash=1,r.highWater=1,r.order=1,r.dryMode=1);break;case 9:u=[{value:1,display:"冷"}],h=1,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1e3,v=13,0!=a&&(r.washTemp=1,r.speed=1e3,r.adjustWash=-1,r.potch=-1,r.energySave=-1,r.preWash=-1,r.creaseRes=1,r.noDrain=-1,r.nightWash=1,r.highWater=-1,r.order=1,r.dryMode=1);break;case 10:u=[{value:60,display:"60"}],h=60,y=[{value:1400,display:"1400"}],c=1400,v=326,b=[{value:5,display:"5"}],M=5,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"}],f=3,0!=a&&(r.washTemp=60,r.speed=1400,r.adjustWash=5,r.potch=3,r.energySave=-1,r.preWash=1,r.creaseRes=-1,r.noDrain=-1,r.nightWash=-1,r.highWater=-1,r.order=1,r.dryMode=3);break;case 11:u=[{value:1,display:"冷"},{value:20,display:"20"},{value:30,display:"30"},{value:40,display:"40"},{value:60,display:"60"}],h=40,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"}],c=800,v=68,b=[{value:5,display:"5"},{value:10,display:"10"},{value:15,display:"15"},{value:20,display:"20"},{value:25,display:"25"},{value:30,display:"30"}],M=5,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"}],f=2,0!=a&&(r.washTemp=40,r.speed=800,r.adjustWash=5,r.potch=2,r.energySave=1,r.preWash=1,r.creaseRes=-1,r.noDrain=1,r.nightWash=1,r.highWater=1,r.order=1,r.dryMode=1);break;case 12:u=[{value:1,display:"冷"},{value:20,display:"20"},{value:30,display:"30"},{value:40,display:"40"}],h=30,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"}],c=1e3,v=15,b=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"},{value:9,display:"9"},{value:10,display:"10"}],M=1,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"}],f=1,0!=a&&(r.washTemp=30,r.speed=1e3,r.adjustWash=1,r.potch=1,r.energySave=-1,r.preWash=-1,r.creaseRes=-1,r.noDrain=1,r.nightWash=1,r.highWater=-1,r.order=1,r.dryMode=1);break;case 13:u=[{value:90,display:"90"}],h=90,y=[{value:1400,display:"1400"}],c=1400,v=124,0!=a&&(r.washTemp=90,r.speed=1400,r.adjustWash=-1,r.potch=-1,r.energySave=-1,r.preWash=-1,r.creaseRes=-1,r.noDrain=-1,r.nightWash=-1,r.highWater=-1,r.order=-1,r.dryMode=2);break;case 14:u=[{value:110,display:"110"}],h=110,y=[{value:1400,display:"1400"}],c=1400,v=154,0!=a&&(r.washTemp=110,r.speed=1400,r.adjustWash=-1,r.potch=-1,r.energySave=-1,r.preWash=-1,r.creaseRes=-1,r.noDrain=-1,r.nightWash=-1,r.highWater=-1,r.order=-1,r.dryMode=2)}0!=a&&(r.timeLeft=v)}function s(e,a,l,s){switch(e){case 1:-2==a||2==a?(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"}],c=800):-1!=a&&1!=a||(Math.abs(l)>1?(y=[{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1400):(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1e3));break;case 2:-2==a||2==a?(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"}],c=600):-1!=a&&1!=a||(Math.abs(l)>1?(y=[{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1400):(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1e3));break;case 3:-2==a||2==a?(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"}],c=600):-1!=a&&1!=a||(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"}],c=800);break;case 4:-2==a||2==a?(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"}],c=600):-1!=a&&1!=a||(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"}],c=1e3);break;case 8:case 9:-2==a||2==a?(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"}],c=800):-1!=a&&1!=a||(Math.abs(l)>1?(y=[{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1400):(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1e3));break;case 10:-2==a||2==a?(y=[{value:1400,display:"1400"}],c=1400):-1!=a&&1!=a||(y=(Math.abs(l),[{value:1400,display:"1400"}]),c=1400);break;case 11:y=2==Math.abs(l)||3==Math.abs(l)?[{value:800,display:"800"}]:[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"}],c=800;break;case 12:2==Math.abs(l)||3==Math.abs(l)?(y=[{value:1e3,display:"1000"},{value:1200,display:"1200"}],c=1200):(y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"}],c=1e3)}0!=s?r.speed=c:c=Math.abs(r.speed),C.option({wheels:[[{label:"Second wheel",data:y}]]}),C.setVal(c),V||C.hide()}function o(e,a,l,s){switch(e){case 1:-2==a||2==a?c=(Math.abs(l),800):-1!=a&&1!=a||(c=Math.abs(r.dryMode)>1?1400:2==Math.abs(l)?800:1e3);break;case 2:-2==a||2==a?c=(Math.abs(l),600):-1!=a&&1!=a||(c=Math.abs(r.dryMode)>1?1400:2==Math.abs(l)?600:1e3);break;case 3:-2==a||2==a?c=(Math.abs(l),600):-1!=a&&1!=a||(c=2==Math.abs(l)?600:800);break;case 4:-2==a||2==a?c=(Math.abs(l),600):-1!=a&&1!=a||(c=2==Math.abs(l)?600:1e3);break;case 6:-2==a||2==a?c=600:-1!=a&&1!=a||(c=800);break;case 8:case 9:-2==a||2==a?c=(Math.abs(l),800):-1!=a&&1!=a||(c=Math.abs(r.dryMode)>1?1400:2==Math.abs(l)?800:1e3);break;case 11:-2==a||2==a?c=600:-1!=a&&1!=a||(c=800);break;case 12:-2==a||2==a?c=800:-1!=a&&1!=a||(c=Math.abs(r.dryMode)>1?1200:1e3)}0!=s?r.speed=c:c=Math.abs(r.speed),C.option({wheels:[[{label:"Second wheel",data:y}]]}),C.setVal(c),V||C.hide()}function d(e,a){switch(e){case 1:1==Math.abs(a)?M=40:20==Math.abs(a)?M=35:30==Math.abs(a)?M=25:40==Math.abs(a)?M=15:60==Math.abs(a)?M=10:95==Math.abs(a)&&(M=5);break;case 2:1==Math.abs(a)?M=40:20==Math.abs(a)?M=35:30==Math.abs(a)?M=25:40==Math.abs(a)?M=15:60==Math.abs(a)||Math.abs(a);break;case 3:1==Math.abs(a)?M=30:20==Math.abs(a)?M=25:30==Math.abs(a)?M=15:40==Math.abs(a)?M=5:60==Math.abs(a)||Math.abs(a);break;case 4:1==Math.abs(a)?M=30:20==Math.abs(a)?M=25:30==Math.abs(a)?M=15:40==Math.abs(a)?M=5:60==Math.abs(a)?M=5:Math.abs(a);break;case 5:1==Math.abs(a)?M=30:20==Math.abs(a)?M=25:30==Math.abs(a)?M=15:40==Math.abs(a)?M=5:60==Math.abs(a)||Math.abs(a);break;case 6:1==Math.abs(a)?M=40:20==Math.abs(a)?M=25:30==Math.abs(a)?M=20:40==Math.abs(a)?M=10:60==Math.abs(a)||Math.abs(a);break;case 11:1==Math.abs(a)?M=30:20==Math.abs(a)?M=25:30==Math.abs(a)?M=15:40==Math.abs(a)?M=5:60==Math.abs(a)?M=5:Math.abs(a);break;case 12:1==Math.abs(a)?M=10:20==Math.abs(a)?M=3:30==Math.abs(a)?M=1:40==Math.abs(a)?M=1:60==Math.abs(a)||Math.abs(a)}B.option({wheels:[[{label:"Second wheel",data:b}]]}),B.setVal(M),k||B.hide()}function i(e){var a=e/60;a=a==parseInt(a)?Math.ceil(e/60)+1:Math.ceil(e/60);var l=[];if(0!=a){var s=new Object;s.value=0,s.display=lang.orderCancel,l.push(s)}for(var o=a;o<24;o++){var d,i,t=new Object,n=new Object,r=new Object;d=o<10?"0"+o:""+o,i=60*o,n.value=i,n.display=d+":00",l.push(n),i=60*o+30,r.value=i,r.display=d+":30",l.push(r),23==o&&(i=1440,t.value=i,t.display="24:00",l.push(t))}return l}function t(){k&&(k=!k,B.hide()),S&&(S=!S,I.hide()),j&&(j=!j,O.hide()),V&&(V=!V,C.hide()),x&&(x=!x,R.hide()),L&&(L=!L,F.hide())}var n,r,p=0,u=[{value:1,display:"冷"},{value:20,display:"20"},{value:30,display:"30"},{value:40,display:"40"},{value:60,display:"60"},{value:95,display:"95"}],h=40,y=[{value:1,display:"0"},{value:400,display:"400"},{value:600,display:"600"},{value:800,display:"800"},{value:1e3,display:"1000"},{value:1200,display:"1200"},{value:1400,display:"1400"}],c=1e3,v=87,b=[{value:5,display:"5"},{value:10,display:"10"},{value:15,display:"15"},{value:20,display:"20"},{value:25,display:"25"},{value:30,display:"30"},{value:35,display:"35"},{value:40,display:"40"},{value:45,display:"45"},{value:50,display:"50"},{value:55,display:"55"},{value:60,display:"60"}],M=15,w=[{value:1,display:"1"},{value:2,display:"2"},{value:3,display:"3"},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"}],f=2,g=[{value:1,display:"标准"},{value:2,display:"超干"},{value:3,display:"定时"}],_=1,T=[{value:1,display:"01:00"},{value:2,display:"01:30"},{value:3,display:"02:00"},{value:4,display:"02:30"},{value:5,display:"03:00"}],m=1,W=function(){var e=!1;return Date.now()-p<3500&&(e=!0),e},D=mobiscroll.scroller("#scrollerOrder",{theme:"mobiscroll",display:"inline",showLabel:!1,height:40,width:$(window).width(),rows:3,circular:!1,closeOnOverlayTap:!0,wheels:[[{label:"Second wheel",data:i(310)}]],onChange:function(a,l){if(console.log("change"),r.order>0)p=Date.now(),0==l.getVal()?(console.log("选择时间0，预约取消"),r.order=1,nwBuffer='{"opt":["order"],"p":['+Number(r.order)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer)):(console.log(l.getVal()),r.order=l.getVal(),nwBuffer='{"opt":["order"],"p":['+Number(r.order)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer));else{if(Math.abs(r.order)>1){var s=Math.abs(30*Math.ceil(r.order/30));l.setVal(s)}else 1==Math.abs(r.order)&&l.setVal(0);IsDebug?console.log("预约功能此时不可修改"):(console.log("预约功能此时不可修改"),navigator.PluginInterface.showToast("预约功能此时不可修改",0))}}}),k=!1,B=mobiscroll.scroller("#scroller1",{theme:"mobiscroll",showLabel:!1,display:"inline",rows:3,height:30,closeOnOverlayTap:!1,onInit:function(e,a){a.setVal(M),$("#pop_washText1")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>"+M+"</p>分<br><br>洗涤"},onChange:function(a,l){r.adjustWash>0?(p=Date.now(),$("#pop_washText1")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>"+l.getVal()+"</p>分<br><br>洗涤",r.adjustWash=l.getVal(),nwBuffer='{"opt":["adjustWash"],"p":['+Number(r.adjustWash)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer)):(l.setVal(Math.abs(r.adjustWash)),IsDebug?console.log("此时不可修改"):(console.log("此时不可修改"),navigator.PluginInterface.showToast("此时不可修改",0)))},wheels:[[{label:"Second wheel",data:b}]]});B.hide(),$("#pop_washText1").bind("click",function(e){8!=r.washMode&&9!=r.washMode&&(k=!k,k?B.show(!1,!0):B.hide(!1,!1))});var S=!1,I=mobiscroll.scroller("#scroller2",{theme:"mobiscroll",showLabel:!1,display:"inline",rows:3,height:30,closeOnOverlayTap:!1,onInit:function(e,a){a.setVal(h),$("#pop_washText2")[0].innerHTML=1==h?"冷水℃<br><br>温度":"<p style='font-size: 1.5rem;display:inline'>"+h+"</p>℃<br><br>温度"},onChange:function(a,l){r.washTemp>0?(p=Date.now(),7!=r.washMode&&1==l.getVal()?$("#pop_washText2")[0].innerHTML="冷水<br><br>温度":$("#pop_washText2")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>"+l.getVal()+"</p>℃<br><br>温度",r.washTemp=l.getVal(),nwBuffer='{"opt":["washTemp"],"p":['+Number(r.washTemp)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),d(r.washMode,r.washTemp)):(l.setVal(Math.abs(r.washTemp)),IsDebug?console.log("此时不可修改"):(console.log("此时不可修改"),navigator.PluginInterface.showToast("此时不可修改",0)))},wheels:[[{label:"Second wheel",data:u}]]});I.hide(),$("#pop_washText2").bind("click",function(e){S=!S,S?I.show(!1,!0):I.hide(!1,!1)});var j=!1,O=mobiscroll.scroller("#scroller3",{theme:"mobiscroll",showLabel:!1,display:"inline",showOnFocus:!0,rows:3,height:30,closeOnOverlayTap:!1,onInit:function(e,a){a.setVal(f),$("#pop_washText3")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>"+f+"</p>次<br><br>漂洗"},onChange:function(a,l){r.potch>0?(p=Date.now(),$("#pop_washText3")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>"+l.getVal()+"</p>次<br><br>漂洗",r.potch=l.getVal(),nwBuffer='{"opt":["potch"],"p":['+Number(r.potch)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer)):(l.setVal(Math.abs(r.potch)),IsDebug?console.log("此时不可修改"):(console.log("此时不可修改"),navigator.PluginInterface.showToast("此时不可修改",0)))},wheels:[[{label:"Second wheel",data:w}]]});O.hide(),$("#pop_washText3").bind("click",function(e){9!=r.washMode&&(j=!j,e.preventDefault(),j?O.show(!1,!0):O.hide(!1,!1))});var V=!1,C=mobiscroll.scroller("#scroller4",{theme:"mobiscroll",showLabel:!1,display:"inline",rows:3,height:30,closeOnOverlayTap:!1,onInit:function(e,a){a.setVal(c),$("#pop_washText4")[0].innerHTML=1==c?"<p style='font-size: 1.5rem;display:inline'>0</p>转<br><br>转速":"<p style='font-size: 1.5rem;display:inline'>"+c+"</p>转<br><br>转速"},onChange:function(a,l){r.speed>0?(p=Date.now(),1==l.getVal()?$("#pop_washText4")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>0</p>转<br><br>转速":$("#pop_washText4")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>"+l.getVal()+"</p>转<br><br>转速",r.speed=l.getVal(),nwBuffer='{"opt":["speed"],"p":['+Number(r.speed)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer)):(l.setVal(Math.abs(r.speed)),IsDebug?console.log("此时不可修改"):(console.log("此时不可修改"),navigator.PluginInterface.showToast("此时不可修改",0)))},onBeforeShow:function(e,a){0==V&&a.hide(!1,!1)},wheels:[[{label:"Second wheel",data:y}]]});C.hide(),$("#pop_washText4").bind("click",function(e){V=!V,e.preventDefault(),V?C.show(!1,!0):C.hide(!1,!1)});var x=!1,R=mobiscroll.scroller("#scroller5",{theme:"mobiscroll",showLabel:!1,display:"inline",rows:3,height:30,closeOnOverlayTap:!1,onInit:function(e,a){a.setVal(_),$("#pop_washText5")[0].innerHTML=g[_-1].display+"<br><br>烘干模式"},onChange:function(a,l){if(r.dryMode>0)if(p=Date.now(),$("#pop_washText5")[0].innerHTML=g[l.getVal()-1].display+"<br><br>烘干模式",1==l.getVal()){r.dryMode=2,nwBuffer='{"opt":["dryMode"],"p":['+Number(r.dryMode)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),n=!1,$("#pop_washText6").css({color:"#666666"});var s={id:"adv_dry1"};uiMethodObj.srv_btn(s,-1)}else if(2==l.getVal()){r.dryMode=3,nwBuffer='{"opt":["dryMode"],"p":['+Number(r.dryMode)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),n=!1,$("#pop_washText6").css({color:"#666666"});var s={id:"adv_dry2"};uiMethodObj.srv_btn(s,-1)}else{r.dryMode=60,nwBuffer='{"opt":["dryMode"],"p":['+Number(r.dryMode)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),n=!0,console.log("选中了定时，默认发一个30min的定时"),$("#pop_washText6").css({color:"#ffffff"});var s={id:"adv_dry1"};uiMethodObj.srv_btn(s,-1)}else 2==Math.abs(r.dryMode)||3==Math.abs(r.dryMode)?l.setVal(Math.abs(r.dryMode)-1):1==Math.abs(r.dryMode)||l.setVal(3),IsDebug?console.log("此时不可修改"):(console.log("此时不可修改"),navigator.PluginInterface.showToast("此时不可修改",0));uiMethodObj.srv_renew(r)},onBeforeShow:function(e,a){0==x&&a.hide(!1,!1)},wheels:[[{label:"Second wheel",data:g}]]});R.hide(),$("#pop_washText5").bind("click",function(e){x=!x,e.preventDefault(),x?R.show(!1,!0):R.hide(!1,!1)});var L=!1,F=mobiscroll.scroller("#scroller6",{theme:"mobiscroll",showLabel:!1,display:"inline",rows:3,height:30,closeOnOverlayTap:!1,onInit:function(e,a){a.setVal(m),$("#pop_washText6")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>"+T[m-1].display+"</p><br><br>烘干时长"},onChange:function(a,l){p=Date.now(),$("#pop_washText6")[0].innerHTML="<p style='font-size: 1.5rem;display:inline'>"+T[l.getVal()-1].display+"</p><br><br>烘干时长",r.dryMode=30*l.getVal()+30,nwBuffer='{"opt":["dryMode"],"p":['+Number(r.dryMode)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer)},onBeforeShow:function(e,a){0==L&&a.hide(!1,!1)},wheels:[[{label:"Second wheel",data:T}]]});F.hide(),$("#pop_washText6").bind("click",function(e){n&&(L=!L,e.preventDefault(),L?F.show(!1,!0):F.hide(!1,!1))});var N=new rollWidget({containerID:"container_temp",renderTo:"carousel_temp",scale:.35,fontColor:"#ffffff",focusColor:"f4f4f4",onChange:function(d){t(),r.washMode!=d+1&&(p=Date.now(),r.washMode=d+1,l(r,1),nwBuffer='{"opt":["washMode"],"p":['+Number(r.washMode)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),a(),s(r.washMode,r.creaseRes,r.dryMode,1),o(r.washMode,r.nightWash,r.creaseRes,1),uiMethodObj.srv_renew(r))}});this.init_storage=function(e){W()||(r=$.extend(!0,{},e),l(r,0),a(),s(r.washMode,r.creaseRes,r.dryMode,0),o(r.washMode,r.nightWash,r.creaseRes,0),N.setValue(r.washMode-1),uiMethodObj.srv_renew(r))},this.getCenterParam=function(){return r},this.mode_click=function(d){p=Date.now();var i=d.id.split("_")[2];console.log("点击的位置是："+d.id.split("_")[1]+",实际的模式是："+i),r.washMode=parseInt(i),l(r,1),a(),s(r.washMode,r.creaseRes,r.dryMode,1),o(r.washMode,r.nightWash,r.creaseRes,1),N.setValue(r.washMode-1),nwBuffer='{"opt":["washMode"],"p":['+Number(i)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_renew(r)},this.preWash_click=function(a){console.log("预洗"),r.preWash>0?(p=Date.now(),1==r.preWash?r.preWash=2:r.preWash=1,nwBuffer='{"opt":["preWash"],"p":['+Number(r.preWash)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.preWash)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0))},this.creaseRes_click=function(a){console.log("防皱"),r.creaseRes>0&&Math.abs(r.dryMode)<2?(p=Date.now(),1==r.creaseRes?r.creaseRes=2:r.creaseRes=1,nwBuffer='{"opt":["creaseRes"],"p":['+Number(r.creaseRes)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),s(r.washMode,r.creaseRes,r.dryMode,1),o(r.washMode,r.nightWash,r.creaseRes,1),uiMethodObj.srv_btn(a,r.creaseRes)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0))},this.highWater_click=function(a){console.log("高水位"),r.highWater>0?(p=Date.now(),1==r.highWater?r.highWater=2:r.highWater=1,nwBuffer='{"opt":["highWater"],"p":['+Number(r.highWater)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.highWater)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0))},this.energySave_click=function(a){console.log("节能ECO"),r.energySave>0?(p=Date.now(),1==r.energySave?r.energySave=2:r.energySave=1,nwBuffer='{"opt":["energySave"],"p":['+Number(r.energySave)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.energySave)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0))},this.childLock_click=function(a){console.log("童锁"),r.childLock>0?(p=Date.now(),1==r.childLock?r.childLock=2:r.childLock=1,nwBuffer='{"opt":["childLock"],"p":['+Number(r.childLock)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.childLock)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0))},this.quiet_click=function(a){console.log("静音"),r.quiet>0?(p=Date.now(),1==r.quiet?r.quiet=2:r.quiet=1,nwBuffer='{"opt":["quiet"],"p":['+Number(r.quiet)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.quiet)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0))},this.noDrain_click=function(a){console.log("免排水"),r.noDrain>0&&Math.abs(r.dryMode)<2?(p=Date.now(),1==r.noDrain?r.noDrain=2:r.noDrain=1,nwBuffer='{"opt":["noDrain"],"p":['+Number(r.noDrain)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.noDrain)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0))},this.nightWash_click=function(a){console.log("夜间洗"),r.nightWash>0&&Math.abs(r.dryMode)<2?(p=Date.now(),1==r.nightWash?r.nightWash=2:r.nightWash=1,nwBuffer='{"opt":["nightWash"],"p":['+Number(r.nightWash)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),o(r.washMode,r.nightWash,r.creaseRes,1),uiMethodObj.srv_btn(a,r.nightWash)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0))},this.dryMode1_click=function(a){console.log("标准干"),13!=r.washMode&&14!=r.washMode&&10!=r.washMode?r.dryMode>0&&2!=Math.abs(r.creaseRes)&&2!=Math.abs(r.nightWash)&&2!=Math.abs(r.noDrain)?(p=Date.now(),1==r.dryMode?r.dryMode=2:2==r.dryMode?r.dryMode=1:3==r.dryMode&&(r.dryMode=2),nwBuffer='{"opt":["dryMode"],"p":['+Number(r.dryMode)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),s(r.washMode,r.creaseRes,r.dryMode,1),o(r.washMode,r.nightWash,r.creaseRes,1),uiMethodObj.srv_btn(a,r.dryMode)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0)):10==r.washMode?IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0)):r.dryMode>0?(p=Date.now(),1==r.dryMode||(2==r.dryMode?r.dryMode=60:(r.dryMode,r.dryMode=2)),nwBuffer='{"opt":["dryMode"],"p":['+Number(r.dryMode)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.dryMode),2==r.dryMode||3==r.dryMode?(_=r.dryMode-1,n=!1,$("#pop_washText6").css({color:"#666666"})):1==r.dryMode||(_=3,m=(r.dryMode-30)/30,n=!0,$("#pop_washText6").css({color:"#ffffff"})),R.option({wheels:[[{label:"Second wheel",data:g}]]}),R.setVal(_),x||R.hide(),F.option({wheels:[[{label:"Second wheel",data:T}]]}),F.setVal(m),L||F.hide()):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0)),uiMethodObj.srv_renew(r)},this.dryMode2_click=function(a){console.log("超干"),13!=r.washMode&&14!=r.washMode?r.dryMode>0&&2!=Math.abs(r.creaseRes)&&2!=Math.abs(r.nightWash)&&2!=Math.abs(r.noDrain)?(p=Date.now(),1==r.dryMode?r.dryMode=3:2==r.dryMode?r.dryMode=3:3==r.dryMode&&(r.dryMode=1),nwBuffer='{"opt":["dryMode"],"p":['+Number(r.dryMode)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),s(r.washMode,r.creaseRes,r.dryMode,1),o(r.washMode,r.nightWash,r.creaseRes,1),uiMethodObj.srv_btn(a,r.dryMode)):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0)):r.dryMode>0?(p=Date.now(),1==r.dryMode?r.dryMode=3:2==r.dryMode?r.dryMode=3:3==r.dryMode?r.dryMode=60:r.dryMode=3,nwBuffer='{"opt":["dryMode"],"p":['+Number(r.dryMode)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.dryMode),2==r.dryMode||3==r.dryMode?(_=r.dryMode-1,n=!1,$("#pop_washText6").css({color:"#666666"})):1==r.dryMode||(_=3,m=(r.dryMode-30)/30,n=!0,$("#pop_washText6").css({color:"#ffffff"})),R.option({wheels:[[{label:"Second wheel",data:g}]]}),R.setVal(_),x||R.hide(),F.option({wheels:[[{label:"Second wheel",data:T}]]}),F.setVal(m),L||F.hide()):IsDebug?console.log("该功能在此模式下不可用"):(console.log("该功能在此模式下不可用"),navigator.PluginInterface.showToast("该功能在此模式下不可用",0)),uiMethodObj.srv_renew(r)},this.powerOffBack_click=function(e){p=Date.now(),uiMethodObj.srv_btn(e,"")},this.powerOffOpen_click=function(a){p=Date.now(),r.power=1,nwBuffer='{"opt":["power"],"p":['+Number(r.power)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.power)},this.errorBack_click=function(e){uiMethodObj.srv_btn(e,"")},this.runBack_click=function(e){2==Math.abs(r.runState)?uiMethodObj.srv_btn(e,"1"):uiMethodObj.srv_btn(e,"0")},this.runPower_click=function(a){6==r.stage?IsDebug?console.log("吹余热过程"):(console.log("吹余热过程"),navigator.PluginInterface.showToast("吹余热过程中，请稍等",0)):(p=Date.now(),r.power=0,nwBuffer='{"opt":["power"],"p":['+Number(r.power)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.power))},this.runPause_click=function(a){r.runState>0?(p=Date.now(),1==r.runState?r.runState=2:2==r.runState&&(r.runState=1),nwBuffer='{"opt":["runState"],"p":['+Number(r.runState)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.runState)):2==Math.abs(r.childLock)?IsDebug?console.log("请先关闭童锁"):(console.log("请先关闭童锁"),navigator.PluginInterface.showToast("请先关闭童锁",0)):IsDebug?console.log("当前状态不能控制启动暂停"):(console.log("当前状态不能控制启动暂停"),navigator.PluginInterface.showToast("当前状态不能控制启动暂停",0))},this.mainBack_click=function(e){uiMethodObj.srv_btn(e,"")},this.mainPower_click=function(a){
g_functype==FuncType.Mode_Control&&(p=Date.now(),r.power=0,nwBuffer='{"opt":["power"],"p":['+Number(r.power)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.power))},this.mainStart_click=function(a){r.runState>0?(p=Date.now(),1==r.runState?r.runState=2:2==r.runState&&(r.runState=1),nwBuffer='{"opt":["runState"],"p":['+Number(r.runState)+'],"t":"cmd"}',g_functype==FuncType.Mode_Control&&e(nwBuffer),uiMethodObj.srv_btn(a,r.runState)):2==Math.abs(r.childLock)?IsDebug?console.log("请先关闭童锁"):(console.log("请先关闭童锁"),navigator.PluginInterface.showToast("请先关闭童锁",0)):IsDebug?console.log("当前状态不能开始"):(console.log("当前状态不能开始"),navigator.PluginInterface.showToast("当前状态不能开始",0))},$("body").bind("click",function(e){console.log("点击了body"),k&&"pop_washText1"!=e.target.id&&(k=!k,B.hide()),S&&"pop_washText2"!=e.target.id&&(S=!S,I.hide()),j&&"pop_washText3"!=e.target.id&&(j=!j,O.hide()),V&&"pop_washText4"!=e.target.id&&(V=!V,C.hide()),x&&"pop_washText5"!=e.target.id&&(x=!x,R.hide()),L&&"pop_washText6"!=e.target.id&&(L=!L,F.hide())}),document.execCommand("BackgroundImageCache",!1,!0)}