module.exports = {
    /**
     *
     * @param {import('sequelize').QueryInterface} queryInterface
     * @param {import('sequelize').DataTypes} Sequelize
     */
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('installments', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        salle_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'salles_on_credit', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        maturity: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        value: {
            allowNull: false,
            type: Sequelize.DECIMAL(9, 2),
        },
        status: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: 'em aberto',
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('installments');
    },
  };