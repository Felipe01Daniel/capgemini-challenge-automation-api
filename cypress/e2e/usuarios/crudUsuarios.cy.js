describe('CRUD de Usuário com testes isolados', () => {
  let usuarios;

  before(() => {
    cy.fixture('usuarios').then(data => {
      usuarios = data;
    });
  });

  it('Deve criar usuário com sucesso', () => {
      cy.criarUsuario(usuarios.validocrud).then(res => {
        expect(res.status).to.eq(201);
      });
  });

  it('Deve editar usuário com sucesso', () => {
      cy.editarUsuarioPorNome(usuarios.validocrud.name, usuarios.atualizadocrud).then(res => {
        expect(res.status).to.eq(200);
      });
  });


  it('Deve buscar usuário por nome', () => {
      cy.buscarUsuarios().then(res => {
        expect(res.status).to.eq(200);
        const user = res.body.find(u => u.name === usuarios.atualizadocrud.name);
        expect(user).to.exist;
        expect(user.email).to.eq(usuarios.atualizadocrud.email);
      });
  });

  it('Deve deletar usuário com sucesso', () => {
      cy.deletarUsuarioPorNome(usuarios.atualizadocrud.name).then(res => {
        expect(res.status).to.eq(200);
      });
    });
});
