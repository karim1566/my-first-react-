const content = (props) => {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  );
};
export default content;
