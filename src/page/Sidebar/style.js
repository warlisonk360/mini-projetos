import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 10px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  &:hover {
    color: #333;
  }
`;