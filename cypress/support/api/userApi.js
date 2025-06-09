export function criarUsuario(dados) {
  return cy.request({
    method: 'POST',
    url: '/users',
    body: dados,
    failOnStatusCode: false
  });
}

export function buscarUsuarios() {
  return cy.request({
    method: 'GET',
    url: '/users',
    failOnStatusCode: false
  });
}

export function editarUsuarioPorNome(nome, dadosAtualizados) {
  return buscarUsuarios().then(res => {
    const usuario = res.body.find(u => u.name === nome);
    if (!usuario) throw new Error('Usuário não encontrado');
    return cy.request({
      method: 'PUT',
      url: `/users/${usuario.id}`,
      body: dadosAtualizados,
      failOnStatusCode: false
    });
  });
}

export function deletarUsuarioPorNome(nome) {
  return buscarUsuarios().then(res => {
    const usuario = res.body.find(u => u.name === nome);
    if (!usuario) throw new Error('Usuário não encontrado');
    return cy.request({
      method: 'DELETE',
      url: `/users/${usuario.id}`,
      failOnStatusCode: false
    });
  });
}