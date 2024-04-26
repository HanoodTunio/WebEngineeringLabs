const NewComponent = () => {
  return <h2> I am new Component</h2>;
};

const CustomApp = () => {
  // calculation
  return (
    <h1>
      {" "}
      Custom App <NewComponent> </NewComponent> <NewComponent />{" "}
    </h1>
  );
};

export default CustomApp;
