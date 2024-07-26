package com.run;

import java.util.Arrays;
import java.util.Comparator;

public class Main {
	String postName;
	String date;
	int viewCount;

	public static void main(String[] args) {
		
		Main [] m = new Main[110];
		for(int i=0;i<110;i++) {
			m[i] = new Main();
			m[i].date =
				Integer.toString(2013+(int)(Math.random()*10))
				+"-"
				+String.format("%02d", (int)(Math.random()*12)+1)
				+"-"
				+String.format("%02d",(int)(Math.random()*31+1));
		}
		Arrays.sort(m,new Comparator<Main>() {

			@Override
			public int compare(Main o1, Main o2) {
					return (o1.date).compareTo(o2.date);
			}
			
		});
		for(int i=0;i<110;i++) {
			m[i].postName = (i+1) + "번째 게시물입니다.";
			m[i].viewCount = (int)(Math.random()*500);
			System.out.println("INSERT INTO tableName VALUES("+
			"tableName_seq.nextval,"+"'"+m[i].postName+"',"
			+"'"+m[i].date+"',"+m[i].viewCount+")"
					);
		}
	}
	
	


}
