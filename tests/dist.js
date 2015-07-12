var expect = chai.expect;

describe('search2vars dist tests', function(){
   
  it('should create an object', function(){
    var vars = search2vars("?id=ba649087-0a4c-48fd-9feb-5bc3f0eaaa9e&name=Peyton");
    expect(vars).to.be.an('object');
  });

  it('should create an empty object', function(){
    var vars = search2vars("");
    expect(vars).to.be.an('object');
  });
  
  it('should create an object', function(){
    var vars = search2vars("?id=ba649087-0a4c-48fd-9feb-5bc3f0eaaa9e&name=Peyton");
    expect(vars.id).to.equal('ba649087-0a4c-48fd-9feb-5bc3f0eaaa9e');
    expect(vars.name).to.equal('Peyton');
  });

});
