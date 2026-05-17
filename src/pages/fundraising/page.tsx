export default function FundraisingPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1]">
      <section className="border-b border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Fundraising stores</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950">Fundraising should be a real service, not a side note.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            This page gives JENuine Designs a clear place to sell fundraising store setup for schools, teams, clubs, and organizations.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Step 1', 'Tell us about your group', 'Share the organization, the goal, and the type of apparel you want to sell.'],
            ['Step 2', 'We build the store', 'Products, branding, and store setup are organized around your group identity.'],
            ['Step 3', 'Supporters place orders online', 'Families, fans, and supporters can shop directly from the store.'],
            ['Step 4', 'Your group earns from sales', 'A portion of proceeds goes back to the organization or fundraiser.']
          ].map(([step, title, description]) => (
            <article key={title} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">{step}</p>
              <h2 className="mt-3 text-xl font-semibold text-stone-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
          <article className="rounded-[32px] border border-stone-200 bg-[#faf9f6] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Best fit</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">Good fundraising store use cases</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-stone-700">
              <li>Schools and booster clubs</li>
              <li>Sports teams and club programs</li>
              <li>Livestock and agricultural organizations</li>
              <li>Local nonprofits and community events</li>
            </ul>
          </article>
          <article className="rounded-[32px] border border-stone-200 bg-stone-950 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">Call to action</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Ready to launch a fundraiser?</h2>
            <p className="mt-4 text-base leading-7 text-stone-300">
              Use the contact page to request a fundraising store and outline the group, timeframe, and type of merchandise needed.
            </p>
            <a href="/contact" className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-200">
              Start a fundraiser
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
