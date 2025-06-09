describe('Criar Ticket', () => {
  it('Deve criar um novo ticket com sucesso', () => {
    cy.fixture('tickets').then(dados => {
      cy.criarTicket(dados.valido).then(res => {
        expect(res.status).to.eq(201);
        expect(res.body.title).to.eq(dados.valido.title);
      });
    });
  });
});