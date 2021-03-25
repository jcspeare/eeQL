// mocks of electron functionality to enable shallow renders.

module.exports = {
  window: {
    require: jest.fn()
  },
  remote: {
    require: jest.fn(),
    dialog: jest.fn(), 
  },
};