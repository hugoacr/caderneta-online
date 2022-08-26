module.exports = {
    /**
     *
     * @param {import('sequelize').QueryInterface} queryInterface
     * @param {import('sequelize').DataTypes} Sequelize
     */
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('salles_on_credit', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        patient_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'patients', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        procedure_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: { model: 'procedures', key: 'id' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        user_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: { model: 'users', key: 'id' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('salles_on_credit');
    },
  };