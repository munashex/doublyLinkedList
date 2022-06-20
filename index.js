class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
  }
  
  
  class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
  
    pop() {
      if(!this.head) return null 
      let poppedNode = this.tail 
      if(this.length === 1) {
          this.head = null 
          this.tail = null
      }else {
       this.tail = poppedNode.prev 
       this.tail.next = null 
       poppedNode.prev = null
      }
      this.length-- 
      return poppedNode
  }
      
 shift() {
   let newHead = this.head  

   if(!this.head) return null 

   if(this.length === 1){
     this.head = null
     this.tail = null
   }else {
     this.head = newHead.next 
     this.head.prev = null 
     newHead.next = null
   }
   this.length-- 
   return newHead
 }
  
  }
  
  
  let list = new DoublyLinkedList() 
  list.push("munashe") 
  list.push("madhuna")
  list.push("shmurda")
  list.pop()
  console.log(list)
