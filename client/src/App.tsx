import "./App.css";
import PostsTable from "./components/modules/PostsTable";
import PostsForm from "./components/modules/PostsForm";
import Footer from "./components/sections/Footer";
import Loader from "./components/ui/Loader";

import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import Header from "./components/sections/header";

function App() {
  const loading = useSelector((state: RootState) => state.ui.loading);

  return (
    <div className="bg-slate-600 text-white flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto mt-12 flex-1 flex flex-col gap-4">
        <PostsForm />
        <PostsTable />
      </div>
      <Footer />
      {loading && <Loader />}
    </div>
  );
}

export default App;
