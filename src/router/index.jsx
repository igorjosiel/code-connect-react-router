import { BrowserRouter, Route, Routes } from "react-router";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Feed } from "../pages/Feed";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { BlogPost } from "../pages/BlogPost";
import { AuthLayout } from "../layouts/Auth";
import { AppLayout } from "../layouts/App";
import { NotFound } from "../pages/NotFound";
import { NewPost } from "../pages/NewPost";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth' element={<AuthLayout />}>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                </Route>

                <Route path="/" element={<AppLayout />}>
                    <Route path="" element={<Feed />} />
                    <Route path="blog-post/:slug" element={<BlogPost />} />
                    <Route path="new-post" element={<NewPost />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
