import { Routes, Route } from "react-router-dom";

import { Details } from '../pages/Details';
import { PreviewPost } from '../pages/PreviewPost';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Details />} />
            <Route path="/posts/:id" element={<PreviewPost />} />
        </Routes>
    )
}