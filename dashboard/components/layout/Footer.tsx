import { FC, JSX } from "react"

const Footer: FC = (): JSX.Element => {
    return (
      <footer className="fixed bottom-0 left-50 right-0 border-t bg-white dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </footer>
    );
  };
export default Footer  