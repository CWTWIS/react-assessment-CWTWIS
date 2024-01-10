import LoginPage from "./components/LoginPage";
import MyTodoPage from "./components/MyTodoPage";
import { useLogIn } from "./context/LogInContext";
function App() {
  const {user} = useLogIn()
  return (
    <div className="App"> 
      {!user? (<LoginPage/>) : (<MyTodoPage/>)}
      
      {/* <LoginPage/>
      <MyTodoPage/> */}
    </div>
  );
}

export default App;
