import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
}

export const Navbar = () => {
  const menuItems: MenuItem[] = [
    { label: "Inicio", path: "/" },
    { label: "Calculadora", path: "/estadistica" },
    { label: "Ecuaciones", path: "/ecuaciones" },
    { label: "Inventario", path: "/inventario" },
  ];

  return (
    <nav>
      {menuItems.map((item, index) => (
        <span key={item.path}>
          <Link to={item.path}>{item.label} </Link>
          {index < menuItems.length - 1}
        </span>
      ))}
    </nav>
  );
};
