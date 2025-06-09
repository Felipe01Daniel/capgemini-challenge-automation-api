describe('Editar Ticket por Título', () => {
  it('Deve editar ticket com sucesso', () => {
    cy.fixture('tickets').then(dados => {
      cy.editarTicketPorTitulo(dados.valido.title, dados.atualizado).then(res => {
        expect(res.status).to.eq(200);
        expect(res.body.title).to.eq(dados.atualizado.title);
      });
    });
  });
});