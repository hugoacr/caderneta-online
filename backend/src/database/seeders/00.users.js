module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'User',
        login: 'user',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', 
        role: 'dentist',
          // senha: secret_user
      },
    ], {});
  },
  
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};