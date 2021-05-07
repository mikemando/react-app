import Todo from "./components/Todo";

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text="Clean the house" />
            <Todo text="Attend classes" />
            <Todo text="Take your time to read some books" />
        </div>
    );
}

export default App;
