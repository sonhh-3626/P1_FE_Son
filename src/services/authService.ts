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
      return { user, token };
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    throw error;
  }
};

const register = async (data: {
  username: string;
  email: string;
  password: string;
  role: "customer" | "vendor";
}) => {
  try {
    const existing = await axios.get(`${serverUrl}/users`, {
      params: { email: data.email },
    });

    if (existing.data.length > 0) {
      throw new Error("This email already exists");
    }

    const response = await axios.post(`${serverUrl}/users`, {
      username: data.username,
      email: data.email,
      password: data.password,
      role: data.role,
      createdAt: new Date().toISOString(),
    });

    const user = response.data;
    const token = `mock-token-${user.id}`;

    return { user, token };
  } catch (error) {
    throw error;
  }
};

export default {
  login,
  register,
};
