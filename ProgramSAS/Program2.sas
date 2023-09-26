DATA weightgain;
INFILE "/home/u63599030/weightgain.csv" DSD MISSOVER FIRSTOBS=2;
INPUT id source$ type$ weightg;
RUN;