import { useState } from 'react';

const tabs = [
  { key: 'shipping', label: 'Shipping' },
  { key: 'refund', label: 'Refunds' },
  { key: 'terms', label: 'Terms' }
] as const;

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['key']>('shipping');

  return (
    <div className="min-h-screen bg-[#f7f5f1]">
      <section className="border-b border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Policies</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  activeTab === tab.key
                    ? 'bg-stone-950 text-white'
                    : 'bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            {activeTab === 'shipping' && (
              <div className="space-y-8 text-stone-700">
                <div>
                  <h2 className="text-3xl font-semibold text-stone-950">Shipping policy</h2>
                  <p className="mt-4 text-base leading-7 text-stone-600">Please allow 10–15 business days for completion of most custom orders. Shipping time is separate from production time.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-950">Store windows and special notes</h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">Some spiritwear or fundraising stores may have different order windows or delivery methods. Those details should be posted directly on the store page.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-950">Bulk orders</h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">Large or event-based orders should be quoted directly so production and shipping expectations are clear up front.</p>
                </div>
              </div>
            )}

            {activeTab === 'refund' && (
              <div className="space-y-8 text-stone-700">
                <div>
                  <h2 className="text-3xl font-semibold text-stone-950">Refund policy</h2>
                  <p className="mt-4 text-base leading-7 text-stone-600">Because most items are custom made, sales are typically final unless there is a defect or a production error.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-950">Defects or order issues</h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">Customers should report issues shortly after delivery and include the order number plus photos where relevant.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-950">Cancellations</h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">Order cancellation rules should depend on whether production has started. That detail can be finalized in Shopify policy settings later.</p>
                </div>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="space-y-8 text-stone-700">
                <div>
                  <h2 className="text-3xl font-semibold text-stone-950">Terms of service</h2>
                  <p className="mt-4 text-base leading-7 text-stone-600">Customers are responsible for reviewing sizes, quantities, and submitted information before placing their order.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-950">Artwork and permissions</h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">Anyone submitting logos or artwork needs the right to use them. That is especially important for schools, clubs, and branded organizations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-950">Approvals</h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">For direct custom work, proofs and final approvals should be confirmed before production begins.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
