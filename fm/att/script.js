var minAmb=document.getElementById("minAmb"),midAmb=document.getElementById("midAmb"),maxAmb=document.getElementById("maxAmb"),minLoy=document.getElementById("minLoy"),midLoy=document.getElementById("midLoy"),maxLoy=document.getElementById("maxLoy"),minPre=document.getElementById("minPre"),midPre=document.getElementById("midPre"),maxPre=document.getElementById("maxPre"),minPro=document.getElementById("minPro"),midPro=document.getElementById("midPro"),maxPro=document.getElementById("maxPro"),minSpo=
document.getElementById("minSpo"),midSpo=document.getElementById("midSpo"),maxSpo=document.getElementById("maxSpo"),minTem=document.getElementById("minTem"),midTem=document.getElementById("midTem"),maxTem=document.getElementById("maxTem"),minCon=document.getElementById("minCon"),midCon=document.getElementById("midCon"),maxCon=document.getElementById("maxCon"),personality=document.getElementById("personality"),media=document.getElementById("media"),det=document.getElementById("det"),newgenyes=document.getElementById("newgenyes"),
newgenno=document.getElementById("newgenno");
function workMagic(){console.log("we workin' here");resetAtt();newgenyes.checked?(addRegenOnly(),"modelCitizen"===personality.value?(minPro.innerHTML=18,minPre.innerHTML=18,minAmb.innerHTML=18,minLoy.innerHTML=18,minSpo.innerHTML=18,minTem.innerHTML=18):"modelPro"===personality.value?(midPro.innerHTML=20,minTem.innerHTML=10):"pro"===personality.value?(minPro.innerHTML=18,maxPro.innerHTML=19,minTem.innerHTML=10):"perf"===personality.value?(minPro.innerHTML=18,minAmb.innerHTML=18,maxTem.innerHTML=9):
"temperamental"===personality.value?(maxTem.innerHTML=4,maxPro.innerHTML=10):"driven"===personality.value?minAmb.innerHTML=10:"determined"===personality.value?minAmb.innerHTML=10:"slack"===personality.value?(midPro.innerHTML=1,minTem.innerHTML=5):"casual"===personality.value?(minPro.innerHTML=2,maxPro.innerHTML=4,minTem.innerHTML=5):"veryAmbitious"===personality.value?(midAmb.innerHTML=20,maxLoy.innerHTML=9,9>=det.value&&5>minPro.innerHTML&&(minPro.innerHTML=5)):"ambitious"===personality.value?(minAmb.innerHTML=
16,maxAmb.innerHTML=19,maxLoy.innerHTML=9,9>=det.value&&5>minPro.innerHTML&&(minPro.innerHTML=5)):"unambitious"===personality.value?(maxAmb.innerHTML=5,minLoy.innerHTML=11,9>=det.value&&5>minPro.innerHTML&&(minPro.innerHTML=5)):"honest"===personality.value?(midSpo.innerHTML=20,minPro.innerHTML=5):"sporting"===personality.value?(minSpo.innerHTML=18,minPro.innerHTML=5):"easilyDiscouraged"===personality.value?(maxAmb.innerHTML=9,maxSpo.innerHTML=17,minPro.innerHTML=5):"lowDetermination"===personality.value?
(maxAmb.innerHTML=9,maxSpo.innerHTML=17,minPro.innerHTML=5):"unsporting"===personality.value?(midSpo.innerHTML=1,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"realist"===personality.value?(minSpo.innerHTML=2,maxSpo.innerHTML=4,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"veryLoyal"===personality.value?(midLoy.innerHTML=20,minAmb.innerHTML=6,maxAmb.innerHTML=7,9>=det.value&&5>minPro.innerHTML&&(minPro.innerHTML=5),11<=det.value&&5>minSpo.innerHTML&&(minSpo.innerHTML=5)):"loyal"===
personality.value?(minLoy.innerHTML=18,maxLoy.innerHTML=19,minAmb.innerHTML=6,maxAmb.innerHTML=7,9>=det.value&&5>minPro.innerHTML&&(minPro.innerHTML=5),11<=det.value&&5>minSpo.innerHTML&&(minSpo.innerHTML=5)):"ironWilled"===personality.value?(midPre.innerHTML=20,minSpo.innerHTML=5,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"resilient"===personality.value?(minPre.innerHTML=17,maxPre.innerHTML=19,minSpo.innerHTML=5,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"spineless"===
personality.value?(midPre.innerHTML=1,minPro.innerHTML=5,minSpo.innerHTML=1,maxSpo.innerHTML=17,5>=det.value&&10>minAmb.innerHTML&&(minAmb.innerHTML=10)):"lowSelfBelief"===personality.value?(minPre.innerHTML=2,maxPre.innerHTML=3,minPro.innerHTML=5,maxSpo.innerHTML=17,5>=det.value&&10>minAmb.innerHTML&&(minAmb.innerHTML=10)):"lightHearted"===personality.value?(minPre.innerHTML=15,minSpo.innerHTML=15,minTem.innerHTML=10,maxPro.innerHTML=17,5>=det.value&&10>minAmb.innerHTML&&(minAmb.innerHTML=10),9>=
det.value&&(5>minPro.innerHTML&&(minPro.innerHTML=5),17<maxSpo.innerHTML&&(maxSpo.innerHTML=17)),15<=det.value&&(15>minPre.innerHTML&&(minPre.innerHTML=15),16<maxPre.innerHTML&&(maxPre.innerHTML=16)),18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"spirited"===personality.value?(minPre.innerHTML=15,minTem.innerHTML=10,minPro.innerHTML=11,maxPro.innerHTML=17,maxSpo.innerHTML=14,5>=det.value&&10>minAmb.innerHTML&&(minAmb.innerHTML=10),9>=det.value&&17<maxSpo.innerHTML&&(maxSpo.innerHTML=17),
11<=det.value&&5>minSpo.innerHTML&&(minSpo.innerHTML=5),15<=det.value&&(15>minPre.innerHTML&&(minPre.innerHTML=15),16<maxPre.innerHTML&&(maxPre.innerHTML=16)),18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"jovial"===personality.value?(minPre.innerHTML=15,minTem.innerHTML=10,maxPro.innerHTML=10,maxSpo.innerHTML=14,5>=det.value&&10>minAmb.innerHTML&&(minAmb.innerHTML=10),9>=det.value&&(9<maxPro.innerHTML&&(maxPro.innerHTML=9),17<maxSpo.innerHTML&&(maxSpo.innerHTML=17)),11<=det.value&&5>minSpo.innerHTML&&
(minSpo.innerHTML=5),15<=det.value&&(15>minPre.innerHTML&&(minPre.innerHTML=15),16<maxPre.innerHTML&&(maxPre.innerHTML=16)),18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"resolute"===personality.value?(minPro.innerHTML=15,minSpo.innerHTML=5,maxPre.innerHTML=16,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"fairlyPro"===personality.value?(minPro.innerHTML=15,5>=det.value&&10>minAmb.innerHTML&&(minAmb.innerHTML=10),9>=det.value&&(4>minPre.innerHTML&&(minPre.innerHTML=4),17<maxSpo.innerHTML&&
(maxSpo.innerHTML=17)),11<=det.value&&5>minSpo.innerHTML&&(minSpo.innerHTML=5)):"fairlyDetermined"===personality.value?(maxPre.innerHTML=14,minSpo.innerHTML=5,maxPre.innerHTML=16,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"fairlyAmbitious"===personality.value?(minAmb.innerHTML=15,maxPre.innerHTML=14,9>=det.value&&(5>minPro.innerHTML&&(minPro.innerHTML=5),4>minPre.innerHTML&&(minPre.innerHTML=4),17<maxSpo.innerHTML&&(maxSpo.innerHTML=17)),11<=det.value&&5>minSpo.innerHTML&&(minSpo.innerHTML=
5)):"fairlyLoyal"===personality.value?(minLoy.innerHTML=15,maxPro.innerHTML=14,minAmb.innerHTML=6,maxAmb.innerHTML=14,5>=det.value&&10>minAmb.innerHTML&&(minAmb.innerHTML=10),9>=det.value&&(5>minPro.innerHTML&&(minPro.innerHTML=5),4>minPre.innerHTML&&(minPre.innerHTML=4),17<maxSpo.innerHTML&&(maxSpo.innerHTML=17)),11<=det.value&&5>minSpo.innerHTML&&(minSpo.innerHTML=5)):"fairlySporting"===personality.value?(minSpo.innerHTML=15,maxPro.innerHTML=14,maxAmb.innerHTML=14,maxLoy.innerHTML=14,5>=det.value&&
10>minAmb.innerHTML&&(minAmb.innerHTML=10),9>=det.value&&(5>minPro.innerHTML&&(minPro.innerHTML=5),4>minPre.innerHTML&&(minPre.innerHTML=4),17<maxSpo.innerHTML&&(maxSpo.innerHTML=17))):"balanced"===personality.value&&(maxPro.innerHTML=14,maxAmb.innerHTML=14,maxSpo.innerHTML=14,maxLoy.innerHTML=14,5>=det.value&&10>minAmb.innerHTML&&(minAmb.innerHTML=10),9>=det.value&&(5>minPro.innerHTML&&(minPro.innerHTML=5),4>minPre.innerHTML&&(minPre.innerHTML=4)),11<=det.value&&5>minSpo.innerHTML&&(minSpo.innerHTML=
5))):newgenno.checked&&(removeRegenOnly(),"modelCitizen"===personality.value?(minPro.innerHTML=18,minPre.innerHTML=18,minAmb.innerHTML=18,minLoy.innerHTML=18,minSpo.innerHTML=18,minTem.innerHTML=18):"modelPro"===personality.value?(midPro.innerHTML=20,minTem.innerHTML=10):"pro"===personality.value?(minPro.innerHTML=18,maxPro.innerHTML=19,minTem.innerHTML=10):"perf"===personality.value?(minPro.innerHTML=18,minAmb.innerHTML=18,maxTem.innerHTML=9):"driven"===personality.value?minAmb.innerHTML=10:"determined"===
personality.value?minAmb.innerHTML=10:"veryAmbitious"===personality.value?(midAmb.innerHTML=20,maxLoy.innerHTML=9):"ambitious"===personality.value?(minAmb.innerHTML=16,maxAmb.innerHTML=19,maxLoy.innerHTML=9):"honest"===personality.value?midSpo.innerHTML=20:"sporting"===personality.value?(minSpo.innerHTML=18,maxSpo.innerHTML=19):"veryLoyal"===personality.value?(midLoy.innerHTML=20,minAmb.innerHTML=6,maxAmb.innerHTML=7):"loyal"===personality.value?(minLoy.innerHTML=18,maxLoy.innerHTML=19,minAmb.innerHTML=
6,maxAmb.innerHTML=7):"ironWilled"===personality.value?(midPre.innerHTML=20,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"resilient"===personality.value?(minPre.innerHTML=17,maxPre.innerHTML=19,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"lightHearted"===personality.value?(minPre.innerHTML=15,minSpo.innerHTML=15,minTem.innerHTML=10,maxPro.innerHTML=17,9>=det.value&&17<maxSpo.innerHTML&&(maxSpo.innerHTML=17),15<=det.value&&(15>minPre.innerHTML&&(minPre.innerHTML=15),16<maxPre.innerHTML&&
(maxPre.innerHTML=16)),18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"spirited"===personality.value?(minPre.innerHTML=15,minTem.innerHTML=10,minPro.innerHTML=11,maxPro.innerHTML=17,maxSpo.innerHTML=14,9>=det.value&&17<maxSpo.innerHTML&&(maxSpo.innerHTML=17),15<=det.value&&(15>minPre.innerHTML&&(minPre.innerHTML=15),16<maxPre.innerHTML&&(maxPre.innerHTML=16)),18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"jovial"===personality.value?(minPre.innerHTML=15,minTem.innerHTML=10,maxPro.innerHTML=
10,maxSpo.innerHTML=14,9>=det.value&&17<maxSpo.innerHTML&&(maxSpo.innerHTML=17),15<=det.value&&(15>minPre.innerHTML&&(minPre.innerHTML=15),16<maxPre.innerHTML&&(maxPre.innerHTML=16)),18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"resolute"===personality.value?(minPro.innerHTML=15,maxPre.innerHTML=16,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"fairlyPro"===personality.value?(minPro.innerHTML=15,9>=det.value&&17<maxSpo.innerHTML&&(maxSpo.innerHTML=17)):"fairlyDetermined"===
personality.value?(maxPro.innerHTML=14,maxPre.innerHTML=16,18<=det.value&&9<maxAmb.innerHTML&&(maxAmb.innerHTML=9)):"fairlyAmbitious"===personality.value?(minAmb.innerHTML=15,maxPro.innerHTML=14,9>=det.value&&17<maxSpo.innerHTML&&(maxSpo.innerHTML=17)):"fairlyLoyal"===personality.value?(minLoy.innerHTML=15,maxPro.innerHTML=14,maxAmb.innerHTML=14,9>=det.value&&17<maxSpo.innerHTML&&(maxSpo.innerHTML=17)):"fairlySporting"===personality.value?(minSpo.innerHTML=15,maxPro.innerHTML=14,maxAmb.innerHTML=
14,maxLoy.innerHTML=14,9>=det.value&&17<maxSpo.innerHTML&&(maxSpo.innerHTML=17)):"balanced"===personality.value&&(maxPro.innerHTML=14,maxAmb.innerHTML=14,maxLoy.innerHTML=14,maxSpo.innerHTML=14));"outUnf"===media.value?(15>minPre.innerHTML&&(minPre.innerHTML=15),15>minTem.innerHTML&&(minTem.innerHTML=15),15>minCon.innerHTML&&(minCon.innerHTML=15)):"outStCon"===media.value?(7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),2<maxTem.innerHTML&&(maxTem.innerHTML=2),15>minCon.innerHTML&&(minCon.innerHTML=15)):
"outSt"===media.value?(8>minSpo.innerHTML&&(minSpo.innerHTML=8),2<maxTem.innerHTML&&(maxTem.innerHTML=2),15>minCon.innerHTML&&(minCon.innerHTML=15)):"outVolCon"===media.value?(7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),3>minTem.innerHTML&&(minTem.innerHTML=3),6<maxTem.innerHTML&&(maxTem.innerHTML=6),15>minCon.innerHTML&&(minCon.innerHTML=15)):"outVol"===media.value?(8>minSpo.innerHTML&&(minSpo.innerHTML=8),3>minTem.innerHTML&&(minTem.innerHTML=3),6<maxTem.innerHTML&&(maxTem.innerHTML=6),15>minCon.innerHTML&&
(minCon.innerHTML=15)):"outCon"===media.value?(7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),midTem.innerHTML=7,15>minCon.innerHTML&&(minCon.innerHTML=15)):"out"===media.value?(7>minTem.innerHTML&&(minTem.innerHTML=7),15>minCon.innerHTML&&(minCon.innerHTML=15)):"evaUnf"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=15),15>minPre.innerHTML&&(minPre.innerHTML=15),midTem.innerHTML=15,14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"evaStCon"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=15),15>
minPre.innerHTML&&(minPre.innerHTML=15),7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),2<maxTem.innerHTML&&(maxTem.innerHTML=2),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"evaSt"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=15),15>minPre.innerHTML&&(minPre.innerHTML=15),8>minSpo.innerHTML&&(minSpo.innerHTML=8),2<maxTem.innerHTML&&(maxTem.innerHTML=2),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"evaVolCon"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=15),15>minPre.innerHTML&&(minPre.innerHTML=
15),7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),3>minTem.innerHTML&&(minTem.innerHTML=3),6<maxTem.innerHTML&&(maxTem.innerHTML=6),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"evaVol"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=15),15>minPre.innerHTML&&(minPre.innerHTML=15),8>minSpo.innerHTML&&(minSpo.innerHTML=8),3>minTem.innerHTML&&(minTem.innerHTML=3),6<maxTem.innerHTML&&(maxTem.innerHTML=6),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"evaCon"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=
15),15>minPre.innerHTML&&(minPre.innerHTML=15),7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),midTem.innerHTML=7,14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"evaRes"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=15),15>minPre.innerHTML&&(minPre.innerHTML=15),7>minTem.innerHTML&&(minTem.innerHTML=7),14<maxTem.innerHTML&&(maxTem.innerHTML=14),5<maxCon.innerHTML&&(maxCon.innerHTML=5)):"eva"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=15),15>minPre.innerHTML&&(minPre.innerHTML=15),7>minTem.innerHTML&&
(minTem.innerHTML=7),14<maxTem.innerHTML&&(maxTem.innerHTML=14),6>minCon.innerHTML&&(minCon.innerHTML=6),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"unf"===media.value?(15>minPre.innerHTML&&(minPre.innerHTML=15),11>minLoy.innerHTML&&(minLoy.innerHTML=11),15>minTem.innerHTML&&(minTem.innerHTML=15),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"stCon"===media.value?(13>minPro.innerHTML&&(minPro.innerHTML=13),11>minLoy.innerHTML&&(minLoy.innerHTML=11),7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),2<maxTem.innerHTML&&
(maxTem.innerHTML=2),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"st"===media.value?(11>minLoy.innerHTML&&(minLoy.innerHTML=11),8>minSpo.innerHTML&&(minSpo.innerHTML=8),2<maxTem.innerHTML&&(maxTem.innerHTML=2),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"volCon"===media.value?(13>minPro.innerHTML&&(minPro.innerHTML=13),11>minLoy.innerHTML&&(minLoy.innerHTML=11),7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),3>minTem.innerHTML&&(minTem.innerHTML=3),6<maxTem.innerHTML&&(maxTem.innerHTML=6),14<maxCon.innerHTML&&
(maxCon.innerHTML=14)):"vol"===media.value?(11>minLoy.innerHTML&&(minLoy.innerHTML=11),8>minSpo.innerHTML&&(minSpo.innerHTML=8),3>minTem.innerHTML&&(minTem.innerHTML=3),6<maxTem.innerHTML&&(maxTem.innerHTML=6),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"con"===media.value?(13>minPro.innerHTML&&(minPro.innerHTML=13),11>minLoy.innerHTML&&(minLoy.innerHTML=11),midTem.innerHTML=7,14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"res"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=15),14<maxPre.innerHTML&&
(maxPre.innerHTML=14),11>minLoy.innerHTML&&(minLoy.innerHTML=11),7>minTem.innerHTML&&(minTem.innerHTML=7),5<maxCon.innerHTML&&(maxCon.innerHTML=5)):"lh"===media.value?(11>minLoy.innerHTML&&(minLoy.innerHTML=11),7>minTem.innerHTML&&(minTem.innerHTML=7),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"mfUnf"===media.value?(15>minPre.innerHTML&&(minPre.innerHTML=15),15>minTem.innerHTML&&(minTem.innerHTML=15),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"mfStCon"===media.value?(7<maxSpo.innerHTML&&(maxSpo.innerHTML=
7),2<maxTem.innerHTML&&(maxTem.innerHTML=2),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"mfSt"===media.value?(8>minSpo.innerHTML&&(minSpo.innerHTML=8),2<maxTem.innerHTML&&(maxTem.innerHTML=2),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"mfVolCon"===media.value?(7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),3>minTem.innerHTML&&(minTem.innerHTML=3),6<maxTem.innerHTML&&(maxTem.innerHTML=6),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"mfVol"===media.value?(8>minSpo.innerHTML&&(minSpo.innerHTML=8),3>minTem.innerHTML&&
(minTem.innerHTML=3),6<maxTem.innerHTML&&(maxTem.innerHTML=6),14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"mfCon"===media.value?(7<maxSpo.innerHTML&&(maxSpo.innerHTML=7),midTem.innerHTML=7,14<maxCon.innerHTML&&(maxCon.innerHTML=14)):"mfRes"===media.value?(15>minPro.innerHTML&&(minPro.innerHTML=15),14<maxPre.innerHTML&&(maxPre.innerHTML=14),10<maxLoy.innerHTML&&(maxLoy.innerHTML=10),7>minTem.innerHTML&&(minTem.innerHTML=7),5<maxCon.innerHTML&&(maxCon.innerHTML=5)):"mf"===media.value&&(7>minTem.innerHTML&&
(minTem.innerHTML=7),14<maxCon.innerHTML&&(maxCon.innerHTML=14));fixMidCell();changeColor()}
function resetAtt(){minAmb.innerHTML=1;midAmb.innerHTML="-";maxAmb.innerHTML=20;minLoy.innerHTML=1;midLoy.innerHTML="-";maxLoy.innerHTML=20;minPre.innerHTML=1;midPre.innerHTML="-";maxPre.innerHTML=20;minPro.innerHTML=1;midPro.innerHTML="-";maxPro.innerHTML=20;minSpo.innerHTML=1;midSpo.innerHTML="-";maxSpo.innerHTML=20;minTem.innerHTML=1;midTem.innerHTML="-";maxTem.innerHTML=20;minCon.innerHTML=1;midCon.innerHTML="-";maxCon.innerHTML=20;fadeIn(minAmb);fadeIn(midAmb);fadeIn(maxAmb);fadeIn(minLoy);fadeIn(midLoy);
fadeIn(maxLoy);fadeIn(minPre);fadeIn(midPre);fadeIn(maxPre);fadeIn(minPro);fadeIn(midPro);fadeIn(maxPro);fadeIn(minSpo);fadeIn(midSpo);fadeIn(maxSpo);fadeIn(minTem);fadeIn(midTem);fadeIn(maxTem);fadeIn(minCon);fadeIn(midCon);fadeIn(maxCon)}
function fixMidCell(){20>=midAmb.innerHTML?(midAmb.colSpan="3",minAmb.innerHTML="",minAmb.style.display="none",maxAmb.innerHTML="",maxAmb.style.display="none"):(midAmb.colSpan="1",minAmb.style.display="",maxAmb.style.display="");20>=midLoy.innerHTML?(midLoy.colSpan="3",minLoy.innerHTML="",minLoy.style.display="none",maxLoy.innerHTML="",maxLoy.style.display="none"):(midLoy.colSpan="1",minLoy.style.display="",maxLoy.style.display="");20>=midPre.innerHTML?(midPre.colSpan="3",minPre.innerHTML="",minPre.style.display=
"none",maxPre.innerHTML="",maxPre.style.display="none"):(midPre.colSpan="1",minPre.style.display="",maxPre.style.display="");20>=midPro.innerHTML?(midPro.colSpan="3",minPro.innerHTML="",minPro.style.display="none",maxPro.innerHTML="",maxPro.style.display="none"):(midPro.colSpan="1",minPro.style.display="",maxPro.style.display="");20>=midSpo.innerHTML?(midSpo.colSpan="3",minSpo.innerHTML="",minSpo.style.display="none",maxSpo.innerHTML="",maxSpo.style.display="none"):(midSpo.colSpan="1",minSpo.style.display=
"",maxSpo.style.display="");20>=midTem.innerHTML?(midTem.colSpan="3",minTem.innerHTML="",minTem.style.display="none",maxTem.innerHTML="",maxTem.style.display="none"):(midTem.colSpan="1",minTem.style.display="",maxTem.style.display="");20>=midCon.innerHTML?(midCon.colSpan="3",minCon.innerHTML="",minCon.style.display="none",maxCon.innerHTML="",maxCon.style.display="none"):(midCon.colSpan="1",minCon.style.display="",maxCon.style.display="")}
function changeColor(){if(15<=minAmb.innerHTML||15<=midAmb.innerHTML)minAmb.style.color="rgb(150, 240, 0)",midAmb.style.color="rgb(150, 240, 0)",maxAmb.style.color="rgb(150, 240, 0)";else if(10<=minAmb.innerHTML&&14>=minAmb.innerHTML||10<=midAmb.innerHTML&&14>=midAmb.innerHTML)minAmb.style.color="rgb(150, 240, 100)",midAmb.style.color="rgb(150, 240, 100)",maxAmb.style.color="rgb(150, 240, 100)";else if(5<=minAmb.innerHTML&&9>=minAmb.innerHTML||5<=midAmb.innerHTML&&9>=midAmb.innerHTML)minAmb.style.color=
"rgb(240, 240, 240)",midAmb.style.color="rgb(240, 240, 240)",maxAmb.style.color="rgb(240, 240, 240)";else if(4>=minAmb.innerHTML||4>=midAmb.innerHTML)minAmb.style.color="rgb(170, 170, 210)",midAmb.style.color="rgb(170, 170, 210)",maxAmb.style.color="rgb(170, 170, 210)";if(15<=minLoy.innerHTML||15<=midLoy.innerHTML)minLoy.style.color="rgb(150, 240, 0)",midLoy.style.color="rgb(150, 240, 0)",maxLoy.style.color="rgb(150, 240, 0)";else if(10<=minLoy.innerHTML&&14>=minLoy.innerHTML||10<=midLoy.innerHTML&&
14>=midLoy.innerHTML)minLoy.style.color="rgb(150, 240, 100)",midLoy.style.color="rgb(150, 240, 100)",maxLoy.style.color="rgb(150, 240, 100)";else if(5<=minLoy.innerHTML&&9>=minLoy.innerHTML||5<=midLoy.innerHTML&&9>=midLoy.innerHTML)minLoy.style.color="rgb(240, 240, 240)",midLoy.style.color="rgb(240, 240, 240)",maxLoy.style.color="rgb(240, 240, 240)";else if(4>=minLoy.innerHTML||4>=midLoy.innerHTML)minLoy.style.color="rgb(170, 170, 210)",midLoy.style.color="rgb(170, 170, 210)",maxLoy.style.color="rgb(170, 170, 210)";
if(15<=minPre.innerHTML||15<=midPre.innerHTML)minPre.style.color="rgb(150, 240, 0)",midPre.style.color="rgb(150, 240, 0)",maxPre.style.color="rgb(150, 240, 0)";else if(10<=minPre.innerHTML&&14>=minPre.innerHTML||10<=midPre.innerHTML&&14>=midPre.innerHTML)minPre.style.color="rgb(150, 240, 100)",midPre.style.color="rgb(150, 240, 100)",maxPre.style.color="rgb(150, 240, 100)";else if(5<=minPre.innerHTML&&9>=minPre.innerHTML||5<=midPre.innerHTML&&9>=midPre.innerHTML)minPre.style.color="rgb(240, 240, 240)",
midPre.style.color="rgb(240, 240, 240)",maxPre.style.color="rgb(240, 240, 240)";else if(4>=minPre.innerHTML||4>=midPre.innerHTML)minPre.style.color="rgb(170, 170, 210)",midPre.style.color="rgb(170, 170, 210)",maxPre.style.color="rgb(170, 170, 210)";if(15<=minPro.innerHTML||15<=midPro.innerHTML)minPro.style.color="rgb(150, 240, 0)",midPro.style.color="rgb(150, 240, 0)",maxPro.style.color="rgb(150, 240, 0)";else if(10<=minPro.innerHTML&&14>=minPro.innerHTML||10<=midPro.innerHTML&&14>=midPro.innerHTML)minPro.style.color=
"rgb(150, 240, 100)",midPro.style.color="rgb(150, 240, 100)",maxPro.style.color="rgb(150, 240, 100)";else if(5<=minPro.innerHTML&&9>=minPro.innerHTML||5<=midPro.innerHTML&&9>=midPro.innerHTML)minPro.style.color="rgb(240, 240, 240)",midPro.style.color="rgb(240, 240, 240)",maxPro.style.color="rgb(240, 240, 240)";else if(4>=minPro.innerHTML||4>=midPro.innerHTML)minPro.style.color="rgb(170, 170, 210)",midPro.style.color="rgb(170, 170, 210)",maxPro.style.color="rgb(170, 170, 210)";if(15<=minSpo.innerHTML||
15<=midSpo.innerHTML)minSpo.style.color="rgb(150, 240, 0)",midSpo.style.color="rgb(150, 240, 0)",maxSpo.style.color="rgb(150, 240, 0)";else if(10<=minSpo.innerHTML&&14>=minSpo.innerHTML||10<=midSpo.innerHTML&&14>=midSpo.innerHTML)minSpo.style.color="rgb(150, 240, 100)",midSpo.style.color="rgb(150, 240, 100)",maxSpo.style.color="rgb(150, 240, 100)";else if(5<=minSpo.innerHTML&&9>=minSpo.innerHTML||5<=midSpo.innerHTML&&9>=midSpo.innerHTML)minSpo.style.color="rgb(240, 240, 240)",midSpo.style.color="rgb(240, 240, 240)",
maxSpo.style.color="rgb(240, 240, 240)";else if(4>=minSpo.innerHTML||4>=midSpo.innerHTML)minSpo.style.color="rgb(170, 170, 210)",midSpo.style.color="rgb(170, 170, 210)",maxSpo.style.color="rgb(170, 170, 210)";if(15<=minTem.innerHTML||15<=midTem.innerHTML)minTem.style.color="rgb(150, 240, 0)",midTem.style.color="rgb(150, 240, 0)",maxTem.style.color="rgb(150, 240, 0)";else if(10<=minTem.innerHTML&&14>=minTem.innerHTML||10<=midTem.innerHTML&&14>=midTem.innerHTML)minTem.style.color="rgb(150, 240, 100)",
midTem.style.color="rgb(150, 240, 100)",maxTem.style.color="rgb(150, 240, 100)";else if(5<=minTem.innerHTML&&9>=minTem.innerHTML||5<=midTem.innerHTML&&9>=midTem.innerHTML)minTem.style.color="rgb(240, 240, 240)",midTem.style.color="rgb(240, 240, 240)",maxTem.style.color="rgb(240, 240, 240)";else if(4>=minTem.innerHTML||4>=midTem.innerHTML)minTem.style.color="rgb(170, 170, 210)",midTem.style.color="rgb(170, 170, 210)",maxTem.style.color="rgb(170, 170, 210)";15<=minCon.innerHTML||15<=midCon.innerHTML?
(minCon.style.color="rgb(240, 0, 0)",midCon.style.color="rgb(240, 0, 0)",maxCon.style.color="rgb(240, 0, 0)"):10<=minCon.innerHTML&&14>=minCon.innerHTML||10<=midCon.innerHTML&&14>=midCon.innerHTML?(minCon.style.color="rgb(240, 100, 100)",midCon.style.color="rgb(240, 100, 100)",maxCon.style.color="rgb(240, 100, 100)"):6<=minCon.innerHTML&&9>=minCon.innerHTML||6<=midCon.innerHTML&&9>=midCon.innerHTML?(minCon.style.color="rgb(150, 240, 100)",midCon.style.color="rgb(150, 240, 100)",maxCon.style.color=
"rgb(150, 240, 100)"):5>=maxCon.innerHTML||5>=midCon.innerHTML?(minCon.style.color="rgb(150, 240, 0)",midCon.style.color="rgb(150, 240, 0)",maxCon.style.color="rgb(150, 240, 0)"):4>=minCon.innerHTML&&(minCon.style.color="rgb(170, 170, 210)",midCon.style.color="rgb(170, 170, 210)",maxCon.style.color="rgb(170, 170, 210)")}function addRegenOnly(){for(var b=document.querySelectorAll(".newgenOnly"),a=0;a<b.length;a++)b[a].style.display="block"}
function removeRegenOnly(){for(var b=document.querySelectorAll(".newgenOnly"),a=0;a<b.length;a++)b[a].style.display="none"}
function addMH(){media.length=0;"modelCitizen"===personality.value?(mH("outUnf"),mH("out"),mH("unf"),mH("lh"),mH("mfUnf"),mH("mf")):"modelPro"===personality.value||"pro"===personality.value?(mH("outUnf"),mH("out"),mH("evaUnf"),mH("evaRes"),mH("eva"),mH("unf"),mH("res"),mH("lh"),mH("mfUnf"),mH("mfRes"),mH("mf")):"perf"===personality.value?(mH("outStCon"),mH("outSt"),mH("outVolCon"),mH("outVol"),mH("outCon"),mH("evaStCon"),mH("evaSt"),mH("evaVolCon"),mH("evaVol"),mH("evaCon"),mH("evaRes"),mH("eva"),
mH("stCon"),mH("st"),mH("volCon"),mH("vol"),mH("con"),mH("res"),mH("lh"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol"),mH("mfCon")):"temperamental"===personality.value?(mH("outStCon"),mH("outSt"),mH("outVolCon"),mH("outVol"),mH("st"),mH("vol"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol")):"driven"===personality.value||"determined"===personality.value||"easilyDiscouraged"===personality.value||"lowDetermination"===personality.value||"fairlyPro"===personality.value?(mH("outUnf"),mH("outStCon"),
mH("outSt"),mH("outVolCon"),mH("outVol"),mH("outCon"),mH("out"),mH("evaUnf"),mH("evaStCon"),mH("evaSt"),mH("evaVolCon"),mH("evaVol"),mH("evaCon"),mH("evaRes"),mH("eva"),mH("unf"),mH("stCon"),mH("st"),mH("volCon"),mH("vol"),mH("con"),mH("res"),mH("lh"),mH("mfUnf"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol"),mH("mfCon"),mH("mfRes"),mH("mf")):"slack"===personality.value||"casual"===personality.value?(mH("outVolCon"),mH("outVol"),mH("outCon"),mH("out"),mH("unf"),mH("vol"),mH("lh"),mH("mfVolCon"),
mH("mfVol")):"veryAmbitious"===personality.value||"ambitious"===personality.value?(mH("outUnf"),mH("outStCon"),mH("outSt"),mH("outVolCon"),mH("outVol"),mH("out"),mH("evaUnf"),mH("evaStCon"),mH("evaSt"),mH("evaVolCon"),mH("evaVol"),mH("evaCon"),mH("evaRes"),mH("eva"),mH("mfUnf"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol"),mH("mfCon"),mH("mfRes"),mH("mf")):"unambitious"===personality.value?(mH("outUnf"),mH("outStCon"),mH("outSt"),mH("outVolCon"),mH("outVol"),mH("stCon"),mH("out"),mH("evaUnf"),
mH("evaStCon"),mH("evaSt"),mH("evaVolCon"),mH("evaVol"),mH("evaCon"),mH("evaRes"),mH("eva"),mH("unf"),mH("stCon"),mH("st"),mH("volCon"),mH("vol"),mH("con"),mH("res"),mH("lh"),mH("mfUnf"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol"),mH("mfCon"),mH("mf")):"honest"===personality.value||"sporting"===personality.value?(mH("outUnf"),mH("outSt"),mH("outVol"),mH("out"),mH("evaUnf"),mH("evaSt"),mH("evaVol"),mH("evaRes"),mH("eva"),mH("unf"),mH("st"),mH("vol"),mH("con"),mH("res"),mH("lh"),mH("mfUnf"),
mH("mfSt"),mH("mfVol"),mH("mfRes"),mH("mf")):"unsporting"===personality.value||"realist"===personality.value?(mH("outUnf"),mH("outVolCon"),mH("outCon"),mH("out"),mH("evaUnf"),mH("evaStCon"),mH("evaVolCon"),mH("evaCon"),mH("evaRes"),mH("eva"),mH("unf"),mH("stCon"),mH("volCon"),mH("con"),mH("res"),mH("lh"),mH("mfUnf"),mH("mfStCon"),mH("mfVolCon"),mH("mfCon"),mH("mfRes"),mH("mf")):"veryLoyal"===personality.value||"loyal"===personality.value?(mH("outUnf"),mH("outStCon"),mH("outSt"),mH("outVolCon"),mH("outVol"),
mH("outCon"),mH("out"),mH("evaUnf"),mH("evaStCon"),mH("evaSt"),mH("evaVolCon"),mH("evaVol"),mH("evaCon"),mH("evaRes"),mH("eva"),mH("unf"),mH("stCon"),mH("st"),mH("volCon"),mH("vol"),mH("con"),mH("res"),mH("lh"),mH("mfUnf"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol"),mH("mfCon"),mH("mf")):"ironWilled"===personality.value||"resilient"===personality.value?(mH("outUnf"),mH("outStCon"),mH("outSt"),mH("outVolCon"),mH("outVol"),mH("stCon"),mH("out"),mH("evaUnf"),mH("evaStCon"),mH("evaSt"),mH("evaVolCon"),
mH("evaVol"),mH("evaCon"),mH("evaRes"),mH("eva"),mH("unf"),mH("stCon"),mH("st"),mH("volCon"),mH("vol"),mH("con"),mH("lh"),mH("mfUnf"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol"),mH("mfCon"),mH("mf")):"spineless"===personality.value||"lowSelfBelief"===personality.value?(mH("outStCon"),mH("outSt"),mH("outVolCon"),mH("outVol"),mH("outCon"),mH("out"),mH("stCon"),mH("st"),mH("volCon"),mH("vol"),mH("con"),mH("res"),mH("lh"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol"),mH("mfCon"),mH("mfRes"),
mH("mf")):"lightHearted"===personality.value||"spirited"===personality.value?(mH("outUnf"),mH("out"),mH("evaUnf"),mH("evaRes"),mH("eva"),mH("unf"),mH("lh"),mH("mfUnf"),mH("mf")):"jovial"===personality.value?(mH("outUnf"),mH("out"),mH("unf"),mH("lh"),mH("mfUnf"),mH("mf")):"resolute"===personality.value?newgenyes.checked?(mH("outUnf"),mH("outSt"),mH("outVol"),mH("out"),mH("evaUnf"),mH("evaSt"),mH("evaVol"),mH("evaRes"),mH("eva"),mH("unf"),mH("st"),mH("vol"),mH("con"),mH("res"),mH("lh"),mH("mfUnf"),
mH("mfSt"),mH("mfVol"),mH("mfRes"),mH("mf")):newgenno.checked&&(mH("outStCon"),mH("outSt"),mH("outVolCon"),mH("outVol"),mH("stCon"),mH("out"),mH("evaUnf"),mH("evaStCon"),mH("evaSt"),mH("evaVolCon"),mH("evaVol"),mH("evaCon"),mH("evaRes"),mH("eva"),mH("unf"),mH("stCon"),mH("st"),mH("volCon"),mH("vol"),mH("con"),mH("res"),mH("lh"),mH("mfUnf"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol"),mH("mfCon"),mH("mfRes"),mH("mf")):"fairlyDetermined"===personality.value?(mH("outStCon"),mH("outSt"),mH("outVolCon"),
mH("outVol"),mH("stCon"),mH("out"),mH("unf"),mH("stCon"),mH("st"),mH("volCon"),mH("vol"),mH("con"),mH("lh"),mH("mfUnf"),mH("mfStCon"),mH("mfSt"),mH("mfVolCon"),mH("mfVol"),mH("mfCon"),mH("mf")):"fairlyAmbitious"===personality.value||"fairlyLoyal"===personality.value||"balanced"===personality.value?(mH("outUnf"),mH("outStCon"),mH("outSt"),mH("outVolCon"),mH("outVol"),mH("stCon"),mH("out"),mH("unf"),mH("stCon"),mH("st"),mH("volCon"),mH("vol"),mH("con"),mH("lh"),mH("mfUnf"),mH("mfStCon"),mH("mfSt"),
mH("mfVolCon"),mH("mfVol"),mH("mfCon"),mH("mf")):"fairlySporting"===personality.value&&(mH("outUnf"),mH("outSt"),mH("outVol"),mH("out"),mH("unf"),mH("st"),mH("vol"),mH("con"),mH("lh"),mH("mfUnf"),mH("mfSt"),mH("mfVol"),mH("mf"))}
function mH(b){var a;"outUnf"===b&&(a=new Option("Out, Unf","outUnf"),a.setAttribute("title","Outspoken, Unflapable"),media.appendChild(a));"outStCon"===b&&(a=new Option("Out, ST, Con","outStCon"),a.setAttribute("title","Outspoken, Short Tempered, Confrontational"),media.appendChild(a));"outSt"===b&&(a=new Option("Out, ST","outSt"),a.setAttribute("title","Outspoken, Short Tempered"),media.appendChild(a));"outVolCon"===b&&(a=new Option("Out, Vol, Con","outVolCon"),a.setAttribute("title","Outspoken, Volatile, Confrontational"),
media.appendChild(a));"outVol"===b&&(a=new Option("Out, Vol","outVol"),a.setAttribute("title","Outspoken, Volatile"),media.appendChild(a));"outCon"===b&&(a=new Option("Out, Con","outCon"),a.setAttribute("title","Outspoken, Confrontational"),media.appendChild(a));"out"===b&&(a=new Option("Out","out"),a.setAttribute("title","Outspoken"),media.appendChild(a));"evaUnf"===b&&(a=new Option("Eva, Unf","evaUnf"),a.setAttribute("title","Evasive, Unflapable"),media.appendChild(a));"evaStCon"===b&&(a=new Option("Eva, ST, Con",
"evaStCon"),a.setAttribute("title","Evasive, Short Tempered, Confrontational"),media.appendChild(a));"evaSt"===b&&(a=new Option("Eva, ST","evaSt"),a.setAttribute("title","Evasive, Short Tempered"),media.appendChild(a));"evaVolCon"===b&&(a=new Option("Eva, Vol, Con","evaVolCon"),a.setAttribute("title","Evasive, Volatile, Confrontational"),media.appendChild(a));"evaVol"===b&&(a=new Option("Eva, Vol","evaVol"),a.setAttribute("title","Evasive, Volatile"),media.appendChild(a));"evaCon"===b&&(a=new Option("Eva, Con",
"evaCon"),a.setAttribute("title","Evasive, Confrontational"),media.appendChild(a));"evaRes"===b&&(a=new Option("Eva, Res","evaRes"),a.setAttribute("title","Evasive, Reserved"),media.appendChild(a));"eva"===b&&(a=new Option("Eva","eva"),a.setAttribute("title","Evasive"),media.appendChild(a));""===b&&(a=new Option("Eva, Unf","evaUnf"),a.setAttribute("title","Evasive, Unflapable"),media.appendChild(a));"unf"===b&&(a=new Option("Unf","unf"),a.setAttribute("title","Unflapable"),media.appendChild(a));"stCon"===
b&&(a=new Option("ST, Con","stCon"),a.setAttribute("title","Short Tempered, Confrontational"),media.appendChild(a));"st"===b&&(a=new Option("ST","st"),a.setAttribute("title","Short Tempered"),media.appendChild(a));"volCon"===b&&(a=new Option("Vol, Con","volCon"),a.setAttribute("title","Volatile, Confrontational"),media.appendChild(a));"vol"===b&&(a=new Option("Vol","vol"),a.setAttribute("title","Volatile"),media.appendChild(a));"con"===b&&(a=new Option("Con","con"),a.setAttribute("title","Confrontational"),
media.appendChild(a));"res"===b&&(a=new Option("Res","res"),a.setAttribute("title","Reserved"),media.appendChild(a));"lh"===b&&(a=new Option("LH","lh"),a.setAttribute("title","Level Headed"),media.appendChild(a));"mfUnf"===b&&(a=new Option("MF, Unf","mfUnf"),a.setAttribute("title","Media Friendly, Unflapable"),media.appendChild(a));"mfStCon"===b&&(a=new Option("MF, ST, Con","mfStCon"),a.setAttribute("title","Media Friendly, Short Tempered, Confrontational"),media.appendChild(a));"mfSt"===b&&(a=new Option("MF, ST",
"mfSt"),a.setAttribute("title","Media Friendly, Short Tempered"),media.appendChild(a));"mfVolCon"===b&&(a=new Option("MF, Vol, Con","mfVolCon"),a.setAttribute("title","Media Friendly, Volatile, Confrontational"),media.appendChild(a));"mfVol"===b&&(a=new Option("MF, Vol","mfVol"),a.setAttribute("title","Media Friendly, Volatile"),media.appendChild(a));"mfCon"===b&&(a=new Option("MF, Con","mfCon"),a.setAttribute("title","Media Friendly, Confrontational"),media.appendChild(a));"mfRes"===b&&(a=new Option("MF, Res",
"mfRes"),a.setAttribute("title","Media Friendly, Reserved"),media.appendChild(a));"mf"===b&&(a=new Option("MF","mf"),a.setAttribute("title","Media Friendly"),media.appendChild(a))}function fadeIn(b){b.style.opacity=0;(function d(){var c=parseFloat(b.style.opacity);1<(c+=.1)||(b.style.opacity=c,requestAnimationFrame(d))})()};