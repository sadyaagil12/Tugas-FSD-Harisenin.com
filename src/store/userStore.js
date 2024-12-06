import { create } from "zustand";
import axios from "axios";

// const proxy = "https://cors-anywhere.herokuapp.com/";
const API_URL = `https://mockapi.io/projects/674d84cb635bad45618bac12/users`;
// const API_URL = "https://mockapi.io/projects/674d84cb635bad45618bac12/users"; // Ganti dengan URL MockAPI Anda

const useUserStore = create((set) => ({
  users: [],
  currentUser: null,
  isLoading: false,
  error: null,

  // Fetch all users
  fetchUsers: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(API_URL);
      set({ users: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Register new user
  // registerUser: async (user) => {
  //   set({ isLoading: true });
  //   try {
  //     const response = await axios.post(API_URL, user);
  //     set((state) => ({
  //       users: [...state.users, response.data],
  //       isLoading: false,
  //     }));
  //   } catch (error) {
  //     set({ error: error.message, isLoading: false });
  //   }
  // },

  registerUser: async (user) => {
    console.log(user);
    set({ isLoading: true });
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Tambahkan header ini
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      set((state) => ({
        users: [...state.users, data],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Login user
  loginUser: async (name, password) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(API_URL);
      const user = response.data.find(
        (u) => u.name === name && u.password === password
      );
      if (user) {
        set({ currentUser: user, isLoading: false });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Update password
  updatePassword: async (id, newPassword) => {
    set({ isLoading: true });
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        password: newPassword,
      });
      set((state) => ({
        users: state.users.map((user) =>
          user.id === id ? { ...user, password: response.data.password } : user
        ),
        currentUser: { ...state.currentUser, password: response.data.password },
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Logout user
  logoutUser: () => {
    set({ currentUser: null });
  },
}));

export default useUserStore;
