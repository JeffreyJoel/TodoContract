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
}

