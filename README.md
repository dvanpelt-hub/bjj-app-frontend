# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Permissions/Access

-Each user (student/coach) has 2 id's
-Logging in / Authorized user receives access token and refresh token
-Only the access token (acceess_token) needs to be used in requests
-When a request is sent, the user private ID, access token, coach private id, and media id are included
