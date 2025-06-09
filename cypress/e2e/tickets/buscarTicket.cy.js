import { ticketSchema } from '../../schemas/ticket.schema';

describe('Buscar Tickets', () => {
  it('Deve listar os tickets e validar schema', () => {
    cy.buscarTickets().then(res => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      if (res.body.length > 0) {
        cy.validarSchema(ticketSchema, res.body[0]);
      }
    });
  });
});