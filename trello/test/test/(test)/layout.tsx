const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div>This is a NavBar</div>
      <hr />
      {children}
    </div>
  );
};

export default TestLayout;
