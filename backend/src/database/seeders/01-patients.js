module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('patients', [
      {
        name: 'Paciente_01',
        address: 'Endereço 01',
        phone_number: '11999887766',
      },
      {
        name: 'Paciente_02',
        address: 'Endereço 02',
        phone_number: '12999887766',
      },
      {
        name: 'Paciente_03',
        address: 'Endereço 03',
        phone_number: '13999887766',
      },
    ], {});
  },
    
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('patients', null, {});
  },
};