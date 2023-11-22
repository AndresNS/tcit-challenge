import "./App.css";
import PostsTable from "./components/PostsTable";
import PostForm from "./components/PostForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-700 text-white flex flex-col min-h-screen">
      <div className="container mx-auto flex-1 flex flex-col gap-4">
        <PostForm />
        <PostsTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
