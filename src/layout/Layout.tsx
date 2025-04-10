function Layout() {
  //   const { tabMenu, setTabMenu, activeTab } = useTabMenu();
  //   const { fetchMenu } = useMenu();

  //   useEffect(() => {
  //     fetchMenu();

  //     setTabMenu(
  //       tabMenu.map(({ name, href }) => ({
  //         name,
  //         href,
  //       }))
  //     );
  //   }, []);

  return (
    <div className="flex flex-col w-full h-full">
      {/* <Header />
  
        <main className="flex flex-grow overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-grow overflow-hidden">
            <TabMenu />
            <div className="flex flex-col flex-grow p-3 overflow-y-auto">
              {tabMenu.map((tab) => (
                <div
                  key={tab.href}
                  className="relative flex flex-col h-full"
                  style={{
                    display: activeTab === tab.href ? "" : "none",
                  }}
                >
                  {tab.href ? (
                    <>
                      <Breadcrumbs />
                      <div className="relative flex-grow">
                        <DynamicComponent componentPath={tab.href} />
                      </div>
                    </>
                  ) : (
                    <div className="h-full p-3 bg-white rounded">
                      <Error404Page />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Footer />
          </div>
        </main> */}
    </div>
  );
}

export default Layout;
