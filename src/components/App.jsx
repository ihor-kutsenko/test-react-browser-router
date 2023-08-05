import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './Sharedlayout';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages//About'));
const ProductDetails = lazy(() => import('../pages//ProductDetails'));
const Products = lazy(() => import('../pages//Products'));
const Mission = lazy(() => import('./Mission'));
const Reviews = lazy(() => import('./Reviews'));
const Team = lazy(() => import('./Team'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   const location = useLocation();
//   return (
//     <div className={css.container}>
//       <header className={css.header}>
//         <p className={css.logo}>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{' '}
//           Go Merch Store
//         </p>
//         <nav className={css.nav}>
//           <NavLink
//             to="/"
//             className={`${css.link} ${
//               location.pathname === '/' ? css.activeLink : ''
//             }`}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={`${css.link} ${
//               location.pathname === '/about' ? css.activeLink : ''
//             }`}
//           >
//             About
//           </NavLink>

//           <NavLink
//             to="/products"
//             className={`${css.link} ${
//               location.pathname === '/products' ? css.activeLink : ''
//             }`}
//           >
//             Products
//           </NavLink>
//         </nav>
//       </header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </div>
//   );
// };
