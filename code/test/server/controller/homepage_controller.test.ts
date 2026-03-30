import {describe, expect, it} from "vitest";
import supertest from "supertest"
import Server from "../../../server/core/server";
describe('homepage controller test suites', () => {

    const apiRoute = '/api';
    const route = '/';

    // tester le code 200 renvoyé par la route
    it("should returns 200 status code", async ()=> {

        //arrange
        // expected: résultat attendu
        const expected = 200;
        // sut: system under test
        const sut = supertest(new Server().startServer());

        // act 
        const response =  await sut.get(`${apiRoute}${route}`);
        const actual = response.status;

        // assert
        expect(actual).toBe(expected);

    });

});














// import {describe, expect, it} from "vitest"


// const sum =(n1: number, n2:number) => n1 + n2;

// // describe permet de regrouper plusieurs tests
// describe("sum test suites", ()=>{

//     //it permet de créer un test
//     it("should returns a sum of two numbers", ()=> {
//         // arrange : organiser
//         // expected est le résultat attendu
//         const expected = 5;
//         const n1 = 2;
//         const n2= 3;

//         // act : agir
//         // actual permet de définir l'obtention du resultat attendu
//         const actual = sum(n1, n2);
        
//         // assert: affirmer
//         expect(actual).toBe(expected);

//     });
// });