const SizeGuide = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Size Guide</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Find your perfect fit with our comprehensive sizing charts
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Women's Clothing</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border px-4 py-3 text-left font-semibold">Size</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">US</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">Bust (inches)</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">Waist (inches)</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">Hip (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-3">XS</td>
                      <td className="border border-border px-4 py-3">0-2</td>
                      <td className="border border-border px-4 py-3">31-32</td>
                      <td className="border border-border px-4 py-3">24-25</td>
                      <td className="border border-border px-4 py-3">34-35</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border px-4 py-3">S</td>
                      <td className="border border-border px-4 py-3">4-6</td>
                      <td className="border border-border px-4 py-3">33-34</td>
                      <td className="border border-border px-4 py-3">26-27</td>
                      <td className="border border-border px-4 py-3">36-37</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">M</td>
                      <td className="border border-border px-4 py-3">8-10</td>
                      <td className="border border-border px-4 py-3">35-36</td>
                      <td className="border border-border px-4 py-3">28-29</td>
                      <td className="border border-border px-4 py-3">38-39</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border px-4 py-3">L</td>
                      <td className="border border-border px-4 py-3">12-14</td>
                      <td className="border border-border px-4 py-3">37-39</td>
                      <td className="border border-border px-4 py-3">30-32</td>
                      <td className="border border-border px-4 py-3">40-42</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">XL</td>
                      <td className="border border-border px-4 py-3">16-18</td>
                      <td className="border border-border px-4 py-3">40-42</td>
                      <td className="border border-border px-4 py-3">33-35</td>
                      <td className="border border-border px-4 py-3">43-45</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Shoes</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border px-4 py-3 text-left font-semibold">US</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">EU</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">UK</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-3">5</td>
                      <td className="border border-border px-4 py-3">36</td>
                      <td className="border border-border px-4 py-3">3</td>
                      <td className="border border-border px-4 py-3">22.5</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border px-4 py-3">6</td>
                      <td className="border border-border px-4 py-3">37</td>
                      <td className="border border-border px-4 py-3">4</td>
                      <td className="border border-border px-4 py-3">23.0</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">7</td>
                      <td className="border border-border px-4 py-3">38</td>
                      <td className="border border-border px-4 py-3">5</td>
                      <td className="border border-border px-4 py-3">23.5</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border px-4 py-3">8</td>
                      <td className="border border-border px-4 py-3">39</td>
                      <td className="border border-border px-4 py-3">6</td>
                      <td className="border border-border px-4 py-3">24.5</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">9</td>
                      <td className="border border-border px-4 py-3">40</td>
                      <td className="border border-border px-4 py-3">7</td>
                      <td className="border border-border px-4 py-3">25.0</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border px-4 py-3">10</td>
                      <td className="border border-border px-4 py-3">41</td>
                      <td className="border border-border px-4 py-3">8</td>
                      <td className="border border-border px-4 py-3">25.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Measure</h2>
              <div className="space-y-4">
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold mb-2">Bust</h3>
                  <p className="text-sm text-muted-foreground">
                    Measure around the fullest part of your bust, keeping the tape parallel to the floor
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold mb-2">Waist</h3>
                  <p className="text-sm text-muted-foreground">
                    Measure around your natural waistline, keeping the tape comfortably loose
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-sm">
                  <h3 className="font-semibold mb-2">Hip</h3>
                  <p className="text-sm text-muted-foreground">
                    Measure around the fullest part of your hips, approximately 8 inches below your waist
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Fit Tips</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>If you're between sizes, we recommend sizing up for a more comfortable fit</li>
                <li>Check individual product pages for specific fit notes</li>
                <li>All measurements are approximate and may vary by style</li>
                <li>For the most accurate fit, measure yourself in undergarments</li>
              </ul>
            </section>

            <section className="bg-muted p-6 rounded-sm">
              <h3 className="font-semibold mb-2">Still Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                Contact our customer service team at info@modeva.com for personalized sizing assistance
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
