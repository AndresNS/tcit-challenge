import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Post {
  id: string;
  title: string;
  description: string;
}

interface PostState {
  newPost: Post;
  posts: Post[];
}

const initialState: PostState = {
  newPost: {
    id: "",
    title: "",
    description: "",
  },
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setNewPost: (state, action: PayloadAction<Post>) => {
      state.newPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        console.log("getPosts.pending");
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log("getPosts.rejected");
      })
      .addCase(createPost.pending, () => {
        console.log("createPost.pending");
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts = [action.payload, ...state.posts];
        state.newPost = initialState.newPost;
      })
      .addCase(createPost.rejected, (state, action) => {
        console.log("createPost.rejected");
      })
      .addCase(deletePost.pending, () => {
        console.log("deletePost.pending");
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<string>) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        console.log("deletePost.rejected");
      });
  },
});

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
  return data;
});

export const createPost = createAsyncThunk(
  "post/createPost",
  async (post: Post) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/post`,
      post
    );
    return data;
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (id: string) => {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_URL}/post/${id}`
    );
    return data.id;
  }
);

export const { setNewPost } = postSlice.actions;

export default postSlice.reducer;
