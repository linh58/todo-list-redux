import React from "react";
import "./App.css";
import { Divider, Typography } from "antd";
import Filters from "./components/Filters/Filters";
import TodoList from "./components/TodoList/TodoList";

const { Title } = Typography;

function App() {
  return (
    <div className="app">
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
