describe('Deletar Usuário por Nome', () => {
  it('Deve deletar usuário existente', () => {
    cy.fixture('usuarios').then(usuarios => {
      cy.deletarUsuarioPorNome(usuarios.deletar.name).then(res => {
        expect(res.status).to.eq(200);
      });
    });
  });
});