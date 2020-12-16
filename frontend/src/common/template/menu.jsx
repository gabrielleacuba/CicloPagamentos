import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

const Menu = (props) => {
  return (
    <ul className="sidebar-menu">
      <MenuItem path="#/" label="Painel" icon="dashboard" />
      <MenuTree label="Cadastro" icon="edit">
        <MenuItem
          path="#cicloDePagamentos"
          label="Ciclos de Pagamentos"
          icon="usd"
        />
      </MenuTree>
    </ul>
  );
};

export default Menu;
