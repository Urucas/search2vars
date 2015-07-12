import search2vars from '../lib';
import isPlainObj from 'is-plain-obj';
import faker from 'faker';

describe("searchToVars tests", () => {
  
  it("Test return value is plain object", (done) => {
    let vars = search2vars("?id=com.urucas.wifime&locale=en");
    if(!isPlainObj(vars)) throw new Error("Return value is not an object");
    done();
  });

  it("Test return value is plain object with empty string", (done) => {
    let vars = search2vars("");
    if(!isPlainObj(vars)) throw new Error("Return value is not an object");
    done();
  });
  
  it("Test fake url is giving the correct object", (done) => {
    let fakeId = faker.random.uuid();
    let fakeName = faker.name.firstName();
    let searchStr = "?id="+fakeId+"&name="+fakeName;
    let vars = search2vars(searchStr);
    if(vars.id != fakeId || vars.name != fakeName)
      throw new Error("Error parsing string "+searchStr+" -> "+JSON.stringify(vars));
    done();
  });



});
