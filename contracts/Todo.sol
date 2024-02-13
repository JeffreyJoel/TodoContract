// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Todo {
    struct toDo {
        string title;
        string description;
        bool completed;
    }
 toDo[] public todoList;

 function createNewTodo(string memory _title, string memory _description) external{
    todoList.push(toDo(_title, _description, false));
 }
 function toggleCompleted(uint _i) external{
    todoList[_i].completed =  !todoList[_i].completed;
 }
  function deleteTodoItem(uint _i) external{
    delete todoList[_i];
 }
   function updateTitle(uint _i, string memory _newTitle) external{
    todoList[_i].title = _newTitle;
 }
 function updateDescription(uint _i, string memory _newDescription) external{
    todoList[_i].title = _newDescription;
 }
}
