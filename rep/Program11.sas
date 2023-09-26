data houseprice;
infile '/home/u63599030/houseprice.txt';
input Type$ price tax;
run;

data newhomes;
infile '/home/u63599030/newhomes (2).txt';
input Type$ price tax;
run;

/* Deixar tudo no mesmo "formato" */
proc sort data=houseprice out=houseprice2;
by descending price;
run;

proc sort data=newhomes out=newhomes2;
by descending price;
run;

data NewCollection;
merge houseprice2 newhomes2;
by descending price;
run;

proc print data=newcollection;
run;