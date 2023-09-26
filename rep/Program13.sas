data newhomes;
input x$ y z;
cards;
Duplex 150000 0.15
Duplex 160000 0.18
Duplex 180000 0.15
;
run;

data cleannewhomes;
set newhomes;
rename x=Type y=price z=tax;
run;

data cleannewhomes;
set cleannewhomes;
label type='Type of home' price='Price of home' tax='Tax of home';
run;

proc freq data=cleannewhomes;
table Type price tax;
run;