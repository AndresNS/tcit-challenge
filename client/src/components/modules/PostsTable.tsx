import { ChangeEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Paper,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { AppDispatch, RootState } from "../../state/store";
import { getPosts, deletePost, Post } from "../../state/postSlice";
import { setLoading } from "../../state/uiSlice";

const PostsTable = () => {
  const posts = useSelector((state: RootState) => state.post.posts);
  const dispatch = useDispatch<AppDispatch>();
  const [filterInput, setFilterInput] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(setLoading(true));

      const { payload } = await dispatch(getPosts());
      setFilteredPosts(payload);

      dispatch(setLoading(false));
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(filterInput.toLowerCase())
      )
    );
  }, [filterInput, posts]);

  const handleDeleteClick = (id: string) => {
    dispatch(deletePost(id));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterInput(event.target.value);
  };

  return (
    <>
      <Paper className="p-4">
        <Typography variant="h6" gutterBottom>
          Filtro
        </Typography>

        <TextField
          id="post-name"
          label="Buscar por Nombre"
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleInputChange}
          value={filterInput}
        />
      </Paper>
      <Paper className="p-4">
        <Typography variant="h6" gutterBottom>
          Posts
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Nombre
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Descripción
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Acción
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPosts.length > 0 &&
              filteredPosts.map((post) => (
                <TableRow
                  key={post.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {post.title}
                  </TableCell>
                  <TableCell>{post.description}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => handleDeleteClick(post.id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default PostsTable;
