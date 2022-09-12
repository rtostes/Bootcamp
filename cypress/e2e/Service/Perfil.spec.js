/// <reference types="cypress" />

describe('Testes de consulta do perfil', () => {

    let token

    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })


    it('[GET] Consultar um perfil', () => {
        cy.request({
            method: 'GET',
            url: '/api/profile/me',
            headers: {
                Cookie: token
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

});


describe('Testes de criação de perfil', () => {

    let token

    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })


    it('[POST] Criar um perfil', () => {
        cy.request({
            method: 'POST',
            url: '/api/profile',
            headers: {
                Cookie: token
            },
            body: {
                "company": "Via Hub",
                "status": "Engenheiro de Testes",
                "location": "Rio de Janeiro",
                "website": "https://conexaoqa.herokuapp.com/api-docs/",
                "skills": "Testes automatizados e manuais",
                "bio": "Eu sou Sucre",
                "githubusername": "sucre",
                "youtube": "rodrigo@yoytube.com.br",
                "twitter": "string",
                "facebook": "string",
                "linkedin": "string",
                "instagram": "string",
                "medium": "string"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

});



describe('Testes de criação de experiência', () => {

    let token
    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })
    it('[PUT] Adicionar uma experiência', () => {
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
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.location).to.eq("Rio de Janeiro")
        })
    })

});



describe('Testes de exclusão de experiência', () => {
    let token
    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })
    it('[DELETE] Deletar uma experiência', () => {

        cy.criarExperiencia(token).then((response) => {
            let id = response.body.experience[0]._id
            cy.request({
                method: 'DELETE',
                url: `/api/profile/experience/${id}`,
                headers: {
                    Cookie: token
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
});