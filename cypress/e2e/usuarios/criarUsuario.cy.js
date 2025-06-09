describe('Criar Usuário', () => {
  it('Deve criar usuário com sucesso', () => {
    cy.fixture('usuarios').then(usuarios => {
      cy.criarUsuario(usuarios.valido).then(res => {
        expect(res.status).to.eq(201);
      });
    });
  });
});
