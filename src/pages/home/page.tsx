import { Link } from 'react-router-dom';
import { featuredProducts, stores, supplierLinks } from '../../data/stores';

export default function HomePage() {
  const featuredStores = stores.filter((store) => store.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f7f5f1] text-stone-900">
      <section className="border-b border-stone-200 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(245,241,234,1))] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">Uniforms • Spiritwear • Team Gear • Corporate Branding</p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
              CUSTOM APPAREL THAT TELLS YOUR STORY
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              JENuine Designs creates custom apparel, uniforms, spiritwear, and branded online stores that feel organized, consistent, and easy to shop.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/stores" className="inline-flex items-center rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
                Find your store
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-400 hover:bg-white">
                Start a custom order
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                ['Custom apparel', 'T-shirts, hoodies, uniforms, hats, and branded gear'],
                ['Spiritwear stores', 'Dedicated stores for schools, clubs, and organizations'],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-stone-200 bg-white/80 p-5 shadow-sm">
                  <p className="text-base font-semibold text-stone-900">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredStores.map((store) => (
              <div key={store.id} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
                <div className="flex aspect-square items-center justify-center rounded-[22px] bg-stone-100 p-5">
                  <img src={store.logo} alt={store.name} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="mt-5 text-lg font-semibold text-stone-900">{store.name}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{store.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Featured stores</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">Explore our most popular stores, all fully customizable to match your brand</h2>
            </div>
            <Link to="/stores" className="text-sm font-semibold text-stone-800 underline decoration-stone-300 underline-offset-4">
              View all stores
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredStores.map((store) => (
              <article key={store.id} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex aspect-[4/3] items-center justify-center rounded-[22px] bg-stone-100 p-6">
                  <img src={store.logo} alt={store.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-stone-900">{store.name}</h3>
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-stone-600">
                      {store.category}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{store.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Featured products</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">Explore our most popular items.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-product-shop>
            {featuredProducts.map((product, index) => (
              <article key={`${product.title}-${index}`} className="overflow-hidden rounded-[28px] border border-stone-200 bg-[#faf9f6] shadow-sm">
                <div className="aspect-square bg-white p-4">
                  <img src={product.img} alt={product.title} className="h-full w-full rounded-[20px] object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{product.storeName}</p>
                  <h3 className="mt-2 text-xl font-semibold text-stone-900">{product.title}</h3>
                  <p className="mt-3 text-base font-semibold text-stone-800">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* How It Works */}
<section className="bg-white px-4 py-20 sm:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-stone-500">
        Simple Process
      </p>
      <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        How It Works
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">
        We make it easy to launch custom apparel, spiritwear, and online stores
        for schools, teams, businesses, and fundraisers.
      </p>
    </div>

    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
      <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-slate-200 md:block" />

      {[
        {
          step: "01",
          icon: "ri-store-2-line",
          title: "Choose Your Store Type",
          description:
            "Start a spiritwear store, fundraiser, team shop, or custom apparel order based on what your group needs.",
        },
        {
          step: "02",
          icon: "ri-image-2-line",
          title: "Send Logos or Artwork",
          description:
            "Share your logo, design files, or ideas. We will help prepare the right apparel options for your store or order.",
        },
        {
          step: "03",
          icon: "ri-check-double-line",
          title: "Approve the Setup",
          description:
            "Review the design, product choices, and store setup before anything goes live or into production.",
        },
        {
          step: "04",
          icon: "ri-truck-line",
          title: "Launch and Fulfill",
          description:
            "Customers place orders online, and we handle production and delivery with a clean, consistent process.",
        },
      ].map((item) => (
        <div
          key={item.step}
          className="relative z-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-colors hover:border-slate-300 hover:bg-white"
        >
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white">
            <i className={`${item.icon} text-3xl text-slate-700`} />
          </div>

          <p className="mb-2 text-xs font-bold tracking-[0.18em] text-stone-500">
            STEP {item.step}
          </p>

          <h3 className="mb-3 text-lg font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="text-sm leading-6 text-slate-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <Link
        to="/contact"
        className="inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Start a Store
      </Link>
    </div>
  </div>
</section>

      <section className="border-y border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Catalog sources</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">Premium Brands We Work With.</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              We partner with industry-leading suppliers to ensure you receive the highest quality products.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {supplierLinks.map((supplier) => (
              <article key={supplier.name} className="rounded-[28px] border border-stone-200 bg-[#faf9f6] p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-stone-900">{supplier.name}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{supplier.description}</p>
                <a href={supplier.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center text-sm font-semibold text-stone-900 underline underline-offset-4">
                  Browse catalog
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
