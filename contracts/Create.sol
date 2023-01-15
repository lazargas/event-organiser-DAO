//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.0 <0.9.0;
 
contract Create {
 struct Event{
   address organizer;
   string name;
   string date; //0 1 2
   uint price;
   uint ticketCount;  //1 sec  0.5 sec
   uint ticketRemain;
 }
 
 mapping(uint=>Event) public events;
 mapping(address=>mapping(uint=>uint)) public tickets;
 uint public nextId;
 
 
 function createEvent(string memory name,string memory date,uint price,uint ticketCount) external{
   
   require(ticketCount>0,"You can organize event only if you create more than 0 tickets");
 
   events[nextId] = Event(msg.sender,name,date,price,ticketCount,ticketCount);
   nextId++;
 }

 function getEvent(uint _id) public view returns(Event memory){
  return events[_id];
 }
 
function buyTicket(uint id,uint quantity) external payable{
  
   Event storage _event = events[id];
   require(msg.value==(_event.price*quantity),"Ethere is not enough");
   require(_event.ticketRemain>=quantity,"Not enough tickets");
   _event.ticketRemain-=quantity;
   tickets[msg.sender][id]+=quantity;
 
 }
function transferTicket(uint id,uint quantity,address to) external{
   
   require(tickets[msg.sender][id]>=quantity,"You do not have enough tickets");
   tickets[msg.sender][id]-=quantity;
   tickets[to][id]+=quantity;
 }
}
