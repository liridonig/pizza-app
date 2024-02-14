import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="align-s grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className="w-full items-center justify-center overflow-scroll">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
