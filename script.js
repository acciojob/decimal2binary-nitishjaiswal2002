function decimalToBinary(num) {
  //Write you code here
	let binaryNum=new Array(32);
	let i=0;
	while(num>0){
		binaryNum[i]=num%2;
		n=Math.floor(n/2);
		i++;
	}
	
}

window.decimalToBinary = decimalToBinary;
