import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="pt-16">{children}</main>
    </>
  );
};

export default Layout;
