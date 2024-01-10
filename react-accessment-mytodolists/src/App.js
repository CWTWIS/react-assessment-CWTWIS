import LoginPage from "./components/LoginPage";
import MyTodoPage from "./components/MyTodoPage";
import { useLogIn } from "./context/LogInContext";
function App() {
  const {LoginSuccess} = useLogIn()
  return (
    <div className="App"> 
      {!LoginSuccess? (<LoginPage/>) : (<MyTodoPage/>)}
      
      {/* <LoginPage/>
      <MyTodoPage/> */}
    </div>
  );
}

export default App;
