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
        maturity: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        value: {
            allowNull: false,
            type: Sequelize.DECIMAL(10, 2),
        },
        status: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: 'em aberto',
        },
        patient_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: { model: 'patients', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        procedure_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: { model: 'procedures', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        user_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('installments');
    },
  };