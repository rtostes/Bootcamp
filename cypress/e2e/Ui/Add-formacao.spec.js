/// <reference types="cypress" />
const faker = require('faker-br')
const formacaoPage = require('../../support/Formacao/formacao-pages')


describe('Funcionalidade: Adicionar formação', () => {

    beforeEach(() => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-formacao')
    });

    it('Deve adicionar uma formação com sucesso', () => {
        formacaoPage.addFormacao('Academia', 'Terceiro Grau', 'Sistemas de Informação', '01/02/2022', '01/02/2026', 'Lato Sensu')
        cy.get('[data-test="education-delete"]').should('exist')
    });


    it('Deve adicionar uma formacao  Atual com sucesso', () => {
        formacaoPage.addFormacaoAtual('Academia', 'Terceiro Grau', 'Sistemas de Informação', '01/02/2022', 'Lato Sensu')
        cy.get('[data-test="education-delete"]').should('exist')
    });

    it('Deve excluir uma formação com sucesso', () => {
        formacaoPage.addFormacao('Academia', 'Terceiro Grau', 'Sistemas de Informação', '01/02/2022', '01/02/2026', 'Lato Sensu')
        cy.get('[data-test="education-delete"]').first().click()
        cy.contains('Formação Acadêmica').should('be.visible')
    });

});