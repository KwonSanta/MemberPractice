import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home.jsx";
import { MemberLogin } from "./page/member/MemberLogin.jsx";
import { MemberLogout } from "./page/member/MemberLogout.jsx";
import { MemberSignUp } from "./page/member/MemberSignUp.jsx";
import { MemberList } from "./page/member/MemberList.jsx";
import { MemberInfo } from "./page/member/MemberInfo.jsx";
import { MemberEdit } from "./page/member/MemberEdit.jsx";

function App(props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <MemberLogin />,
        },
        { path: "member/login", element: <MemberLogin /> },
        { path: "member/logout", element: <MemberLogout /> },
        { path: "member/signup", element: <MemberSignUp /> },
        { path: "member/list", element: <MemberList /> },
        { path: "member/info", element: <MemberInfo /> },
        { path: "member/edit", element: <MemberEdit /> },
      ],
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
