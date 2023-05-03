import reactLogo from "./assets/react.svg";
import pencil from "/pencil.svg";
import logo from "/logo.png";
import "./App.css";
import Body from "./components/Body";

function App() {
  return (
    <>
      <div>
        <a href={import.meta.env.VITE_URL} target="_blank" rel="noreferrer">
          <img src={logo} className="logo" alt="StackOverflow logo" />
          환경 변수 URL로 가져 온 로고이다. rel=noreferrer는 보안상의 이유로
          사용한다고 한다.
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>public 폴더에서 가져온 연필</h1>
      <img src={pencil} alt="pencil" />
      {import.meta.env.VITE_DEV}
      {import.meta.env.VITE_PRO}
      <Body />
    </>
  );
}

export default App;
