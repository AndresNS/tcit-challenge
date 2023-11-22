import React from "react";

// Mui
import { Paper, TextField, Button } from "@mui/material";

const PostsForm = () => {
  return (
    <Paper>
      <form className="p-4 flex items-center gap-2 flex-col sm:flex-row">
        <div className="w-full sm:w-auto">
          <TextField
            id="post-name"
            label="Nombre"
            variant="outlined"
            size="small"
            fullWidth
          />
        </div>
        <div className="w-full">
          <TextField
            id="post-description"
            label="Descripción"
            variant="outlined"
            size="small"
            fullWidth
          />
        </div>
        <Button variant="contained">Crear</Button>
      </form>
    </Paper>
  );
};

export default PostsForm;
