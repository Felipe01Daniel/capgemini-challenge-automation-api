describe('Deletar Ticket por Título', () => {
  it('Deve deletar ticket existente pelo título', () => {
    cy.fixture('tickets').then(dados => {
      cy.deletarTicketPorTitulo(dados.atualizado.title).then(res => {
        expect(res.status).to.eq(200);
      });
    });
  });

  it('Deve falhar ao deletar ticket inexistente', () => {
    cy.deletarTicketPorTitulo('Titulo Inexistente').catch(err => {
      expect(err.message).to.include('Ticket não encontrado');
    });
  });
});