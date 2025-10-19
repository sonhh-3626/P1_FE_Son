import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const login = async (credentials: { email: string; password: string }) => {
  try {
    let response = await axios.get(`${serverUrl}/users`, {
      params: {
        email: credentials.email,
        password: credentials.password,
      },
    });

    if (response.data.length === 0) {
      response = await axios.get(`${serverUrl}/users`, {
        params: {
          username: credentials.email,
          password: credentials.password,
        },
      });
    }

    if (response.data.length > 0) {
      const user = response.data[0];
      const token = `mock-token-${user.id}`;
      console.log(user);
      return { user, token };
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export default {
  login,
};
