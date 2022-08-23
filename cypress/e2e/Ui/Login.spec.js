/// <reference types="cypress" />

describe('US0001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')  
    });

    it('Deve fazer login com sucesso', () => {
        cy.login('rodrigo@teste.com','123456')
        cy.get('[data-test="dashboard-welcome"]').should('contain' , 'Bem-vindo')

    }); 

    it('Validar mensagem de erro quando inserir usuário ou senha inválidos', () => {
        cy.login('rodrigoooo@teste.com','1234567')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
        
    })


});


/*

    Funcionalidade: Login
    Eu como usuário das Conexao QA
    Quero Fazer o login
    Para editar meu perfil

    Cenário: login com sucesso
    Arrange - Dado -Pré Requisito -> Dado que eu esteja na tela de login
    Action - Quando - Ação do usuário -> Quando eu inserir usuário e senha
    Assert - Então - Resultado esperado -> Então deve me direcionar para o dashboard

    Esquema do cenário
    Quando eu inserir <usuário> 
    E <senha> 123456
    Então

    Exemplos:
    |Usuario | Senha|
    |rodrigo@teste.com| "123456"|

    Cenário: Validar mensagem de erro

   

*/