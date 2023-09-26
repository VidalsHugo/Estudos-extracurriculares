data sixvar;
infile '/home/u63599030/6var (2).txt';
input var_1-var_6;
run;

data recodearray;
set sixvar;
array recodearr(6) var_1-var_6;
do i=1 to 6;
if  recodearr(i) < 40 then recodearr(i)=.;
end;
run;

proc print data=recodearray;
var var_1-var_6;
run;