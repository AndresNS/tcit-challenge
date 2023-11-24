import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";

import { createPost, setNewPost } from "../../state/postSlice";
import { setLoading } from "../../state/uiSlice";

import { Paper, TextField, Button, Typography } from "@mui/material";

const PostsForm = () => {
  const newPost = useSelector((state: RootState) => state.post.newPost);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setNewPost({ ...newPost, [event.target.name]: event.target.value })
    );
  };

  const handleCreatePostSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    dispatch(setLoading(true));
    await dispatch(createPost(newPost));
    dispatch(setLoading(false));
  };

  return (
    <Paper className="p-4">
      <div className="w-full">
        <Typography variant="h6" gutterBottom>
          Nuevo Post
        </Typography>
      </div>
      <form
        className="flex items-center gap-2 flex-col sm:flex-row"
        onSubmit={handleCreatePostSubmit}
      >
        <div className="w-full sm:w-auto">
          <TextField
            id="title"
            name="title"
            label="Nombre"
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleInputChange}
            value={newPost.title}
          />
        </div>
        <div className="w-full">
          <TextField
            id="description"
            name="description"
            label="Descripción"
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleInputChange}
            value={newPost.description}
          />
        </div>
        <Button variant="contained" type="submit">
          Crear
        </Button>
      </form>
    </Paper>
  );
};

export default PostsForm;
