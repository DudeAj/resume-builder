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
  selectedTemplate: localStorage.getItem('selectedTemplate') ? localStorage.getItem('selectedTemplate') : null,
  progress:0,
  resume:[],
};

export const getPersonal = createAsyncThunk("fetch/personal-data", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const data = await get(child(ref(db), `container/${user_id}`));
    return data.val().personal;
  } catch (error) {
    return [];
  }
});

export const getExperience = createAsyncThunk("fetch/experience", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const dataResponse = await get(child(ref(db), `experience/${user_id}`));
    const data = dataResponse.val();
    const response = data
      ? Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }))
      : [];
    return response;
  } catch (error) {
    return [];
  }
});

export const getEducation = createAsyncThunk("fetch/education", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const dataResponse = await get(child(ref(db), `education/${user_id}`));
    const data = dataResponse.val();
    const response = data
      ? Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }))
      : [];
    return response;
  } catch (error) {
    return [];
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
    return [];
  }
});

export const getLanguages = createAsyncThunk("fetch/languages", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const dataResponse = await get(child(ref(db), `language/${user_id}`));
    const data = dataResponse.val();
    const response = data
      ? Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }))
      : [];
    return response;
  } catch (error) {
    return [];
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
      return [];
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
    return [];
  }
});

export const getResume = createAsyncThunk("fetch/resume-data", async () => {
  try {
    const user_id = localStorage.getItem("user_id");
    const data = await get(child(ref(db), `resume/${user_id}`));
    const allResume = data.val();
    
    return allResume ? Object.keys(allResume).map(key => ({id:key, resumeId: allResume[key].resumeId})) : [];

  } catch (error) {
    return [];
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setSelectedResume: (state, { payload }) => {
      state.selectedTemplate = payload;
      localStorage.setItem('selectedTemplate', payload);
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
    [getCertification.fulfilled]: (state, action) => {
      state.certification = action.payload;
    },
    [getSummary.fulfilled]: (state, action) => {
      state.summary = action.payload;
    },
    [getResume.fulfilled]: (state, action) => {
      state.resume = action.payload;
    }
  },
});

export const { setSelectedResume, setProgress } = dataSlice.actions;

export default dataSlice.reducer;
