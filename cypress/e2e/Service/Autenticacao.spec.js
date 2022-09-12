/// <reference types="cypress" />

import auth from '../../fixtures/auth.json'

it('[POST] - Teste de Autenticação', () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
    }).then((response) => {
       
        expect(response.status).to.eq(200)
        expect(response.body).to.not.empty
        expect(response.body).to.have.property("jwt")
        cy.getCookies('conexaoqa.herokuapp.com').should('exist')

    })

});


it('[POST] - Teste de Autenticação com usuário inválido', () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        failOnStatusCode: false,
        body: {

            "email": "rodrigo555@tostes.com",
            "senha": "123456"
        }

    }).then((response) => {
        expect(response.status).to.eq(400)

    })

});