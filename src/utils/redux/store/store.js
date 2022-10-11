import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";
export const store = configureStore({
  reducer: {
    data: reducer.state,
  },
});
/*
Store adalah sebuah function/method yang menerima sebuah parameter yang dinamakan reducer yang berfungsi untuk mendaftarkan sebuah state.
Store ini sendiri digunakan untuk membuat sebuah wadah/tempat yang nantinya dipakai untuk menyimpan informasi/data/state yang ditempatkan pada hirarki paling atas dari sebuah component tree. 
*/
