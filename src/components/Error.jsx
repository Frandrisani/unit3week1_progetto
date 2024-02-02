import Alert from "react-bootstrap/Alert";

const Error = function (props) {
  return (
    <Alert variant="danger">
      <Alert.Heading>Abbiamo riscontrato un problema</Alert.Heading>
      <p>ss</p>
      <hr />
      <p className="mb-0">{props.messageError}</p>
    </Alert>
  );
};
export default Error;
