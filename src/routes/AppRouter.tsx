import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "@/pages/login/LoginPage";
import Error404Page from "@/pages/error/Error404Page";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          {/* <Route path="/audit" element={<AuditPage />} /> */}
          {/* <Route path="/*" element={<Layout />} /> */}
          {/* <Route path="/address" element={<Address onSubmit={() => {}} />} /> */}
          {/* <Route
            path="/samplePage"
            element={<SamplePage onSubmit={() => {}} />}
          /> */}
        </Route>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
