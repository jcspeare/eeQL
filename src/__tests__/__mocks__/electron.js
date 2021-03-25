// mocks of electron functionality to enable shallow renders.

module.exports = {
  window: {
    require: jest.fn()
  },
  match: jest.fn(),
  app: jest.fn(),
  remote: {
    require: jest.fn(), 
    app: {
      getPath: jest.fn(),
    },
  },
  dialog: jest.fn(),
};