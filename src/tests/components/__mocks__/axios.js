const axios = jest.createMockFromModule("axios");
axios.create.mockReturnThis();

export default axios;
