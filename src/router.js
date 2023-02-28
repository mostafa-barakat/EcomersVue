import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Products from "@/views/Products";
import Contact from "@/views/Contact";
import Info from "@/views/Info";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;