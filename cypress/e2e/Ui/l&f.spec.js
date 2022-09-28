/// <reference types="cypress" />
//const faker = require('faker-br')

describe('Funcionalidade: Alterar Restituição', () => {

    beforeEach(() => {
        cy.visit('lookfeel-restituicao-tst1')
    });


    it('Mudança de tipo de restituição não realizada', () => {
        cy.get('#txtFiltroCpfCnpj').type('067.966.020-80')
        cy.get('#panelPesquisaComBandeiraB2C > .row > :nth-child(2) > .btn').click()
        cy.get('#creditosTab').click()
        cy.wait(4000)
        cy.get('[oninput="FiltrarPedido(value, nextElementSibling)"]').type('500591816')
        cy.get('.textbox > .color').click()
        cy.get('[data-pedido="500591816"] > [colspan="2"] > .grey > [title="Mudar Restituicao"] > .on').click()
        cy.get(':nth-child(3) > .list-group > .itemOpcaoSimulacao > .labelOpcaoSimulacao > .opcaoSimulacao').click()
        cy.get(':nth-child(4) > .list-group > .itemOpcaoSimulacao > .labelOpcaoSimulacao > .opcaoSimulacao').click()
        cy.get('#efetuar-negociacao').click()
        cy.get('.modal-footer > .lf-button-padrao').click()
        cy.wait(4000)
        cy.get('[style="padding-bottom: 10px"]').should('contain', 'Não foi possível efetuar a negociação')

    });

    
    it('Validação da entrega', () => {
        cy.get('#txtFiltroCpfCnpj').type('067.966.020-80')
        cy.get('#panelPesquisaComBandeiraB2C > .row > :nth-child(2) > .btn').click()
        cy.get(':nth-child(1) > :nth-child(6) > .btn').click()
        cy.get('[type="checkbox"]').click()
        cy.wait(3000)
        cy.get('#enderecoEntregaTab').click()
        cy.get('tr > .text-center > .btn > .fas').click()
        cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > label').should('contain','Status')
        cy.contains('Detalhes da entrega: 50059181601').should('contain','50059181601')
      
    });

});