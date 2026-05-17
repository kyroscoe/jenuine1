import { supplierLinks } from '../../data/stores';

export default function CustomApparelPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1]">
      <section className="border-b border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Custom apparel</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Screen printing', 'Best for larger runs, spiritwear launches, and bold graphic designs.'],
            ['Embroidery', 'Ideal for hats, polos, uniforms, and more premium branded pieces.'],
            ['Heat transfer', 'Works well for names, numbers, and lower-volume customization.'],
            ['DTF printing', 'Good option for detailed artwork, fast setup, and flexible quantities.']
          ].map(([title, description]) => (
            <article key={title} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Popular apparel categories</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {['T-shirts', 'Hoodies & fleece', 'Uniforms & performance gear', 'Hats, outerwear, and workwear'].map((item) => (
              <div key={item} className="rounded-[28px] border border-stone-200 bg-[#faf9f6] p-8 text-lg font-semibold text-stone-900 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Supplier catalogs</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">Browse available apparel styles.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {supplierLinks.map((supplier) => (
              <article key={supplier.name} className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-stone-950">{supplier.name}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{supplier.description}</p>
                <a href={supplier.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center text-sm font-semibold text-stone-900 underline underline-offset-4">
                  Visit catalog
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
