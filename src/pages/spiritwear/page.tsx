import { featuredProducts, stores } from '../../data/stores';

export default function SpiritwearPage() {
  const spiritwearStores = stores.filter((store) => store.category === 'school' || store.category === 'sports');

  return (
    <div className="min-h-screen bg-[#f7f5f1]">
      <section className="border-b border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Spiritwear</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950">Spiritwear That Builds Community.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            Show your pride with custom-designed apparel for schools, teams, and organizations.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {spiritwearStores.map((store) => (
              <article key={store.id} className="rounded-[30px] border border-stone-200 bg-white p-6 shadow-sm">
                <div className="flex aspect-[4/3] items-center justify-center rounded-[24px] bg-stone-100 p-6">
                  <img src={store.logo} alt={store.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-stone-950">{store.name}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">{store.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Featured spiritwear products</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4" data-product-shop>
            {featuredProducts.slice(0, 4).map((product, index) => (
              <article key={`${product.title}-${index}`} className="overflow-hidden rounded-[28px] border border-stone-200 bg-[#faf9f6] shadow-sm">
                <div className="aspect-square bg-white p-4">
                  <img src={product.img} alt={product.title} className="h-full w-full rounded-[20px] object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{product.storeName}</p>
                  <h3 className="mt-2 text-lg font-semibold text-stone-900">{product.title}</h3>
                  <p className="mt-3 text-base font-semibold text-stone-800">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-stone-950 p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">Need a spiritwear store?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Launch a dedicated school or team store.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
            Use one organized storefront per school, team, or organization so families and supporters can actually find the right gear.
          </p>
          <a href="/contact" className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-200">
            Start a spiritwear store
          </a>
        </div>
      </section>
    </div>
  );
}
