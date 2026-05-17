import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="mb-3 text-xl font-semibold text-white">JENuine Designs</p>
            <p className="max-w-md text-sm leading-7 text-stone-400">
              Custom apparel, uniforms, spiritwear, and fundraising stores for schools, teams, businesses, farms, and organizations.
            </p>
            <p className="mt-4 text-sm text-stone-500">Typical turnaround: 10–15 business days unless a store window states otherwise.</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/spiritwear" className="hover:text-white">Spiritwear</Link></li>
              <li><Link to="/stores" className="hover:text-white">School & Team Stores</Link></li>
              <li><Link to="/custom-apparel" className="hover:text-white">Custom Apparel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/policies" className="hover:text-white">Shipping & Refunds</Link></li>
              <li><Link to="/policies" className="hover:text-white">Terms & Policies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Connect</h3>
            <a
              href="https://www.facebook.com/DesignsJenuine/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition hover:border-stone-500 hover:text-white"
              aria-label="Facebook"
            >
              <i className="ri-facebook-fill text-xl"></i>
            </a>
            <p className="mt-4 text-sm leading-7 text-stone-400">
              Use the contact page to request a custom apparel quote, launch a team store, or start a fundraiser.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-800 pt-6 text-sm text-stone-500">
          © {new Date().getFullYear()} JENuine Designs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
