# This Project Repo is based from these blogs:

[React.JS + MSAL with ASP.NET Core to use Azure AD with User & Role - Part 1](https://dnilvincent.com/blog/posts/reactjs-msal-with-aspnetcore-to-use-azure-ad-part1)

[React.JS + MSAL with ASP.NET Core to use Azure AD with User & Role - Part 2](https://dnilvincent.com/blog/posts/reactjs-msal-with-aspnetcore-to-use-azure-ad-part2)

[React.JS + MSAL with ASP.NET Core to use Azure AD with User & Role - Part 3](https://dnilvincent.com/blog/posts/reactjs-msal-with-aspnetcore-to-use-azure-ad-part3)

## Overview
The setup of this repo is a separate application. For the front-end, it's React.JS while for the back-end is ASP.NET Core Web API.
Prerequisite: 

- First, you need setup your Azure AD. You can find a reference from this blog page: [React.JS + MSAL with ASP.NET Core to use Azure AD with User & Role - Part 1](https://dnilvincent.com/blog/posts/reactjs-msal-with-aspnetcore-to-use-azure-ad-part1)
- Clone or download the repository.

## Important steps:
- Rebuild/Restore the backend solution.
- Restore `node_modules` in react.js project.
- Update the [appsettings.json](EmployeeManagementWebApi/appsettings.json) file (ASP.net core).
- Update the [authConfig.ts](reactjs-app-with-msal/src/authConfig.ts) file (React.js).

Feel free to reach out to me!
