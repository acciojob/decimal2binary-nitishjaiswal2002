function decimalToBinary(num) {
  //Write you code here
	let binaryNum=new Array(32);
	let i=0;
	while(n>0){
		binaryNum[i]=n%2;
		n=Math.floor(n/2);
		i++;
	}
	
}

window.decimalToBinary = decimalToBinary;
