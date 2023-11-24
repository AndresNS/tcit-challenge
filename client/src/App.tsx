import "./App.css";
import PostsTable from "./components/modules/PostsTable";
import PostsForm from "./components/modules/PostsForm";
import Footer from "./components/sections/Footer";
import Loader from "./components/ui/Loader";

import { useSelector } from "react-redux";
import { RootState } from "./state/store";

function App() {
  const loading = useSelector((state: RootState) => state.ui.loading);

  return (
    <div className="bg-slate-700 text-white flex flex-col min-h-screen">
      <div className="container mx-auto flex-1 flex flex-col gap-4">
        <PostsForm />
        <PostsTable />
      </div>
      <Footer />
      {loading && <Loader />}
    </div>
  );
}

export default App;
