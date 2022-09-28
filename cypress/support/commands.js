/// <reference types="Cypress" />

import auth from '../fixtures/auth.json'

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, senha) => {
    cy.visit('login')
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
})

import user from "../fixtures/Usuarios.json"
Cypress.Commands.add("loginAPP", () => {
    cy.request({
        method: 'POST',
        url:'api/auth',
        body:
        {
            email: user[0].email,
            password: user[0].senha
        }
    }).then((response) => {
        cy.setCookie('region', 'BR-SP')
        window.localStorage.setItem('token', response.body.jwt)
    })
})






Cypress.Commands.add("tokenJwt", () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
    }).then((response) => {
        return response.body.jwt
    })
})

Cypress.Commands.add("criarPostagem", (token, value) => {
    cy.request({
        method: 'POST',
        url: '/api/posts',
        headers: {
            Cookie: token
        },
        body: {
            text: value
        }
    })
})


Cypress.Commands.add("criarExperiencia", (token) => {
    cy.request({
        method: 'PUT',
        url: '/api/profile/experience',
        headers: {
            Cookie: token
        },
        body: {
            "title": "Analista de Testes",
            "company": "VIA",
            "location": "São Paulo",
            "from": "2022-09-12",
            "to": "2022-09-12",
            "current": false,
            "description": "Teste"
        }
    })
})