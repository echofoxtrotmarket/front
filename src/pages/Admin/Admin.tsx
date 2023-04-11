import { AdminGuard } from './AdminGuard';

import { Navbar, Nav, Button, Form, Modal, Container, Toast, NavLink } from 'react-bootstrap';

import { Route, Routes } from 'react-router-dom';
import { AdminNotifications } from './AdminNotifications';
import { AdminDispute } from './AdminDispute';
import { LinkContainer } from 'react-router-bootstrap';

export const Admin = () => {
  return (
    <AdminGuard redirectPath={'/'} allowed={true}>
      <header>
        <h1 style={{ textAlign: 'center' }}>Админ-панель</h1>
      </header>
      <Navbar bg={'light'} expand={'lg'}>
        <Nav className={'mr-auto'}>
          <LinkContainer to={'/admin/notifications'}>
            <NavLink>Уведомления</NavLink>
          </LinkContainer>
          <LinkContainer to={'/admin/dispute'}>
            <NavLink>Решение споров</NavLink>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Routes>
        <Route path={'notifications/*'} element={<AdminNotifications />} />
        <Route path={'dispute'} element={<AdminDispute />} />
      </Routes>
    </AdminGuard>
  );
};
