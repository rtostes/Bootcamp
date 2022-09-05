/// <reference types="cypress" />
const faker = require('faker-br')
const experienciaPage = require('../../support/Experiencia/experiencia-pages')


describe('Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {
        cy.fixture("usuarios").then((user)=> {
            cy.login(user[0].email, user[0].senha)
        }) 
        cy.visit('adicionar-experiencia') 
        });
    it('Deve adicionar uma experiência com sucesso', () => {
       experienciaPage.addExperiencia('QA','Via', 'SP','01/01/2020','01/01/2040', 'Via é top') 
       cy.get('[data-test="experience-delete"]').should('exist')
    });


    it('Deve adicionar uma experiência  Atual com sucesso', () => {
        experienciaPage.addExperienciaAtual('QA','Via', 'SP','01/01/2020', 'Via é top') 
        cy.get('[data-test="experience-delete"]').should('exist')
     });

    it('Deve excluir uma experiência com sucesso', () => {
        experienciaPage.addExperiencia('QA','Via', 'SP','01/01/2020','01/01/2040', 'Via é top') 
        cy.get('[data-test="experience-delete"]').first().click()
        cy.contains('Experiência Removida').should('be.visible')
        
     });




});