export function Header() {

  return (
    <header style={{backgroundColor: "grey", height: "150px"}}>
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-9" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className=" flex items-left h-12 w-auto" src="../../asset/spotify.png" />
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-start">
          <a href="#" className="font-semibold leading-6 text-gray-900 text-3xl">
            MEHTIFY
          </a>
        </div>
      </nav>
    </header>
  )
}