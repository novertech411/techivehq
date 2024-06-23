import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="lg:max-w-[1300px] md:max-w-[764px] w-[90%] mx-auto">
      {children}
    </div>
  );
}

export default Container;
