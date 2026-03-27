import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { ExplorePage } from './pages/ExplorePage';
import { HomePage } from './pages/HomePage';
import { PlaceholderDetailPage } from './pages/PlaceholderDetailPage';
import { PlaceholderListPage } from './pages/PlaceholderListPage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="news" element={<PlaceholderListPage section="news" />} />
        <Route path="news/:slug" element={<PlaceholderDetailPage section="news" />} />
        <Route path="diaries" element={<PlaceholderListPage section="diaries" />} />
        <Route path="diaries/:slug" element={<PlaceholderDetailPage section="diaries" />} />
        <Route path="locations" element={<PlaceholderListPage section="locations" />} />
        <Route path="locations/:slug" element={<PlaceholderDetailPage section="locations" />} />
        <Route path="sponsors" element={<PlaceholderListPage section="sponsors" />} />
        <Route path="sponsors/:slug" element={<PlaceholderDetailPage section="sponsors" />} />
        <Route path="history" element={<PlaceholderListPage section="history" />} />
        <Route path="history/:slug" element={<PlaceholderDetailPage section="history" />} />
      </Route>
    </Routes>
  );
}
