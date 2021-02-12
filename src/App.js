import React from "react";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import './App.css'
import Nav from "./nav/Nav";


const board = {
  columns: [
    {
      id: 1,
      title: "ToDo",
      cards: [
        {
          id: 1,
          title: "Build a App",
          description: "Task management app with kanban board"
        },
        {
          id: 2,
          title: "Sample Data",
          description: "Put some sample data in app"
        },
        {
          id: 3,
          title: "make a coffee!",
          description: "With less sugar😋"
        }
      ]
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Test the feature!",
          description: "With the help of jest!"
        }
      ]
    },
    {
      id: 3,
      title: "Done!",
      cards: [
        {
          id: 10,
          title: "Commit!",
          description: "Commit feature 1 in repo!"
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content"
        }
      ]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <div className="board">
          {/* <h1 className="boardhead">TASKS</h1> */}
          <Board
            allowRemoveLane
            allowRemoveCard
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            initialBoard={board}
            allowAddCard={{ on: "bottom" }}
            onNewCardConfirm={draftCard => ({
              id: new Date().getTime(),
              ...draftCard
            })}
            onCardNew={console.log}
          />
        </div>
       
      </div>
      
    </div>
  );
}

export default App
