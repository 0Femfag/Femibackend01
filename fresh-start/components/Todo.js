"use client";
const EachTodo = ({ task, time, completed }) => {
  return (
    <div className={`todo ${completed && "completed"}`}>
      <p>{task}</p>
      <p>{time}</p>
      <p>{completed.toString()}</p>
      {completed ? (
        <button
          onClick={() => alert("you are about to cancel your todo")}
          style={{ color: "red" }}
        >
          cancel
        </button>
      ) : (
        <button
          onClick={() => alert("you are about to mark this todo")}
          style={{
            backgroundColor: "green",
            color: "white",
            cursor: "pointer",
          }}
        >
          done
        </button>
      )}
    </div>
  );
};

const Todo = () => {
  const allTask = [
    { todo: "try coding", completed: true, time: "12pm" },
    { todo: "sumbit my nextjs assignment", completed: false, time: "1pm" },
    { todo: "run my driving class", completed: true, time: "2pm" },
    { todo: "cook rice and beans", completed: false, time: "5pm" },
    { todo: "resting and meditation", completed: true, time: "7pm" },
  ];
  //   const allTask = [
  //     <EachTodo key={1} task="code by 12pm" />,
  //     <EachTodo key={2} task="sumbit my nextjs assignment" />,
  //     <EachTodo key={3} task="run my driving class" />,
  //     <EachTodo key={4} task="cook rice and beans" />,
  //     <EachTodo key={5} task="resting and meditation" />,
  //   ];
  return (
    <div>
      <p className="heading">list of todo</p>
      <div className="container">
        {allTask.map((item, index) => {
          return (
            <EachTodo
              time={item.time}
              completed={item.completed}
              key={index}
              task={item.todo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Todo;
