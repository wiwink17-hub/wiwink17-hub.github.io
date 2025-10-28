const Shipping = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Shipping Information</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Everything you need to know about our shipping process
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Shipping Methods & Costs</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold text-foreground mb-2">Standard Shipping - Free</h3>
                  <p className="text-sm">Delivery in 5-7 business days • Free on orders over $200</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold text-foreground mb-2">Express Shipping - $25</h3>
                  <p className="text-sm">Delivery in 2-3 business days</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold text-foreground mb-2">Overnight Shipping - $45</h3>
                  <p className="text-sm">Next business day delivery</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
              <p className="text-muted-foreground mb-4">
                All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
              </p>
              <p className="text-muted-foreground">
                If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
              <p className="text-muted-foreground mb-4">
                We currently ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>International orders may be subject to customs duties and import taxes</li>
                <li>Delivery typically takes 7-14 business days</li>
                <li>Tracking information provided for all international shipments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
              <p className="text-muted-foreground mb-4">
                You will receive a shipping confirmation email with tracking information once your order has shipped. You can track your package status at any time using the tracking number provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
              <p className="text-muted-foreground mb-4">
                Please ensure your shipping address is correct before completing your order. We are not responsible for orders shipped to incorrect addresses provided by the customer.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
