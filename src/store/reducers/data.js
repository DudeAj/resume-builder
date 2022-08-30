import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, onValue, get, child } from "firebase/database";
import { db } from "../../firebase";
import axios from "axios";

const initialState = {
  personal: {},
  experience: [],
  education: [],
  skills: [],
  languages: [],
  certification: "",
  summary: "",
  loading: false,
};

export const getPersonal = createAsyncThunk("fetch/personal-data", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const data = await get(child(ref(db), `container/${user_id}`));
    return data.val().personal;
  } catch (error) {
    return error;
  }
});

export const getExperience = createAsyncThunk("fetch/experience", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const dataResponse = await get(child(ref(db), `experience/${user_id}`));
    const data = dataResponse.val();
    const response = Object.keys(data).map((key) => ({
      ...data[key],
      id: key,
    }));
    return response;
  } catch (error) {
    return error;
  }
});

export const getEducation = createAsyncThunk("fetch/education", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const dataResponse = await get(child(ref(db), `education/${user_id}`));
    const data = dataResponse.val();
    const response = Object.keys(data).map((key) => ({
      ...data[key],
      id: key,
    }));
    return response;
  } catch (error) {
    return error;
  }
});

export const getSkills = createAsyncThunk("fetch/skills", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const dataResponse = await get(child(ref(db), `skills/${user_id}`));
    const data = dataResponse.val();
    const response = Object.keys(data).map((key) => ({
      ...data[key],
      id: key,
    }));
    return response;
  } catch (error) {
    return error;
  }
});

export const getLanguages = createAsyncThunk("fetch/languages", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const dataResponse = await get(child(ref(db), `language/${user_id}`));
    const data = dataResponse.val();
    const response = Object.keys(data).map((key) => ({
      ...data[key],
      id: key,
    }));
    return response;
  } catch (error) {
    return error;
  }
});

export const getCertification = createAsyncThunk(
  "fetch/certification",
  async () => {
    try {
      const user_id = localStorage.getItem("user_id");
      const dataResponse = await get(
        child(ref(db), `certification/${user_id}`)
      );
      const data = dataResponse.val();
      return data.value;
    } catch (error) {
      return error;
    }
  }
);

export const getSummary = createAsyncThunk("fetch/summary", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const dataResponse = await get(child(ref(db), `summary/${user_id}`));
    const data = dataResponse.val();

    return data.value;
  } catch (error) {
    return error;
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPersonalData: (state, { payload }) => {
      
      state.personal = payload;
    },
  },
  extraReducers: {
    [getPersonal.pending]: (state) => {
      state.loading = true;
    },
    [getPersonal.fulfilled]: (state, action) => {
      state.loading = false;
      
      state.personal = action.payload;
    },
    [getPersonal.rejected]: (state, action) => {
      state.loading = false;
    },
    [getExperience.fulfilled]: (state, action) => {
      state.experience = action.payload;
    },
    [getEducation.fulfilled]: (state, action) => {
      state.education = action.payload;
    },
    [getSkills.fulfilled]: (state, action) => {
      state.skills = action.payload;
    },
    [getLanguages.fulfilled]: (state, action) => {
      state.languages = action.payload;
    },
    [getCertification.fulfilled]: (state,action) => {
      state.certification = action.payload;
    },
    [getSummary.fulfilled]: (state, action) => {
      state.summary = action.payload;
    }
  },
});

export default dataSlice.reducer;
