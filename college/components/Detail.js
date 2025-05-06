const showGender = ({ isMale }) => {
  // if (isMale) {
  //   return (
  //     <div>
  //       <p>welcome sir</p>
  //     </div>
  //   );
  // }
  return (
    <div>
      <p>welcome {isMale ? "Sir" : "Ma"}</p>
    </div>
  );
};
const Mycountry = ({ country }) => {
  return (
    <div>
      <p>country: {country}</p>
      <showGender isMale={isMale} />
    </div>
  );
};
// const props = {
//   name: "Femi",
//   age: 29,
//   country: "Nigeria",
// };
const Details = ({ name, age, country }) => {
  // const name = "Femi";
  return (
    <div>
      <p>
        name:{isMale ? "Mr" : "Mrs"} {name}
      </p>
      <p>age: {age}</p>
      <Mycountry country={country} isMale={isMale} />
    </div>
  );
};

export default Details;
