export const Notifacation = ({ message }) => {
  const notificationStyle = {
    maxWidth: '500px',
    padding: '20px',
    fontSize: '16px',
    fontWeight: '400',
    border: '1px solid black',
    borderTop: 'none',
  };
  return <p style={notificationStyle}>{message}</p>;
};
