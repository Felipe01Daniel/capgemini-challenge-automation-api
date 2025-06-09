describe('Editar Usuário por Nome', () => {
  it('Deve editar usuário com sucesso', () => {
    cy.fixture('usuarios').then(usuarios => {
      cy.editarUsuarioPorNome(usuarios.valido.name, usuarios.atualizado).then(res => {
        expect(res.status).to.eq(200);
      });
    });
  });
});