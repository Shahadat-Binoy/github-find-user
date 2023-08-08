/* eslint-disable react/prop-types */
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
