data A;
input years;
datalines;
4
3
6
3
9
run;

data B;
set A;
if years > 5 then
do;
months = years * 12;
put years= months=;
end;
else yearslft = 5 - years;
run;