





const graphQLTestCreation = (state) => {
  // Sample Representation of Test Output: 
  `
  const app = require("../src/server");
  const supertest = require("supertest");
  const { stopDatabase } = require("../src/database");
   
  const request = supertest(app);
   
  afterAll(async () => {
    await stopDatabase();
  });
   
  test("fetch users", async (done) => {
   
    request
      .post("/graphql")
      .send({
        query: "{ users{ id, name} }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.data.users.length).toEqual(3);
        done();
      });
  });`
  
  const serverApp = state.serverApp;
  const expectedRes = state.expectedRes;
  const methodSelect = state.methodSelect;
  const desiredEndpoint = state.desiredEndpoint;
  const inputData = (state.methodSelect === 'POST' || state.methodSelect === 'PUT') ? `${state.inputData}` : '';
  const headerInfo = (state.headerInfo) ? `${state.headerInfo}` : '';
  const outputData = state.outputData;
  const schemaApp = state.schemaApp;
  const URI = state.URI;

  const test =  
  `
  const app = require("${serverApp}");
  const supertest = require("supertest");
  const db = require("${URI}");
   
  const request = supertest(app);
   
  test("${expectedRes}", async (done) => {
   
    request
      .post("/graphql")
      .send(${inputData})
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(${inputData}).toBeInstanceOf(Object);
        expect(${outputData}).toBeInstanceOf(Object);
        done();
      });
  });
  `

  return test;
}

  export default graphQLTestCreation;