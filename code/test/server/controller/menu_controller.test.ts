import * as jose from "jose";
import supertest from "supertest";
import { describe, expect, it } from "vitest";
import type { Menu } from "../../../models/menu";
import type { User } from "../../../models/user";
import Server from "../../../server/core/server";

describe("menu controller test suites", async () => {
    // configuration
    const apiRoute = "/api";
    const route = "/menu";

    // utilisateur de type admin
    const admin: User = {
        id: 1,
        email: "admin@admin.fr",
        password:
            "$argon2i$v=19$m=16,t=2,p=1$NklwQXd3T1ZkQUw4TVRLcQ$QYNmDEPlLoPBJTZdBasuTg",
        role_id: 1,
        role: {
            id: 1,
            name: "admin",
        },
    };

    // token JWT
    const secret = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);
    const alg = "HS256";
    const token = await new jose.SignJWT(admin as User)
        .setProtectedHeader({ alg })
        .setExpirationTime("10h")
        .sign(secret);

    // fake data : fausses données
    const data: Partial<Menu> = {
        id: 1,
        name: `name - ${Math.random()}`,
        price: 10,
        orderable_ids: "1,2,3",
    };

    // tester le code 201 renvoyé par la réponse
    it("should returns a 201 status code when a record is inserted", async () => {
        // arrange
        const expected = 201;
        const sut = supertest(new Server().startServer());

        // act
        /*
        enovoyer des donnés dans body:
            si une image est présente:
            utiliser la methode field pour chaque champ
            utiliser la méthode attach  pour transférer une image
        si une image n'est pas présente: utiliser la méthod send
        */

        const response = await sut
        .post(`${apiRoute}${route}`)
        // token JWT
        .auth(token, {type:"bearer"})
        .send(data)

        const actual = response.status;

        // assert
        expect(actual).toBe(expected);
    });
});