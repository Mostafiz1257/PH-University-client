import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

const App = () => {
  return (
    <>
      <ProtectedRoute>
        <MainLayout></MainLayout>
      </ProtectedRoute>
    </>
  );
};

export default App;
