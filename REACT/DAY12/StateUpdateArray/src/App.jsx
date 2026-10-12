// 


function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];

  const carElements = cars.map((car) => {
    return <li key={car}>I am a {car}</li>;
  });

  console.log(carElements);

  return (
    <>
      <h1>My Cars:</h1>
      <ul>{carElements}</ul>
    </>
  );
}

export default MyCars ;