module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('procedures', [
        {
          name: 'Procedimento_01',
          price: 800,
        },
        {
          name: 'Procedimento_02',
          price: 500,
        },
        {
          name: 'Procedimento_03',
          price: 1500,
        },
      ], {});
    },
      
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('procedures', null, {});
    },
  };