function ProcessOrder(order) {
    let operations = order.split(' ')
    if(operations.length == 0) 
		return -1
    
	let machine = new Machine()
	return machine.process(operations)
}

class Machine {
  constructor() {
    this.stack = []
	this.error = false
  }
  
  push(element) {
    this.stack.push(element)
  }
  
  pop() {
    if (this.isEmpty()) return this.reportError()
    return this.stack.pop()
  }
  
  isEmpty() {
    return !this.stack.length
  }
  
  peek(){
	if(this.isEmpty()) this.reportError() 
	return this.stack[this.stack.length - 1]
  }
  
  duplication(){
	this.push(this.peek())
  }
  
  reportError(){
	this.error = true;
  }
  
  addition() {
	if(this.stack.length < 2) return this.reportError()
	let additionValue = this.stack[this.stack.length - 1] + this.stack[this.stack.length - 2];
	if(additionValue < 0) return this.reportError()
	this.pop()
	this.pop()
	return this.push(additionValue)
  }
  
  subtraction() {
	if(this.stack.length < 2) return this.reportError()
	let subtractionValue = this.stack[this.stack.length - 1] - this.stack[this.stack.length - 2];
	if(subtractionValue < 0) return this.reportError()
	this.pop()
	this.pop()
	return this.push(subtractionValue)
  }
  
  process(operations){
    let self = this
	for(let i = 0; i < operations.length; i++){
		let operation = operations[i]
		if(operation == "POP") {
            self.pop()
        } else if(operation == "DUP") {
            self.duplication()
        } else if(operation == "+") {
            self.addition()
        } else if(operation == "-") {
            self.subtraction()
        } else {
			self.push(parseInt(operation))
        }
		
		if(self.error){
			break;
		}
	}
	
	if(this.error)
		return -1;
    
	return this.peek()
  }
}

console.log(ProcessOrder("3 DUP 5 - -"))//returns -1
console.log(ProcessOrder("13 DUP 4 POP 5 DUP + DUP + -"))//returns 7

