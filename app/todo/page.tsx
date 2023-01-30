"use client";
import React, { useState } from "react";

export default function ToDoApp() {
    const st = {
        border: "1px solid black",
        padding: "8px 20px",
        margin: "5px",
    };

    const [val, setVal] = useState("");

    const onChangeHandler = (e: any) => {
        setVal(e.target.value);
    };

    const [todos, setTodo] = useState([{ task: "Todo 1", completed: false }]);

    const tickTask = (ele1: any) => {
        // return an array (.map)
        const newTodoTask = todos.map((todos) => {
            if (todos.task === ele1.task) {
                todos.completed = !todos.completed;
            }
            return todos;
        });
        setTodo(newTodoTask);
    };

    const addTodo = () => {
        if (val.length > 0) {
            setTodo([...todos, { task: val, completed: false }]);
            setVal("");
        }
    };
    const delToDoTask = (ele2del: any) => {
        const newDelToDo = todos.filter((todo) => {
            if (todo.task === ele2del.task) {
                return false;
            }
            return true;
        });
        setTodo(newDelToDo);
    };

    const handleKeypress = (entry1: any) => {
        //it triggers by pressing the enter key
        if (entry1.key === "Enter") {
            addTodo();
        }
    };
    return (
        <>
            <center>
                <h1 style={{ color: "Grey" }}> To do App</h1>
                <br></br>
                <input
                    style={st}
                    placeholder="Add task"
                    type={"text"}
                    value={val}
                    onChange={onChangeHandler}
                    onKeyDown={handleKeypress}
                />
                <button id="myButton" style={st} onClick={addTodo}>
                    Add
                </button>

                <ul style={{ listStyle: "none" }}>
                    {todos.map((ele) => {
                        return (
                            <>
                                <li
                                    style={{
                                        fontSize: "120%",
                                        fontFamily: "sans-serif",
                                        padding: "5px",
                                    }}
                                    key={ele.task}
                                >
                                    <input
                                        type="checkbox"
                                        checked={ele.completed}
                                        onClick={() => tickTask(ele)}
                                    ></input>
                                    {ele.task}{" "}
                                    <button
                                        style={{
                                            border: "1px solid brown",
                                            padding: "6px 13px",
                                            margin: "3px",
                                        }}
                                        onClick={() => delToDoTask(ele)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            </>
                        );
                    })}
                </ul>
            </center>
        </>
    );
}
