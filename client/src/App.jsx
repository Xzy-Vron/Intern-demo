import React from "react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { CardDemo } from "./pages/Login";
import  Dashboard  from "./pages/Dashboard";

 
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<CardDemo />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
