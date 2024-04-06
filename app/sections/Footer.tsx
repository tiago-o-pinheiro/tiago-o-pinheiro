import React from "react";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full mt-4 flex justify-center border-t divide-gray-300 py-4 dark:bg-gray-800">
      <p className="dark:text-white text-gray text-sm text-center">
        © {year} - Made with ❤️ by Tiago Pinheiro |{" "}
        <a href="mailto:tiagoliver@protonmail.com">tiagoliver@protonmail.com</a>
      </p>
    </div>
  );
};
