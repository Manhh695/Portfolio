// Đây là file component của bạn
// Bạn có thể sử dụng bất kỳ thư viện phụ thuộc (dependencies) nào từ npm; chúng tôi sẽ tự động import chúng trong package.json

import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              90deg, 
              transparent 0%,
              transparent 30%,
              rgba(138, 43, 226, 0.4) 50%,
              transparent 70%,
              transparent 100%
            ),
            linear-gradient(
              to bottom,
              #1a1a2e 0%,
              #2d1b69 50%,
              #0f0f23 100%
            )
          `,
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 79px,
              rgba(255, 255, 255, 0.05) 80px,
              rgba(255, 255, 255, 0.05) 81px
            )
          `,
        }}
      />
    </div>
  );
};

export default Component;
