function decimalToBinary(num) {
  //Write you code here
	var b_number =0;
	var cnt=0;
	while(num!=0){
		var rem=num%2;
		var c =Math.pow(10, cnt);
		b_number +=rem*c;
		n=parseInt(num/2);
		cnt++;
	}
	return b_number;
	
}

window.decimalToBinary = decimalToBinary;
