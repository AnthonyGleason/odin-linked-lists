let LinkedList = function(){
    this.list = [];

    //Prototypes are in the order of the assignment

    //Add a new node contained value to the end of the list
    LinkedList.prototype.append = function (value){
        //Create node
        let tempNode = new Node();
        //Store link node to previous node (if there is one)
        if (this.list.length>0){
            this.list[this.list.length-1].nextNode=tempNode;
        }
        tempNode.value=value;
        this.list.push(tempNode);
    };

    //add a new node containing value to the start of the list
    LinkedList.prototype.prepend = function (value){
        //Create Node
        let tempNode = new Node();
        if (this.list.length>0){
            //Store the old first node in tempNode
            tempNode.nextNode=this.head();
        }
        tempNode.value=value;
        this.list.unshift(tempNode);
    };
    //returns total number of nodes in the list
    LinkedList.prototype.size = function (){
        return this.list.length;
    };
    //returns the first node in the list
    LinkedList.prototype.head = function (){
        return this.list[0];
    };
    //returns the last node in the list
    LinkedList.prototype.tail = function (){
        
    };
    //returns the node at given index
    LinkedList.prototype.at = function(index){
       let node=this.head();
       for (let i=0;i<=index;i++){
            if (i==index){
                return node;
            }
            node=node.nextNode;
       };
    };
    //removes the last element from the list
    LinkedList.prototype.pop = function (){
        let node=this.head();
        while (node!=null){
            //Check to see if the next node is the last in the list
            if (node.nextNode.nextNode==null){
                node.nextNode=null;
            };
            node=node.nextNode;
        }
    };
    //returns true if the passed in value is in the list otherwise returns false
    LinkedList.prototype.contains = function (value){
        let node=this.head();
        //Recursive loop
        while (node.nextNode!=null){
            if (node.value==value){
                return true;
            }else{
                //Get the next linked node from the list
                node=node.nextNode;
            };
        };
        return false;
    };
    //returns the index of the node containing value. returns null if the value is not found
    LinkedList.prototype.find = function (value){
        let node=this.head();

        for (let i=0;listEnd==false;i++){
            if (node.value==value){
                return i;
            }else{
                //Get the next linked node from the list
                node = node.nextNode;
                //If the next nodes value is null the list has ended
                if (node==null){
                    return null;
                };
            };
        };
    };

    //Represent the linked objects as strings
    LinkedList.prototype.toString = function (){
        let node=this.head();
        let stringArray=[];
        while (node.nextNode!=null){
            stringArray.push(node.value);
            node=node.nextNode;
        }
        //push null to the stringArray
        stringArray.push(null);
        stringArray.join(' -> ');

    };
    //Inserts a new node with the provided value at index
    LinkedList.prototype.insertAt = function (value, index){
        let node=this.head();
        let tempNode = new Node();
        tempNode.value=value;
        //Add the new node to the list
        this.list.push(tempNode);
        for (let i=0;i<=index;i++){
            if (i==index-1){
                //old node at index becomes the next node of tempNode
                tempNode.nextNode=node.nextNode;
                //current node.nextNode is the temp node
                node.nextNode=tempNode;
            }else{
                node=node.nextNode;
            } 
        }
    };
    //Removes the node at given index
    LinkedList.prototype.removeAt = function (index){
        let node=this.head();
        for (let i=0;i<=index;i++){
            if (i==index-1){
                node.nextNode=node.nextNode.nextNode;
            }else{
                node=node.nextNode;
            }
        };
    };
};

let Node = function (){
    this.value = null;
    this.nextNode = null;
};