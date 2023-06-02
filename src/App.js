import "./App.css";
import LayoutBase from "./pages/layout";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <LayoutBase />
      </ConfigProvider>
    </div>
  );
}

export default App;
