import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';

const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Home = lazy(() => import('../Home/Home'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));
const Movies = lazy(() => import('../Movies/Movies'));

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieid" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<div>not found</div>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;