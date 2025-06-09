export function criarTicket(ticket) {
  return cy.request({
    method: 'POST',
    url: '/tickets',
    body: ticket,
    failOnStatusCode: false
  });
}

export function buscarTickets() {
  return cy.request({
    method: 'GET',
    url: '/tickets',
    failOnStatusCode: false
  });
}

export function editarTicketPorTitulo(titulo, novosDados) {
  return buscarTickets().then(res => {
    const ticket = res.body.find(t => t.title === titulo);
    if (!ticket) throw new Error('Ticket não encontrado');
    return cy.request({
      method: 'PUT',
      url: `/tickets/${ticket.id}`,
      body: novosDados,
      failOnStatusCode: false
    });
  });
}

export function deletarTicketPorTitulo(titulo) {
  return buscarTickets().then(res => {
    const ticket = res.body.find(t => t.title === titulo);
    if (!ticket) throw new Error('Ticket não encontrado');
    return cy.request({
      method: 'DELETE',
      url: `/tickets/${ticket.id}`,
      failOnStatusCode: false
    });
  });
}
