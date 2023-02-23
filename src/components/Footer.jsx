const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>All rights reserved. Groceries. {date} </p>
    </footer>
  );
};

export default Footer;
