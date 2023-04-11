import React from 'react';
import { 
    Container, Content, Sidebar, 
    Menu, MenuItem, MenuLink
} from './style';

function Menubar() {
    return(
    <Container>
        <Sidebar>
          <Menu>
          <MenuItem>
              <h2>MINI PROJETOS</h2>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/">HOME</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/listar_tarefa">LISTAR TAREFAS</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/mini_game">MINI GAME</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">PROJETO 3</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">PROJETO 4</MenuLink>
            </MenuItem>
          </Menu>
        </Sidebar>
    </Container>
    );
}

export default Menubar;