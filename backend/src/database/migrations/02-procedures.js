module.exports = {
    /**
     *
     * @param {import('sequelize').QueryInterface} queryInterface
     * @param {import('sequelize').DataTypes} Sequelize
     */
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('procedures', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        price: {
          allowNull: false,
          type: Sequelize.DECIMAL(10, 2),
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('procedures');
    },
  };