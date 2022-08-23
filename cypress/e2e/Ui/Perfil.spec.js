/// <reference types="cypress" />
const faker = require('faker-br')

describe('US003 - Funcionalidade: Perfil', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
    });

    it('Deve fazer login com sucesso', () => {
        cy.visit('login')
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('rodrigo@teste.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click()

    });


  
    it('Deve criar perfil com sucesso', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.name.firstName())
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="dashboard-createProfile"]').click()
        cy.get('#mui-component-select-status').click()

        //Seleção de status random
        cy.get('.MuiMenu-list li')
            .then(($li) => {
                const items = $li.toArray()
                return Cypress._.sample(items)
            }).click()

        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Via')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://conexaoqa.herokuapp.com/api-docs/')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Juiz de Fora')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Testes manuais, Testes automatizados, Cypress,Js')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('rodrigotostes')
        cy.get('[rows="1"]').type('Eu sou Rodrigo Tostes, engenheiro de qualidade de software')
        cy.get('[data-test="profile-socials"]').click()
        cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.twitter.com.br/rodrigotostes')
        cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.facebook.com.br/rodrigotostes')
        cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.youtube.com.br/rodrigotostes')
        cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.linkedin.com/in/rodrigo-tostes-0aa105a2/')
        cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.instagran.com.br/rodrigotostes')
        cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input').type('http://medium.com/rodrigotostes')
        cy.get('[data-test="profile-submit"]').click()

    });
});

