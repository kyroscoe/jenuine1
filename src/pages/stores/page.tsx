import { useMemo, useState } from 'react';
import { storeCategories, stores } from '../../data/stores';

type CategoryId = (typeof storeCategories)[number]['id'];

export default function StoresPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const filteredStores = useMemo(() => {
    if (activeCategory === 'all') return stores;
    return stores.filter((store) => store.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#f7f5f1]">
      <section className="border-b border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">School, team, and community stores</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950">Browse active stores</h1>

        </div>
      </section>

      <section className="sticky top-20 z-20 border-b border-stone-200 bg-[#f7f5f1]/95 px-4 py-5 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {storeCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category.id
                  ? 'bg-stone-950 text-white'
                  : 'bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-stone-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredStores.map((store) => (
            <article key={store.id} className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-sm">
              <div className="flex aspect-[4/3] items-center justify-center bg-stone-100 p-8">
                <img src={store.logo} alt={store.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold text-stone-950">{store.name}</h2>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
                    {store.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-600">{store.description}</p>

                <div className="mt-6 border-t border-stone-200 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Available products</p>
                  {store.products.length > 0 ? (
                    <ul className="mt-3 space-y-2 text-sm text-stone-700">
                      {store.products.slice(0, 3).map((product) => (
                        <li key={product.title} className="flex items-center justify-between gap-4">
                          <span>{product.title}</span>
                          <span className="text-stone-500">{product.price}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-stone-500">Products coming soon for this store.</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">Ready to Launch Your Store?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
                Create a custom online store for your organization with no upfront costs and easy management.
              </p>
            </div>
            <a href="/contact" className="inline-flex items-center rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
              Request a store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
