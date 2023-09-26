DATA sales;
INPUT Name$ Sales_1-Sales_4;
total=Sales_1+Sales_2+Sales_3+Sales_4;
Fired='';
performance='';
IF total<=50 then performance='L';
else if total <=100 then performance='M';
else performance='H';
if total <=40 then Fired='Y';
else fired='N';
CARDS;
Greg 10 2 40 0
Jhon 15 5 10 100
Lisa 50 10 15 50
Mark 20 0 5 20
;
RUN;