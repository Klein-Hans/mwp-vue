import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Inquiries from "@/pages/Inquiries.vue";
import Projects from "@/pages/Projects.vue";
import News from "@/pages/News.vue";
import Users from "@/pages/Users.vue";
import UserTypes from "@/pages/UserTypes.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "inquiries",
        name: "Inquiries",
        component: Inquiries
      },
      {
        path: "projects",
        name: "Projects",
        component: Projects 
      },
      {
        path: "news",
        name: "News",
        component: News
      },
      {
        path: "users",
        name: "Users",
        component: Users
      },
      {
        path: "user-types",
        name: "User Types",
        component: UserTypes
      }
    ]
  }
];

export default routes;
