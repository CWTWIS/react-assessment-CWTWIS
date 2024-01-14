import Router from "./routes/routes";
import TodoContextProvider from "./context/TodoContext";
function App() {
  return (
    <TodoContextProvider>
      <Router/>
    </TodoContextProvider>
  );
}

export default App;
