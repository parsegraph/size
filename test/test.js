var assert = require("assert");
import todo from "../dist/size";

describe("Package", function () {
  it("works", ()=>{
    assert.equal(todo(), 42);
  });
});
