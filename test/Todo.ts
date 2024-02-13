import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Todo", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployTodoFixture() {
    // Contracts are deployed using the first signer/account by default
    // const [owner, otherAccount] = await ethers.getSigners();

    const Todo = await ethers.getContractFactory("Todo");
    const toDo = await Todo.deploy();

    return { toDo };
  }

  describe("Create and check todo item", function () {
    it("Should create and check the value of a todo item", async function () {
      const { toDo } = await loadFixture(deployTodoFixture);
      const addToList = await toDo.createNewTodo("wash", "Sample Description");
      // const updateTitle = await toDo.updateTitle(0, "wash");
      // const updateDescription = await toDo.updateDescription(1, "Some description");

      expect((await toDo.todoList(0)).title).to.equal("wash");
      // expect(await updateTitle).to.equal(1, "Some description");
    });
  });
});