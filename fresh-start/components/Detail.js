const showGender = ({ isMale }) => {
  if (isMale) {
    return (
      <div>
        <p>welcome sir</p>
      </div>
    );
  }
  return (
    <div>
      <p>welcome ma</p>
    </div>
  );
};

const Hiscountry = ({ country, isMale }) => {
  return (
    <div>
      <p>country: {country}</p>
      <showGender isMale={isMale} />
    </div>
  );
};

// const props = {
//   name: "Oluwafemi",
//   age: 28,
//   country: "Nigeria",
// };

const Details = ({ name, age, country, isMale }) => {
  //   const name = "Oluwafemi";
  return (
    <div>
      <p>
        name:{isMale ? "Mr" : "Mrs"} {name}
      </p>
      <p>age: {age}</p>
      <Hiscountry country={country} isMale={isMale} />
    </div>
  );
};
export default Details;

// {completed ? (<button>done</button>):(<button>cancel</button>)}

// style={{ color: "red" }}

// style={{backgroundColor: "green",color: "white", cursor: "pointer",}}

// <button>cancel</button>):(<button >done</button>
