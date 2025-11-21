
export default function EmpressNavbar() {
  return (
    <div className="w-full bg-black shadow-inner border-b-1 border-zinc-800">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-5">
            <a href="/">
                <img src="/images/Logo.png" alt="Logo" className="w-48 h-8 z-10" />
                {/* <span className="text-base font-semibold text-black dark:text-zinc-50">Empress PC</span> */}
            </a>
            <div>
                <a href="products" className="px-5 text-sm text-black dark:text-zinc-50">Products</a>
                <a href="/pc-builder" className="px-5 text-xs text-black dark:text-zinc-50">Build PC</a>
                <a href="/gaming" className="px-5 text-xs text-black dark:text-zinc-50">Gaming</a>
                <a href="/workstations" className="px-5 text-xs text-black dark:text-zinc-50">Workstations</a>
                <a href="/accessories" className="px-5 text-xs text-black dark:text-zinc-50">Accessories</a>
                <a href="/events" className="px-5 text-xs text-black dark:text-zinc-50">Events</a>
                <a href="/blogs" className="px-5 text-xs text-black dark:text-zinc-50">Blogs</a>
                <a href="/about" className="px-5 text-xs text-black dark:text-zinc-50">About</a>
                <a href="/faqs" className="px-5 text-xs text-black dark:text-zinc-50">FAQs</a>
            </div>
            <div>
                <a href="/contact" className="px-5 py-4 text-xs text-zinc-50 dark:text-black bg-white dark:bg-zinc-50 rounded-full">
                    <span>Contact</span>
                </a>
            </div>
        </nav>
    </div>
    
  );
}