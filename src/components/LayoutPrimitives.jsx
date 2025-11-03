const Container = ({ children }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Divider = () => (
  <div className="mx-auto mt-8 mb-6 h-px w-3/5 max-w-xl bg-white/15" />
);

export { Container, Divider };
