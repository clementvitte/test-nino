export function MusicField() {
    return (
        <div style={{backgroundColor: "grey"}}>
            <nav className="mx-auto flex max-w-8xl items-center justify-between lg:px-8" aria-label="Global">
                <div>
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="items-left h-12 w-auto" src="../../asset/spotify.png" />
                    </a>
                </div>

                <div>
                    <a href="#" className="font-semibold leading-6 text-gray-900 text-1xl">
                        Title
                    </a>
                </div>

                <div>
                    <a href="#" className="font-semibold leading-6 text-gray-900 text-1xl">
                        Authors
                    </a>
                </div>

                <div>
                    <a href="#" className="font-semibold leading-6 text-gray-900 text-1xl">
                        Duration
                    </a>
                </div>

                <div>
                    <a href="#" className="font-semibold leading-6 text-gray-900 text-1xl">
                        start
                    </a>
                </div>
            </nav>
        </div>
    )
}