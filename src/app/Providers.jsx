// 'use clinet'; 

// import { ThemeProvider } from "next-themes";
// import { Children } from "react/cjs/react.production.min";

// export default function Providers({Children}) {
//   return (
//     <ThemeProvider defaultTheme="system"  attribute="class">
//       <div>
//         {Children}
//       </div>
//     </ThemeProvider>
//   )
// }


'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <div className='text-sky-200 dark:text-sky-200 dark:bg-sky-700 min-h-screen select-none transition-colors duration-300'>
        {children}
      </div>
    </ThemeProvider>
  );
}