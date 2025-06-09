describe('Buscar Usuário por Nome', () => {
  it('Deve encontrar o usuário definido no fixture', () => {
    cy.fixture('usuarios').then(usuarios => {
      const usuarioEsperado = usuarios.valido;

      cy.buscarUsuarios().then(res => {
        expect(res.status).to.eq(200);
        expect(res.body).to.be.an('array');

        const usuarioEncontrado = res.body.find(user => user.name === usuarioEsperado.name);
        expect(usuarioEncontrado, 'Usuário deve estar presente na resposta').to.exist;
        expect(usuarioEncontrado.email).to.eq(usuarioEsperado.email);
      });
    });
  });
});
