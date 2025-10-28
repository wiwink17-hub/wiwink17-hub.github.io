const Returns = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Returns & Exchanges</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Our hassle-free return and exchange policy
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">30-Day Return Policy</h2>
              <p className="text-muted-foreground mb-4">
                We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you may return it within 30 days of delivery for a full refund or exchange.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Return Requirements</h2>
              <p className="text-muted-foreground mb-4">To be eligible for a return, items must meet the following conditions:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Items must be unworn, unwashed, and in original condition</li>
                <li>All original tags must be attached</li>
                <li>Items must be in original packaging when possible</li>
                <li>Proof of purchase (order number or receipt) is required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Start a Return</h2>
              <div className="space-y-4">
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold mb-2">Step 1: Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Email us at returns@modeva.com with your order number and reason for return
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold mb-2">Step 2: Receive Return Label</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll send you a prepaid return shipping label within 24 hours
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold mb-2">Step 3: Ship Your Return</h3>
                  <p className="text-sm text-muted-foreground">
                    Pack items securely and ship using the provided label
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold mb-2">Step 4: Receive Your Refund</h3>
                  <p className="text-sm text-muted-foreground">
                    Refunds are processed within 5-7 business days of receiving your return
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
              <p className="text-muted-foreground mb-4">
                We're happy to exchange items for a different size or color. To request an exchange, follow the same process as returns and indicate your preferred replacement in your email.
              </p>
              <p className="text-muted-foreground">
                Exchanges are subject to availability. If your desired item is out of stock, we'll process a full refund instead.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
              <p className="text-muted-foreground mb-4">The following items cannot be returned:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Final sale items (marked as such on product page)</li>
                <li>Items without original tags or packaging</li>
                <li>Worn, washed, or damaged items</li>
                <li>Intimates and swimwear (for hygiene reasons)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Method</h2>
              <p className="text-muted-foreground">
                Refunds will be issued to the original payment method used for purchase. Please allow 5-10 business days for the refund to appear in your account after we process your return.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
