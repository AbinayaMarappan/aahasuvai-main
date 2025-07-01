// import { Switch, Route } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "./components/ui/toaster";
// import { TooltipProvider } from "./components/ui/tooltip";
// import Contact from "./pages/Contact";
// import Layout from "./components/Layout"; // ✅ ADD THIS LINE
// import OffersPage from "./pages/Offers"; // at the top

// import Home from "./pages/Home";
// import NotFound from "./pages/not-found";
// import About from "@/pages/About";
// import PartnerWithUs from "@/pages/ParterWithUs";
// import ProductPage from "@/pages/ProductPage"; 
// import CartPage from "@/pages/CartPage";
// import SignIn from "@/pages/SignIn";
// import { CartProvider } from "@/context/CartContext";


// function Router() {
//   return (
//     <Switch>
//       <Route path="/offers" component={OffersPage} />
//       <Route path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/partner" component={PartnerWithUs} />
//       <Route path="/products" component={ProductPage} />
//       <Route path="/contact" component={Contact} /> {/* ✅ Add this */}
//       <Route path="/cart" component={CartPage} />
//       <Route path="/signin" component={SignIn} />
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <CartProvider>
//         <TooltipProvider>
//           <Toaster />

//           {/* ✅ WRAP ALL PAGES WITH LAYOUT HERE */}
//           <Layout>
//             <Router />
//           </Layout>

//         </TooltipProvider>
//       </CartProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;
// import { Switch, Route } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "./components/ui/toaster";
// import { TooltipProvider } from "./components/ui/tooltip";
// import Layout from "./components/Layout";
// import ScrollToTop from "@/components/Scrolltotop"; // add this
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import OffersPage from "./pages/Offers";
// import About from "@/pages/About";
// import PartnerWithUs from "@/pages/ParterWithUs";
// import ProductPage from "@/pages/ProductPage";
// import CartPage from "@/pages/CartPage";
// import SignIn from "@/pages/SignIn";
// import NotFound from "@/pages/not-found";
// import Privacy from "@/pages/privacy";        // ✅ NEW
// import Terms from "@/pages/terms";            // ✅ NEW
// import { CartProvider } from "@/context/CartContext";
// import ReturnRefund from "./pages/return-refund"; // ✅ Adjust path if different

// function Router() {
//   return (
//     <Switch>
//       <Route path="/" component={Home} />
//       <Route path="/offers" component={OffersPage} />
//       <Route path="/about" component={About} />
//       <Route path="/partner" component={PartnerWithUs} />
//       <Route path="/products" component={ProductPage} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/cart" component={CartPage} />
//       <Route path="/signin" component={SignIn} />
//       <Route path="/privacy" component={Privacy} />     {/* ✅ NEW */}
//       <Route path="/terms" component={Terms} />         {/* ✅ NEW */}
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <CartProvider>
//         <TooltipProvider>
//           <Toaster />
//           <Layout>
//             <Router />
//           </Layout>
//           <ScrollToTop /> {/* ✅ Add here */}
//         </TooltipProvider>
//       </CartProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Layout from "./components/Layout";
import ScrollToTop from "@/components/Scrolltotop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OffersPage from "./pages/Offers";
import About from "@/pages/About";
import PartnerWithUs from "@/pages/ParterWithUs";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import SignIn from "@/pages/SignIn";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import ReturnRefund from "./pages/return-refund"; // ✅ NEW
import { CartProvider } from "@/context/CartContext";
import Copyright from "./pages/copyright"; // adjust if path differs
import ShippingPolicy from "./pages/shipping"; // adjust the path
import Footer from "./components/Footer"; // ✅ Adjust path if needed
import MyAccount from "./pages/my-account";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/offers" component={OffersPage} />
      <Route path="/about" component={About} />
      <Route path="/partner" component={PartnerWithUs} />
      <Route path="/products" component={ProductPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={CartPage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/return-refund" component={ReturnRefund} /> {/* ✅ ADDED */}
      <Route path="/copyright" component={Copyright} />
      <Route path="/shipping-policy" component={ShippingPolicy} />
      <Route path="/account" component={MyAccount} /> // ✅ add this
      <Route component={NotFound} />

    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Layout>
            <Router />
          </Layout>
          <ScrollToTop />
        </TooltipProvider>
      </CartProvider>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
