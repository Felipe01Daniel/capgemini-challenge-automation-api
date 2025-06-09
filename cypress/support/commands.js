import * as userApi from './api/userApi';
import * as ticketApi from './api/ticketApi';
import Ajv from 'ajv';

Cypress.Commands.add('criarUsuario', userApi.criarUsuario);
Cypress.Commands.add('editarUsuarioPorNome', userApi.editarUsuarioPorNome);
Cypress.Commands.add('deletarUsuarioPorNome', userApi.deletarUsuarioPorNome);
Cypress.Commands.add('buscarUsuarios', userApi.buscarUsuarios);

Cypress.Commands.add('criarTicket', ticketApi.criarTicket);
Cypress.Commands.add('editarTicketPorTitulo', ticketApi.editarTicketPorTitulo);
Cypress.Commands.add('deletarTicketPorTitulo', ticketApi.deletarTicketPorTitulo);
Cypress.Commands.add('buscarTickets', ticketApi.buscarTickets);

Cypress.Commands.add('validarSchema', (schema, body) => {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  if (!validate(body)) {
    throw new Error('Schema inválido: ' + JSON.stringify(validate.errors, null, 2));
  }
});