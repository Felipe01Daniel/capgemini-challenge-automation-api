export const ticketSchema = {
  type: 'object',
  required: ['id', 'title', 'description', 'status'],
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    description: { type: 'string' },
    status: { type: 'string' }
  }
};
