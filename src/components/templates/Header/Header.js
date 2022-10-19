const Header = () => (
  <div className="flex relative bg-white items-center py-2 px-5 sticky top-0 z-auto justify-between border-solid border-be border-gray-200 shadow-sm">
    <div>
      <img src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg" alt="logo" />
    </div>

    <div className="group">
      <button
        className="flex gap-2 items-center transition-all cursor-pointer rounded-3xl px-3 py-1 hover:bg-gray-100"
      >
        <div className="text-sm">
          Ahmed
        </div>

        <img className="inline object-cover w-9 h-9 rounded-full" src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg" alt="user avatar" />
      </button>

      <div className="hidden absolute group-hover:block w-44 bg-white rounded rounded-t-none divide-y divide-gray-100 shadow">
        <ul className="py-1">
          <li>
            <button className="w-full text-start py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Profile
            </button>
          </li>
          <button
            // onClick={() => changeLang('ar')}
            className="w-full text-start py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
          العربية
          </button>

          <li>
            <button
              // onClick={logOut}
              className="w-full text-start py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
            Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;