const EachTodo = ({ task, time, completed }) => {
  return (
    <div>
      <p>{task}</p>
      <p>{time}</p>
      <p>{completed.toString()}</p>
    </div>
  );
};

const Todo = () => {
  const allTask = [
    { todo: "Try coding", completed: true, time: "12pm" },
    { todo: "resting and meditation", completed: false, time: "10pm" },
    { todo: "run my crypto class", completed: true, time: "11pm" },
    { todo: "Go with industrial standard", completed: false, time: "7pm" },
    { todo: "Submit my nextjs assignment", completed: true, time: "8pm" },
  ];
  // const allTask = [
  //   <EachTodo key={1} task="Code by 12" />,
  //   <EachTodo key={2} task="Eat by 1" />,
  //   <EachTodo key={3} task="sleep by 2" />,
  //   <EachTodo key={4} task="Go with industrial standard by 3" />,
  //   <EachTodo key={5} task="Mapping element by 5" />,
  // ];

  return (
    <div>
      <p>list of todo</p>
      <div>
        {allTask.map((item, index) => {
          return (
            <EachTodo
              completed={item.completed}
              time={item.time}
              task={item.todo}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
